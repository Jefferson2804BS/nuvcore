import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

function createAuthContext(userId: number = 1): TrpcContext {
  return {
    user: {
      id: userId,
      openId: "test-user",
      email: "test@example.com",
      name: "Test User",
      loginMethod: "test",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("notification.create", () => {
  it("should create a notification with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.notification.create({
      type: "success",
      title: "Test Notification",
      message: "This is a test notification",
    });

    expect(result.success).toBe(true);
  });

  it("should validate required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.notification.create({
        type: "success",
        title: "",
        message: "Test message",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should accept all notification types", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const types = ["success", "error", "warning", "info"] as const;

    for (const type of types) {
      const result = await caller.notification.create({
        type,
        title: `${type} Notification`,
        message: `This is a ${type} notification`,
      });

      expect(result.success).toBe(true);
    }
  });
});

describe("notification.list", () => {
  it("should return list of notifications", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const notifications = await caller.notification.list();

    expect(Array.isArray(notifications)).toBe(true);
  });

  it("should return notifications for authenticated user", async () => {
    const ctx = createAuthContext(1);
    const caller = appRouter.createCaller(ctx);

    const notifications = await caller.notification.list();

    expect(Array.isArray(notifications)).toBe(true);
  });
});

describe("notification.unreadCount", () => {
  it("should return unread count", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const count = await caller.notification.unreadCount();

    expect(typeof count).toBe("number");
    expect(count).toBeGreaterThanOrEqual(0);
  });
});

describe("notification.markAsRead", () => {
  it("should mark notification as read", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // First, create a notification
    await caller.notification.create({
      type: "info",
      title: "Test",
      message: "Test message",
    });

    // Get the notification
    const notifications = await caller.notification.list();
    if (notifications.length > 0) {
      const result = await caller.notification.markAsRead({
        id: notifications[0].id,
      });

      expect(result.success).toBe(true);
    }
  });
});

describe("notification.delete", () => {
  it("should delete a notification", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // First, create a notification
    await caller.notification.create({
      type: "info",
      title: "Test",
      message: "Test message",
    });

    // Get the notification
    const notifications = await caller.notification.list();
    if (notifications.length > 0) {
      const result = await caller.notification.delete({
        id: notifications[0].id,
      });

      expect(result.success).toBe(true);
    }
  });
});
