export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://orglife.co.in";

/**
 * Trailing period rendered as a separate span so it can be accented in brand
 * orange (`.dot-text`). Keep section titles free of the final "." and pass this
 * as the `dot` prop on Heading1/Heading2 instead.
 */
export const SECTION_DOT = ".";

export const SITE = {
  name: "Orglife",
  legalName: "Orglife",
  shortName: "Orglife",
  url: SITE_URL,
  locale: "en_IN",
  lang: "en-IN",
  tagline: "A Tech-forward Creative Organization",
  description:
    "Orglife is a creative content and AI-powered tech studio. We build brand identities, content strategies, visual communications and immersive AR/VR and AI experiences for brands and organizations.",
  shortDescription:
    "Creative content and AI-powered tech studio — branding, content strategy, motion, web and immersive AR/VR.",
  themeColor: "#0a0a0a",
  backgroundColor: "#0a0a0a",
  logo: "/images/logos/logo.svg",
  logoPng: "/images/logos/logo.png",
  ogImage: "/opengraph-image",
  founded: "2016",
  email: "contact@orglife.co.in",
  altEmail: "devasish.saikia@orglife.co.in",
  telephone: "+91 90998 97690",
  address: {
    street: "406, Trinity Tower, Opposite Pragati Grand Hotel, Zydus Hospital Road, Thaltej",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380059",
    country: "IN",
  },
  geo: {
    latitude: 23.0466,
    longitude: 72.5111,
  },
  social: {
    facebook: "https://www.facebook.com/orglife",
    instagram: "https://www.instagram.com/orglife",
    linkedin: "https://www.linkedin.com/company/orglife-industries-private-limited/",
  },
  // Search-console / webmaster verification. Replace with real tokens.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ?? "",
  },
} as const;

export const SITE_SOCIALS = Object.values(SITE.social);

export const BASE_KEYWORDS = [
  "creative agency",
  "branding agency",
  "brand identity design",
  "content strategy",
  "AI creative studio",
  "AI films",
  "AI ad campaigns",
  "motion graphics",
  "3D animation",
  "AR VR experiences",
  "360 video production",
  "UI UX design",
  "web development",
  "visual communication",
  "creative agency Ahmedabad",
  "branding agency India",
  "Orglife",
];

/** Services offered — powers the OfferCatalog / Service schema. */
export const SERVICES = [
  {
    name: "Brand Foundation Design",
    description:
      "Brand identity, positioning, narrative, guidelines and rebranding strategy grounded in research.",
    url: "/offerings",
  },
  {
    name: "Visual Content and Communication",
    description:
      "Content strategy, brand literature, graphic and social content, 2D/3D animation and cinematic production.",
    url: "/offerings",
  },
  {
    name: "Brand Digital Assets",
    description:
      "UI/UX design and development, custom AI tools and agents, web platforms and immersive AR/VR applications.",
    url: "/offerings",
  },
] as const;

/** Site-wide FAQ — powers FAQPage schema and AI-search answers. */
export const FAQS = [
  {
    question: "What services does Orglife offer?",
    answer:
      "Orglife offers brand foundation design (identity, positioning, guidelines), visual content and communication (content strategy, 2D/3D animation, cinematic production) and brand digital assets (UI/UX, web development, custom AI tools and immersive AR/VR experiences).",
  },
  {
    question: "Where is Orglife located?",
    answer:
      "Orglife is based in Ahmedabad, Gujarat, India, at 406 Trinity Tower, Zydus Hospital Road, Thaltej — and works with brands and organizations across India and internationally.",
  },
  {
    question: "Does Orglife work with AI-generated content?",
    answer:
      "Yes. Orglife builds AI films, AI ad campaigns and AI brand platforms using its own workflows and AI agents, always led by human creative direction and research-backed strategy rather than unguided generation.",
  },
  {
    question: "What industries has Orglife worked with?",
    answer:
      "Orglife has delivered work across defence, government, education, fashion and lifestyle, automobile, consumer electronics, hospitality, food and beverage, amusement and technology — including the Indian Army, the Ministry of External Affairs, Karnavati University and SSWAI.",
  },
  {
    question: "Can Orglife create 360° and VR experiences?",
    answer:
      "Yes. Orglife produces equirectangular 360° video and imagery plus AR/VR assets for immersive product, service and process experiences, viewable directly in the browser and in VR headsets.",
  },
] as const;

/** Absolute URL helper. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
