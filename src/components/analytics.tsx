import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-0R8WNQ1BWT";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-P899CWZQ";

export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}

/**
 * Google Tag Manager container.
 *
 * Loaded `afterInteractive` rather than injected at the very top of <head>.
 * Google's snippet says "as high as possible", but that advice targets plain
 * HTML pages; blocking hydration on the container measurably hurts LCP, and
 * afterInteractive is what Next.js recommends for GTM. If the container ever
 * needs to run before first paint — Consent Mode gating, or a redirect test —
 * switch this one `strategy` to "beforeInteractive".
 *
 * GTM and gtag.js share `window.dataLayer`, so the two coexist safely.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/**
 * GTM's no-JavaScript fallback. Belongs immediately after the opening <body>
 * tag, which is why it is a separate export from the script above.
 */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
