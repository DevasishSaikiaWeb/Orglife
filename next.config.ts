import type { NextConfig } from "next";

/**
 * Security headers (OWASP + Google "Best Practices" audit).
 * CSP is intentionally permissive for `img/media/style` because the site
 * inlines Tailwind styles and serves local media; tighten per environment.
 */
const CSP = [
  "default-src 'self'",
  // Next.js injects inline bootstrap scripts; 'unsafe-inline' is required.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://res.cloudinary.com",
  "media-src 'self' blob: https://res.cloudinary.com",
  "connect-src 'self'",
  // YouTube embeds (MediaTile). Without this, default-src 'self' blocks them.
  "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    // Keep gyroscope/accelerometer/xr enabled — the 360/VR viewer needs them.
    value:
      'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=(), accelerometer=(self), gyroscope=(self), xr-spatial-tracking=(self), autoplay=(self "https://www.youtube-nocookie.com")',
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Type + lint errors now block the build (previously suppressed).
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },

  images: {
    // Modern formats first — big LCP/bandwidth win over JPEG/PNG.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
  },

  experimental: {
    // Import only the icons actually used instead of the whole package.
    optimizePackageImports: ["lucide-react", "motion", "@egjs/react-view360"],
  },

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Immutable, long-lived caching for hashed static assets.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
