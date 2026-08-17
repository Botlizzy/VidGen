import { describe, expect, it } from "vitest";
import { exportMp4 } from "./videoExport";

describe("videoExport", () => {
  it("returns a clear missing-video state when no rendered file exists", async () => {
    await expect(exportMp4(undefined)).resolves.toEqual({ ok: false, reason: "missing-video" });
  });
});
