import { Server as HTTPServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

let io: SocketIOServer | null = null;

export function initializeWebSocket(server: HTTPServer): SocketIOServer {
  io = new SocketIOServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log(`[WebSocket] Client connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`[WebSocket] Client disconnected: ${socket.id}`);
    });

    socket.on("error", (error) => {
      console.error(`[WebSocket] Error for ${socket.id}:`, error);
    });
  });

  return io;
}

export function getWebSocketServer(): SocketIOServer | null {
  return io;
}

export function broadcastNotification(notification: {
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  actionUrl?: string;
  metadata?: string;
}) {
  if (io) {
    io.emit("notification:new", notification);
    console.log("[WebSocket] Broadcast notification:", notification.title);
  }
}

export function notifyUser(userId: number | null, notification: any) {
  if (io && userId) {
    io.to(`user:${userId}`).emit("notification:new", notification);
    console.log(`[WebSocket] Notified user ${userId}`);
  } else if (io) {
    // Broadcast to all if no specific user
    broadcastNotification(notification);
  }
}

export function joinUserRoom(socket: Socket, userId: number) {
  socket.join(`user:${userId}`);
  console.log(`[WebSocket] User ${userId} joined room`);
}
