import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, contacts, notifications, InsertNotification } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createContact(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create contact: database not available");
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(contacts).values({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      message: data.message,
      status: "new",
    });
    return result;
  } catch (error) {
    console.error("[Database] Failed to create contact:", error);
    throw error;
  }
}

export async function getContacts() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get contacts: database not available");
    return [];
  }

  try {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  } catch (error) {
    console.error("[Database] Failed to get contacts:", error);
    throw error;
  }
}


export async function createNotification(data: InsertNotification) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create notification: database not available");
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(notifications).values({
      userId: data.userId || null,
      type: data.type || "info",
      title: data.title,
      message: data.message,
      read: 0,
      actionUrl: data.actionUrl || null,
      metadata: data.metadata || null,
    });
    return result;
  } catch (error) {
    console.error("[Database] Failed to create notification:", error);
    throw error;
  }
}

export async function getNotifications(userId?: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get notifications: database not available");
    return [];
  }

  try {
    const result = await db
      .select()
      .from(notifications)
      .orderBy(notifications.createdAt);
    
    if (userId) {
      return result.filter(n => n.userId === userId);
    }
    return result;
  } catch (error) {
    console.error("[Database] Failed to get notifications:", error);
    throw error;
  }
}

export async function markNotificationAsRead(notificationId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot mark notification as read: database not available");
    throw new Error("Database not available");
  }

  try {
    return await db
      .update(notifications)
      .set({ read: 1 })
      .where(eq(notifications.id, notificationId));
  } catch (error) {
    console.error("[Database] Failed to mark notification as read:", error);
    throw error;
  }
}

export async function deleteNotification(notificationId: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot delete notification: database not available");
    throw new Error("Database not available");
  }

  try {
    return await db
      .delete(notifications)
      .where(eq(notifications.id, notificationId));
  } catch (error) {
    console.error("[Database] Failed to delete notification:", error);
    throw error;
  }
}

export async function getUnreadNotificationCount(userId?: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get unread count: database not available");
    return 0;
  }

  try {
    const result = await db
      .select()
      .from(notifications)
      .where(eq(notifications.read, 0));
    
    if (userId) {
      return result.filter(n => n.userId === userId).length;
    }
    return result.length;
  } catch (error) {
    console.error("[Database] Failed to get unread count:", error);
    return 0;
  }
}
