import { beforeEach, describe, expect, it } from "vitest";
import { getDrafts, saveDraft } from "./draftStore";

describe("draftStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves a draft with an id and timestamp", () => {
    const draft = saveDraft({ title: "Morning routine", script: "Start slowly.", tone: "Educational", destinations: ["YouTube"] });
    expect(draft.id).toBeTypeOf("string");
    expect(draft.createdAt).toBeTypeOf("string");
    expect(getDrafts()).toHaveLength(1);
    expect(getDrafts()[0]?.title).toBe("Morning routine");
  });
});
