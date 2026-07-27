import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared OG/Twitter card renderer so every generated social image is visually
 * identical across the site. Uses only inline styles + system fonts (Satori
 * cannot resolve Tailwind or remote CSS).
 */
export function renderOgImage({
  eyebrow,
  title,
  footer,
}: {
  eyebrow?: string;
  title: string;
  footer?: string;
}) {
  // Keep long titles from overflowing the card.
  const fontSize = title.length > 80 ? 54 : title.length > 48 ? 64 : 76;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 999,
            background: "#ffffff",
            display: "flex",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 700,
            display: "flex",
          }}
        >
          {SITE.name}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {eyebrow ? (
          <div
            style={{
              color: "#8f8f8f",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            color: "#ffffff",
            fontSize,
            lineHeight: 1.05,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: -1,
            display: "flex",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          color: "#a1a1a1",
          fontSize: 28,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>{footer ?? "Branding · Content · Motion · AI · AR/VR"}</span>
        <span>orglife.co.in</span>
      </div>
    </div>,
    OG_SIZE,
  );
}
