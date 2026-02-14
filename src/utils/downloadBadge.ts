import { toPng } from "html-to-image";

/**
 * Capture a DOM element as PNG and trigger download.
 * Returns true on success, false on error.
 */
export async function downloadBadge(
  element: HTMLElement,
  filename = "badge-finisher-2026.png",
): Promise<boolean> {
  try {
    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 3, // High quality
      backgroundColor: "transparent",
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
    return true;
  } catch {
    console.error("Badge download failed");
    return false;
  }
}
