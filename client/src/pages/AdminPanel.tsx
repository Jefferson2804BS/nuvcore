/*
 * NUVCORE — Admin Panel
 * Gerenciamento de contatos, notificações e configurações
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { useNotification } from "@/contexts/NotificationContext";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Mail, Phone, Building2, MessageSquare, Trash2, Eye, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function AdminPanel() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [selectedTab, setSelectedTab] = useState<"contacts" | "notifications">("contacts");
  const { notifications, deleteNotification, markAsRead } = useNotification();
  const contactsQuery = trpc.contact.list.useQuery();

  // Verificar se é admin
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {
    return (
      <div style={{ backgroundColor: "#0F0F12", minHeight: "100vh", paddingTop: "80px" }}>
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Acesso Negado
          </h1>
          <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif", marginBottom: "24px" }}>
            Você não tem permissão para acessar o painel admin.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg"
            style={{ backgroundColor: "#C41B2C", color: "white", fontFamily: "'Inter', sans-serif" }}
          >
            Voltar ao Home
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
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
              Painel Admin
            </h1>
            <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif", marginTop: "8px" }}>
              Bem-vindo, {user?.name}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <button
            onClick={() => setSelectedTab("contacts")}
            className="px-4 py-3 font-medium transition-colors"
            style={{
              color: selectedTab === "contacts" ? "#C41B2C" : "rgba(242,242,242,0.6)",
              borderBottom: selectedTab === "contacts" ? "2px solid #C41B2C" : "none",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Contatos ({contactsQuery.data?.length || 0})
          </button>
          <button
            onClick={() => setSelectedTab("notifications")}
            className="px-4 py-3 font-medium transition-colors"
            style={{
              color: selectedTab === "notifications" ? "#C41B2C" : "rgba(242,242,242,0.6)",
              borderBottom: selectedTab === "notifications" ? "2px solid #C41B2C" : "none",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Notificações ({notifications.length})
          </button>
        </div>

        {/* Contacts Tab */}
        {selectedTab === "contacts" && (
          <div className="space-y-4">
            {contactsQuery.isLoading ? (
              <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}>Carregando...</p>
            ) : contactsQuery.data && contactsQuery.data.length > 0 ? (
              contactsQuery.data.map((contact: any) => (
                <div
                  key={contact.id}
                  className="p-6 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p style={{ color: "rgba(242,242,242,0.5)", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>
                        NOME
                      </p>
                      <p className="text-white font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {contact.name}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Mail size={14} style={{ color: "#C41B2C" }} />
                        <p style={{ color: "rgba(242,242,242,0.5)", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>
                          E-MAIL
                        </p>
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-white hover:text-red-400 transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  {contact.phone && (
                    <div className="mb-4 flex items-center gap-2">
                      <Phone size={14} style={{ color: "#C41B2C" }} />
                      <p style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}>
                        {contact.phone}
                      </p>
                    </div>
                  )}

                  {contact.company && (
                    <div className="mb-4 flex items-center gap-2">
                      <Building2 size={14} style={{ color: "#C41B2C" }} />
                      <p style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}>
                        {contact.company}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare size={14} style={{ color: "#C41B2C" }} />
                      <p style={{ color: "rgba(242,242,242,0.5)", fontSize: "12px", fontFamily: "'Inter', sans-serif" }}>
                        MENSAGEM
                      </p>
                    </div>
                    <p
                      className="p-3 rounded"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "rgba(242,242,242,0.8)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {contact.message}
                    </p>
                  </div>

                  <p
                    style={{
                      color: "rgba(242,242,242,0.4)",
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {formatDate(contact.createdAt)}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}>
                Nenhum contato recebido ainda.
              </p>
            )}
          </div>
        )}

        {/* Notifications Tab */}
        {selectedTab === "notifications" && (
          <div className="space-y-3">
            {notifications.length === 0 ? (
              <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}>
                Nenhuma notificação.
              </p>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-4 p-4 rounded-lg border"
                  style={{
                    backgroundColor: notification.read ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex-1">
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
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
