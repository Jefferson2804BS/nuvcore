import React, { useEffect } from "react";
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from "lucide-react";
import type { NotificationType } from "@/contexts/NotificationContext";

interface ToastProps {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  onClose: (id: string) => void;
  actionUrl?: string;
}

const toastConfig: Record<NotificationType, { bg: string; border: string; icon: React.ReactNode; textColor: string }> = {
  success: {
    bg: "rgba(34, 197, 94, 0.1)",
    border: "rgba(34, 197, 94, 0.3)",
    icon: <CheckCircle size={20} style={{ color: "#22C55E" }} />,
    textColor: "#F2F2F2",
  },
  error: {
    bg: "rgba(239, 68, 68, 0.1)",
    border: "rgba(239, 68, 68, 0.3)",
    icon: <AlertCircle size={20} style={{ color: "#EF4444" }} />,
    textColor: "#F2F2F2",
  },
  warning: {
    bg: "rgba(245, 158, 11, 0.1)",
    border: "rgba(245, 158, 11, 0.3)",
    icon: <AlertTriangle size={20} style={{ color: "#F59E0B" }} />,
    textColor: "#F2F2F2",
  },
  info: {
    bg: "rgba(59, 130, 246, 0.1)",
    border: "rgba(59, 130, 246, 0.3)",
    icon: <Info size={20} style={{ color: "#3B82F6" }} />,
    textColor: "#F2F2F2",
  },
};

export function Toast({ id, type, title, message, onClose, actionUrl }: ToastProps) {
  const config = toastConfig[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const handleClick = () => {
    if (actionUrl) {
      window.location.href = actionUrl;
    }
  };

  return (
    <div
      className="flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm animate-in fade-in slide-in-from-right-4 duration-300"
      style={{
        backgroundColor: config.bg,
        borderColor: config.border,
        borderWidth: "1px",
        cursor: actionUrl ? "pointer" : "default",
      }}
      onClick={handleClick}
    >
      <div className="flex-shrink-0 mt-0.5">{config.icon}</div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm" style={{ color: config.textColor }}>
          {title}
        </h3>
        <p className="text-sm mt-1" style={{ color: "rgba(242,242,242,0.7)" }}>
          {message}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose(id);
        }}
        className="flex-shrink-0 text-gray-400 hover:text-gray-300 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
}

export function ToastContainer({ toasts, onRemove }: { toasts: any[]; onRemove: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 max-w-md">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          actionUrl={toast.actionUrl}
          onClose={onRemove}
        />
      ))}
    </div>
  );
}
