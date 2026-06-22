import nodemailer from "nodemailer";
import { ENV } from "./env";

// Configurar transporte de email (usando variáveis de ambiente)
// Para produção, configure as variáveis: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Se não houver credenciais SMTP, apenas log (para desenvolvimento)
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("[Email] SMTP not configured. Email would be sent to:", options.to);
      console.log("[Email] Subject:", options.subject);
      return true;
    }

    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@nuvcore.com",
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log("[Email] Sent successfully:", result.messageId);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send:", error);
    return false;
  }
}

export async function sendContactNotificationEmail(
  ownerEmail: string,
  contactData: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
  }
): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #C41B2C;">Novo Pedido de Diagnóstico</h2>
      
      <p>Você recebeu uma nova solicitação de diagnóstico:</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nome:</strong> ${contactData.name}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
        ${contactData.phone ? `<p><strong>Telefone:</strong> ${contactData.phone}</p>` : ""}
        ${contactData.company ? `<p><strong>Empresa:</strong> ${contactData.company}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${contactData.message}</p>
      </div>
      
      <p style="color: #666; font-size: 12px;">
        Responda diretamente para ${contactData.email} ou acesse seu painel admin para gerenciar contatos.
      </p>
    </div>
  `;

  return sendEmail({
    to: ownerEmail,
    subject: `Novo Pedido de Diagnóstico de ${contactData.name}`,
    html,
    text: `Novo Pedido de Diagnóstico\n\nNome: ${contactData.name}\nE-mail: ${contactData.email}\nMensagem: ${contactData.message}`,
  });
}

export async function sendNotificationEmail(
  email: string,
  notification: {
    title: string;
    message: string;
    actionUrl?: string;
  }
): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #C41B2C;">${notification.title}</h2>
      
      <p>${notification.message}</p>
      
      ${
        notification.actionUrl
          ? `<p style="margin-top: 20px;">
              <a href="${notification.actionUrl}" style="background-color: #C41B2C; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Ver Detalhes
              </a>
            </p>`
          : ""
      }
      
      <p style="color: #666; font-size: 12px; margin-top: 30px;">
        Esta é uma notificação automática do seu site NUVCORE.
      </p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: notification.title,
    html,
    text: notification.message,
  });
}
