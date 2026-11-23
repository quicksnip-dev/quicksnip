export type RGB = { r: number; g: number; b: number; a?: number };

/**
 * Parses `#rgb`, `#rgba`, `#rrggbb` or `#rrggbbaa` (with or without `#`) into RGB(A).
 * Returns `null` for invalid input instead of silently producing black.
 */
export function hexToRgb(hex: string): RGB | null {
  let h = hex.trim().replace(/^#/, "");
  if (!/^(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(h)) return null;
  if (h.length <= 4) h = [...h].map((c) => c + c).join("");
  const n = (i: number) => parseInt(h.slice(i, i + 2), 16);
  const rgb: RGB = { r: n(0), g: n(2), b: n(4) };
  if (h.length === 8) rgb.a = Math.round((n(6) / 255) * 1000) / 1000;
  return rgb;
}
