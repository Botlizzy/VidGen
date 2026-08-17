export type VideoDraft = {
  id: string;
  title: string;
  script: string;
  tone: string;
  destinations: string[];
  createdAt: string;
  videoUrl?: string;
};

const STORAGE_KEY = "vid-gen:drafts";

export function getDrafts(): VideoDraft[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as VideoDraft[]) : [];
  } catch {
    return [];
  }
}

export function saveDraft(draft: Omit<VideoDraft, "id" | "createdAt">): VideoDraft {
  const saved: VideoDraft = {
    ...draft,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [saved, ...getDrafts()].slice(0, 50);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return saved;
}

export function clearDrafts() {
  if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
}
