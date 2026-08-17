export type ExportResult =
  | { ok: true; filename: string }
  | { ok: false; reason: "missing-video" | "download-failed" };

export async function exportMp4(videoUrl: string | undefined, filename = "vid-gen-video.mp4"): Promise<ExportResult> {
  if (!videoUrl) return { ok: false, reason: "missing-video" };

  try {
    const response = await fetch(videoUrl);
    if (!response.ok) return { ok: false, reason: "download-failed" };
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = filename.endsWith(".mp4") ? filename : `${filename}.mp4`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(objectUrl);
    return { ok: true, filename: anchor.download };
  } catch {
    return { ok: false, reason: "download-failed" };
  }
}
