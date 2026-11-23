/** Converts RGB(A) channels to a lowercase hex string. Channels are clamped to 0–255, alpha to 0–1. */
export function rgbToHex(r: number, g: number, b: number, a?: number): string {
  const channel = (n: number) =>
    Math.round(Math.min(255, Math.max(0, n)))
      .toString(16)
      .padStart(2, "0");
  const alpha = a === undefined ? "" : channel(Math.min(1, Math.max(0, a)) * 255);
  return `#${channel(r)}${channel(g)}${channel(b)}${alpha}`;
}
