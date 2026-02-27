import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContact, getContacts } from "./db";
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
});

export type AppRouter = typeof appRouter;
