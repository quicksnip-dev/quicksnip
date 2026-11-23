/**
 * Formats a byte count as a human-readable size, e.g. `1536` → `"1.5 KB"`.
 * Uses binary (1024) steps by default; pass `{ si: true }` for decimal (1000) steps.
 */
export function formatBytes(bytes: number, { decimals = 1, si = false }: { decimals?: number; si?: boolean } = {}): string {
  const base = si ? 1000 : 1024;
  const units = si ? ["B", "kB", "MB", "GB", "TB", "PB"] : ["B", "KB", "MB", "GB", "TB", "PB"];
  if (!Number.isFinite(bytes)) return "0 B";
  const sign = bytes < 0 ? "-" : "";
  let value = Math.abs(bytes);
  let i = 0;
  while (value >= base && i < units.length - 1) {
    value /= base;
    i++;
  }
  return `${sign}${i === 0 ? value : Number(value.toFixed(decimals))} ${units[i]}`;
}
