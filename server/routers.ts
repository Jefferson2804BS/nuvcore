import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContact, getContacts, createNotification, getNotifications, markNotificationAsRead, deleteNotification, getUnreadNotificationCount } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submitDiagnostic: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
          email: z.string().email("E-mail inválido"),
          phone: z.string().optional(),
          company: z.string().optional(),
          message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Salvar no banco de dados
          await createContact({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            message: input.message,
          });

          // Notificar o dono do site
          await notifyOwner({
            title: "Novo Pedido de Diagnóstico",
            content: `${input.name} (${input.email}) solicitou um diagnóstico.\n\nEmpresa: ${input.company || "Não informada"}\nTelefone: ${input.phone || "Não informado"}\n\nMensagem: ${input.message}`,
          });

          return {
            success: true,
            message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
          };
        } catch (error) {
          console.error("[Contact] Failed to submit diagnostic:", error);
          throw new Error("Falha ao enviar solicitação. Tente novamente mais tarde.");
        }
      }),

    list: publicProcedure.query(async () => {
      try {
        return await getContacts();
      } catch (error) {
        console.error("[Contact] Failed to list contacts:", error);
        return [];
      }
    }),
  }),

  notification: router({
    create: publicProcedure
      .input(
        z.object({
          type: z.enum(["success", "error", "warning", "info"]),
          title: z.string().min(1, "Título é obrigatório"),
          message: z.string().min(1, "Mensagem é obrigatória"),
          actionUrl: z.string().optional(),
          metadata: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        try {
          await createNotification({
            userId: ctx.user?.id || null,
            type: input.type,
            title: input.title,
            message: input.message,
            actionUrl: input.actionUrl,
            metadata: input.metadata,
          });
          return { success: true };
        } catch (error) {
          console.error("[Notification] Failed to create notification:", error);
          throw new Error("Falha ao criar notificação");
        }
      }),

    list: publicProcedure.query(async ({ ctx }) => {
      try {
        return await getNotifications(ctx.user?.id);
      } catch (error) {
        console.error("[Notification] Failed to list notifications:", error);
        return [];
      }
    }),

    markAsRead: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        try {
          await markNotificationAsRead(input.id);
          return { success: true };
        } catch (error) {
          console.error("[Notification] Failed to mark as read:", error);
          throw new Error("Falha ao marcar como lido");
        }
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        try {
          await deleteNotification(input.id);
          return { success: true };
        } catch (error) {
          console.error("[Notification] Failed to delete notification:", error);
          throw new Error("Falha ao deletar notificação");
        }
      }),

    unreadCount: publicProcedure.query(async ({ ctx }) => {
      try {
        return await getUnreadNotificationCount(ctx.user?.id);
      } catch (error) {
        console.error("[Notification] Failed to get unread count:", error);
        return 0;
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
