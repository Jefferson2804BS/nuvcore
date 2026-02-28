/*
 * NUVCORE — Notification History Page
 * Shows all notifications with filtering and management options
 */

import { useNotification } from "@/contexts/NotificationContext";
import { Trash2, CheckCircle, AlertCircle, AlertTriangle, Info, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotificationHistory() {
  const { notifications, markAsRead, deleteNotification } = useNotification();
  const [, navigate] = useLocation();

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} style={{ color: "#22C55E" }} />;
      case "error":
        return <AlertCircle size={20} style={{ color: "#EF4444" }} />;
      case "warning":
        return <AlertTriangle size={20} style={{ color: "#F59E0B" }} />;
      case "info":
      default:
        return <Info size={20} style={{ color: "#3B82F6" }} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "#22C55E";
      case "error":
        return "#EF4444";
      case "warning":
        return "#F59E0B";
      case "info":
      default:
        return "#3B82F6";
    }
  };

  const formatDate = (timestamp: string | number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div style={{ backgroundColor: "#0F0F12", minHeight: "100vh", paddingTop: "80px" }}>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={24} style={{ color: "#F2F2F2" }} />
          </button>
          <div>
            <h1
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Histórico de Notificações
            </h1>
            <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif", marginTop: "8px" }}>
              {notifications.length} notificação{notifications.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Notifications List */}
        {notifications.length === 0 ? (
          <div
            className="text-center py-12 rounded-lg"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Info size={48} style={{ color: "rgba(242,242,242,0.4)", margin: "0 auto 16px" }} />
            <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}>
              Nenhuma notificação ainda
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-4 p-4 rounded-lg border transition-all duration-200 hover:bg-opacity-80"
                style={{
                  backgroundColor: notification.read ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                  borderColor: notification.read ? "rgba(255,255,255,0.1)" : getTypeColor(notification.type),
                  borderLeftWidth: "3px",
                  borderLeftColor: getTypeColor(notification.type),
                }}
              >
                <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-semibold text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {notification.title}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {notification.message}
                      </p>
                      <p
                        className="text-xs mt-2"
                        style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {formatDate(notification.createdAt)}
                      </p>
                    </div>
                    {!notification.read && (
                      <span
                        className="px-2 py-1 rounded text-xs font-semibold flex-shrink-0"
                        style={{
                          backgroundColor: `${getTypeColor(notification.type)}20`,
                          color: getTypeColor(notification.type),
                        }}
                      >
                        Novo
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                      title="Marcar como lido"
                    >
                      <CheckCircle size={18} style={{ color: "#22C55E" }} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    title="Deletar"
                  >
                    <Trash2 size={18} style={{ color: "#EF4444" }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
