import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useNotification } from "@/contexts/NotificationContext";

let socket: Socket | null = null;

export function useWebSocket() {
  const { addToast, loadNotifications } = useNotification();

  useEffect(() => {
    // Initialize socket connection
    if (!socket) {
      socket = io(window.location.origin, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
      });

      socket.on("connect", () => {
        console.log("[WebSocket] Connected:", socket?.id);
      });

      socket.on("notification:new", (notification) => {
        console.log("[WebSocket] Received notification:", notification);
        
        // Add toast notification
        addToast({
          type: notification.type || "info",
          title: notification.title,
          message: notification.message,
          actionUrl: notification.actionUrl,
        });

        // Reload notifications list
        loadNotifications();
      });

      socket.on("disconnect", () => {
        console.log("[WebSocket] Disconnected");
      });

      socket.on("error", (error) => {
        console.error("[WebSocket] Error:", error);
      });
    }

    return () => {
      // Don't disconnect on unmount to keep connection alive
    };
  }, [addToast, loadNotifications]);

  return socket;
}
