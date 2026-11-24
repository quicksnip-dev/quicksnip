import { LOGO_COLOR, LOGO_PATHS } from "@/components/ui/logo";

export const OG_SIZE = { width: 1200, height: 630 };

export function OgLogo({ size = 64 }: { size?: number }) {
  return (
    <svg width={(size * 43) / 30} height={size} viewBox="0 0 43 30" fill="none">
      <path d={LOGO_PATHS[0]} fill={LOGO_COLOR} />
      <path d={LOGO_PATHS[1]} stroke={LOGO_COLOR} strokeWidth="1.65" />
      <path d={LOGO_PATHS[2]} fill={LOGO_COLOR} />
    </svg>
  );
}

/** Shared frame for generated Open Graph images (rendered by next/og). */
export function OgFrame({
  eyebrow,
  title,
  description,
  footer,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  footer?: [string, string];
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#1c1c1c",
        color: "#ededed",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <OgLogo size={52} />
        <span style={{ fontSize: 40, fontWeight: 700 }}>QuickSnip</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {eyebrow ? <span style={{ fontSize: 30, color: LOGO_COLOR }}>{eyebrow}</span> : null}
        <span style={{ fontSize: title.length > 28 ? 64 : 80, fontWeight: 700, lineHeight: 1.1 }}>{title}</span>
        {description ? (
          <span style={{ fontSize: 32, color: "#a8a8a8", lineHeight: 1.35 }}>
            {description.length > 140 ? `${description.slice(0, 137)}…` : description}
          </span>
        ) : null}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28, color: "#a8a8a8" }}>
        <span>{footer?.[0] ?? "quicksnip.app"}</span>
        <span>{footer?.[1] ?? ""}</span>
      </div>
    </div>
  );
}
