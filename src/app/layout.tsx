import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import "../styles/typography.css";
import localFont from "next/font/local";
import { JsonLd } from "@/components/json-ld";
import { LenisProvider } from "@/components/lenis";
import { MediaProtection } from "@/components/media-protection";
import { BASE_KEYWORDS, SITE } from "@/constants/site";
import {
  faqSchema,
  graph,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const clashDisplay = localFont({
  variable: "--font-clash-display",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    { path: "../fonts/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Creative Content & AI-Powered Tech Studio`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: BASE_KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Creative Services",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: SITE.url,
    languages: { "en-IN": SITE.url, "x-default": SITE.url },
  },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — Creative Content & AI-Powered Tech Studio`,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Creative Content & AI-Powered Tech Studio`,
    description: SITE.description,
    creator: "@orglife",
    site: "@orglife",
  },
  icons: {
    icon: [
      { url: "/images/logos/favicon.ico", sizes: "any" },
      { url: "/images/logos/favicon.ico", type: "image/svg+xml" },
    ],
    shortcut: "/images/logos/favicon.ico",
    apple: [{ url: "/images/logos/favicon.ico", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/images/logos/favicon.ico", color: SITE.themeColor }],
  },
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "black-translucent",
  },
  verification: {
    ...(SITE.verification.google ? { google: SITE.verification.google } : {}),
    ...(SITE.verification.yandex ? { yandex: SITE.verification.yandex } : {}),
    ...(SITE.verification.bing
      ? { other: { "msvalidate.01": SITE.verification.bing } }
      : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // WCAG: never block zoom
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: SITE.themeColor },
    { media: "(prefers-color-scheme: light)", color: SITE.themeColor },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={SITE.lang} className="dark scroll-smooth">
      <head>
        {/* Speed up the Google Fonts handshake for the LCP text paint. */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${clashDisplay.variable} ${spaceGrotesk.className} antialiased`}
      >
        {/* Site-wide entity graph: Organization, WebSite+SearchAction, LocalBusiness, FAQ */}
        <JsonLd
          data={graph(
            organizationSchema(),
            websiteSchema(),
            localBusinessSchema(),
            faqSchema(),
          )}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-full focus:bg-foreground focus:px-6 focus:py-3 focus:text-background focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <MediaProtection />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
