import { describe, expect, it } from "vitest";
import { isEmailVerificationConfigured } from "./email";

describe("email verification configuration", () => {
  it("requires both a Resend API key and verified sender", () => {
    expect(isEmailVerificationConfigured()).toBe(false);
  });
});
