import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { trpc } from "@/lib/trpc";

export type NotificationType = "success" | "error" | "warning" | "info";

export interface ToastNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  actionUrl?: string;
  timestamp: number;
  read?: boolean;
  dbId?: number;
}

interface NotificationContextType {
  toasts: ToastNotification[];
  addToast: (notification: Omit<ToastNotification, "id" | "timestamp">) => void;
  removeToast: (id: string) => void;
  clearAllToasts: () => void;
  notifications: any[];
  unreadCount: number;
  markAsRead: (id: number) => void;
  deleteNotification: (id: number) => void;
  loadNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // tRPC hooks
  const listNotifications = trpc.notification.list.useQuery();
  const unreadCountQuery = trpc.notification.unreadCount.useQuery();
  const markAsReadMutation = trpc.notification.markAsRead.useMutation();
  const deleteNotificationMutation = trpc.notification.delete.useMutation();

  const addToast = useCallback((notification: Omit<ToastNotification, "id" | "timestamp">) => {
    const id = `${Date.now()}-${Math.random()}`;
    const newToast: ToastNotification = {
      ...notification,
      id,
      timestamp: Date.now(),
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto-remove toast after 5 seconds
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const markAsRead = useCallback((id: number) => {
    markAsReadMutation.mutate({ id });
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: 1 } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  }, [markAsReadMutation]);

  const deleteNotification = useCallback((id: number) => {
    deleteNotificationMutation.mutate({ id });
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, [deleteNotificationMutation]);

  const loadNotifications = useCallback(() => {
    listNotifications.refetch();
    unreadCountQuery.refetch();
  }, [listNotifications, unreadCountQuery]);

  // Load notifications on mount and update state
  useEffect(() => {
    if (listNotifications.data) {
      setNotifications(listNotifications.data);
    }
  }, [listNotifications.data]);

  useEffect(() => {
    if (unreadCountQuery.data !== undefined) {
      setUnreadCount(unreadCountQuery.data);
    }
  }, [unreadCountQuery.data]);

  return (
    <NotificationContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        clearAllToasts,
        notifications,
        unreadCount,
        markAsRead,
        deleteNotification,
        loadNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
}
