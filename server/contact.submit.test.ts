import { describe, expect, it, vi } from "vitest";
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

describe("contact.submitDiagnostic", () => {
  it("should validate required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Test missing name
    try {
      await caller.contact.submitDiagnostic({
        name: "",
        email: "test@example.com",
        message: "Test message with enough characters",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }

    // Test invalid email
    try {
      await caller.contact.submitDiagnostic({
        name: "John Doe",
        email: "invalid-email",
        message: "Test message with enough characters",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }

    // Test short message
    try {
      await caller.contact.submitDiagnostic({
        name: "John Doe",
        email: "test@example.com",
        message: "Short",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should accept valid contact data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitDiagnostic({
      name: "John Doe",
      email: "john@example.com",
      phone: "(11) 99999-9999",
      company: "Tech Startup",
      message: "I would like to discuss a web development project for my startup.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("sucesso");
  });

  it("should handle optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitDiagnostic({
      name: "Jane Smith",
      email: "jane@example.com",
      message: "I am interested in learning more about your services.",
    });

    expect(result.success).toBe(true);
  });
});

describe("contact.list", () => {
  it("should return a list of contacts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const contacts = await caller.contact.list();

    expect(Array.isArray(contacts)).toBe(true);
  });
});
