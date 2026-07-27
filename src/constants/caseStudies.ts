import type { PortfolioItem } from "./portfolio";

export type CaseStudy = {
  // Used in the URL: /case-studies/<slug>
  slug: string;
  brand: string;

  // ---- List card ----
  cardImage: string;
  cardDescription: string;
  industries: string[];

  // ---- Detail page ----
  intro: string;
  heroImage: string;
  heroIs360?: boolean;
  // The three narrative columns.
  whatTheySaid: string;
  opportunity: string;
  delivered: string;
  // Masonry gallery (images / video / 360).
  gallery: PortfolioItem[];
};

const HOME = "/assets/Home_page/Exploring a new world of creative possibilities";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "indian-army",
    brand: "Indian Army",
    cardImage: `${HOME}/Army.mp4`,
    cardDescription:
      "Multiple visual communication assignments for the Indian Army across domains and geographies.",
    industries: ["Indian Defence Forces"],
    intro:
      "Crafting visual communications with the discipline, dignity and impact the nation’s forces deserve.",
    heroImage: `${HOME}/Army.mp4`,
    whatTheySaid:
      "The Army needed communication assets that could carry gravity and clarity across a vast range of audiences, domains and geographies — without diluting institutional dignity.",
    opportunity:
      "We saw an opportunity to bring modern visual storytelling to a legacy institution — translating complex operations and values into assets that resonate with citizens and cadres alike.",
    delivered:
      "From animated explainers to campaign films and print collateral, we delivered a coherent body of visual communication that balances authority with accessibility.",
    gallery: [
      { media: "/assets/Projects/2.webp", title: "Campaign Film" },
      { media: "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795237/Army_Ai_Video_fgivpc.mp4", title: "Army AI Video" },
      { media: "/assets/Projects/3.webp", title: "Print Collateral" },
      { media: "/assets/Projects/4.webp", title: "Visual System" },
    ],
  },
  {
    slug: "ministry-of-external-affairs",
    brand: "Ministry of External Affairs",
    cardImage: "/assets/Projects/5.webp",
    cardDescription:
      "Projects ranging from a series of ebooks to international event communications.",
    industries: ["Government"],
    intro:
      "Communicating India to the world — with the nuance diplomacy demands.",
    heroImage: "/assets/Projects/5.webp",
    whatTheySaid:
      "The Ministry required communication material — from ebooks to event assets — that could represent the nation with polish on an international stage.",
    opportunity:
      "We saw a chance to bring editorial rigour and design craft to government communication, elevating how India’s stories are presented globally.",
    delivered:
      "A series of ebooks, event communications and visual assets designed for international audiences, unified by a considered, contemporary design language.",
    gallery: [
      { media: "/assets/Projects/6.webp", title: "Ebook Series" },
      { media: "/assets/Projects/7.webp", title: "Event Communications" },
      { media: "/assets/Projects/9.webp", title: "Editorial Design" },
    ],
  },
  {
    slug: "sswai",
    brand: "SSWAI",
    cardImage: `${HOME}/Sswai.mp4`,
    cardDescription:
      "From brand identity design concepts to ingenious brand communications for a young, dynamic fashion brand.",
    industries: ["Fashion and Lifestyle"],
    intro:
      "Empowering a young and dynamic fashion brand with a bold, distinctive identity.",
    heroImage: `${HOME}/Sswai.mp4`,
    whatTheySaid:
      "SSWAI wanted a brand identity and communication style that felt as fresh and dynamic as the fashion it creates.",
    opportunity:
      "We saw an opportunity to build a distinctive visual world for a young label — one that could stand out in a crowded, trend-driven market.",
    delivered:
      "From identity design concepts to ingenious brand communications, we shaped a cohesive, energetic brand presence across touchpoints.",
    gallery: [
      { media: "/assets/Projects/11.webp", title: "Lookbook" },
      { media: "/assets/Projects/12.webp", title: "Campaign" },
      { media: "/assets/Projects/13.webp", title: "Social Creatives" },
    ],
  },
  {
    slug: "ku",
    brand: "Karnavati University",
    cardImage: `${HOME}/KU.mp4`,
    cardDescription:
      "Brand narratives, compelling visual communications and event theme designs — for half a decade now.",
    industries: ["Education"],
    intro:
      "A five-year creative partnership shaping how a university tells its story.",
    heroImage: `${HOME}/KU.mp4`,
    whatTheySaid:
      "Karnavati University needed brand narratives, visual communications and event themes that could evolve with the institution year after year.",
    opportunity:
      "We saw an opportunity to become a long-term creative partner — building a consistent, compelling brand voice across academics, events and outreach.",
    delivered:
      "Brand narratives, event theme designs and a steady stream of visual communications, delivered over half a decade of collaboration.",
    gallery: [
      { media: "/assets/Projects/14.webp", title: "Event Theme" },
      { media: "/assets/Projects/15.webp", title: "Brand Narrative" },
      { media: "/assets/Projects/16.webp", title: "Campus Communications" },
    ],
  },
  {
    slug: "wanta-santa",
    brand: "Wanta Santa",
    cardImage: "/assets/Projects/17.webp",
    cardDescription:
      "Never-before magic in the field of immersive experience.",
    industries: ["Amusement", "Event Management"],
    intro:
      "Teaming up to create never-before magic in immersive experiences.",
    heroImage: "/assets/Projects/17.webp",
    whatTheySaid:
      "Wanta Santa wanted to deliver an immersive, memorable experience that would stand apart from anything audiences had seen before.",
    opportunity:
      "We saw an opportunity to blend narrative, spectacle and technology into a single immersive journey.",
    delivered:
      "An immersive experience concept and visual world that brought never-before magic to life for audiences.",
    gallery: [
      { media: "/assets/Projects/18.webp", title: "Experience Design" },
      { media: "/assets/Projects/19.webp", title: "Set Visuals" },
      { media: "/assets/Projects/20.webp", title: "Motion Graphics" },
    ],
  },
  {
    slug: "landmark-and-volkswagen",
    brand: "Landmark and Volkswagen",
    cardImage: "/assets/Projects/21.webp",
    cardDescription:
      "Creative concepts and visual content for impactful communications across multiple platforms.",
    industries: ["Automobile"],
    intro:
      "Driving impactful automobile communications across platforms.",
    heroImage: "/assets/Projects/21.webp",
    whatTheySaid:
      "The Group Landmark – Volkswagen partnership needed creative concepts and content that could communicate impact across a range of platforms.",
    opportunity:
      "We saw an opportunity to craft platform-aware creative that keeps a premium automobile brand consistent and compelling everywhere it appears.",
    delivered:
      "Creative concepts and visual content built for impactful, multi-platform communications.",
    gallery: [
      { media: "/assets/Projects/22.webp", title: "Campaign Concept" },
      { media: "/assets/Projects/23.webp", title: "Platform Content" },
      { media: "/assets/Projects/24.webp", title: "Visual Content" },
    ],
  },
  {
    slug: "verity",
    brand: "Verity",
    cardImage: "/assets/Projects/25.webp",
    cardDescription:
      "Transforming how 3D models and animated content lead digital communication and advertising.",
    industries: ["Consumer Durables", "Electronics"],
    intro:
      "Reimagining digital communication with 3D and animated content.",
    heroImage: "/assets/Projects/25.webp",
    whatTheySaid:
      "Verity wanted to transform the way 3D models and animated visual content could lead their digital communication and advertising.",
    opportunity:
      "We saw an opportunity to make 3D and motion the centrepiece of the brand’s digital storytelling — richer, more tactile, more persuasive.",
    delivered:
      "A body of 3D models and animated content that reshaped the brand’s digital communication and advertising approach.",
    gallery: [
      { media: "/assets/Projects/26.webp", title: "3D Product Model" },
      { media: "/assets/Projects/27.webp", title: "Animated Ad" },
      { media: "/assets/Projects/28.webp", title: "Digital Campaign" },
    ],
  },
  {
    slug: "tesseract",
    brand: "Tesseract",
    cardImage: "/assets/Projects/29.webp",
    cardDescription:
      "Brand strategy and visual identity for a technology-forward venture.",
    industries: ["Technology"],
    intro:
      "Shaping the identity of a technology-forward venture.",
    heroImage: "/assets/Projects/29.webp",
    whatTheySaid:
      "Tesseract needed a brand strategy and identity that could signal technological ambition with clarity and confidence.",
    opportunity:
      "We saw an opportunity to translate complex technology into a clean, credible and future-facing brand.",
    delivered:
      "A brand strategy and visual identity system built to scale with a fast-moving technology venture.",
    gallery: [
      { media: "/assets/Projects/30.webp", title: "Identity" },
      { media: "/assets/Projects/31.webp", title: "Brand System" },
      { media: "/assets/Projects/32.webp", title: "Applications" },
    ],
  },
  {
    slug: "sterling",
    brand: "Sterling",
    cardImage: "/assets/Projects/33.webp",
    cardDescription:
      "Brand communications and content for a hospitality and lifestyle experience.",
    industries: ["Hospitality", "Lifestyle"],
    intro:
      "Crafting warm, aspirational communications for a hospitality brand.",
    heroImage: "/assets/Projects/33.webp",
    whatTheySaid:
      "Sterling wanted brand communications and content that could convey warmth, quality and aspiration across its experiences.",
    opportunity:
      "We saw an opportunity to build an inviting brand voice and visual language that makes every touchpoint feel like an experience.",
    delivered:
      "Brand communications and content designed to make the hospitality experience feel premium and personal.",
    gallery: [
      { media: "/assets/Projects/34.webp", title: "Brand Content" },
      { media: "/assets/Projects/35.webp", title: "Campaign" },
      { media: "/assets/Projects/36.webp", title: "Collateral" },
    ],
  },
  {
    slug: "lucan",
    brand: "Lucan",
    cardImage: "/assets/Projects/37.webp",
    cardDescription:
      "Identity and lifestyle communications for a contemporary brand.",
    industries: ["Lifestyle"],
    intro:
      "Building a contemporary identity for a modern lifestyle brand.",
    heroImage: "/assets/Projects/37.webp",
    whatTheySaid:
      "Lucan wanted an identity and communication style that felt contemporary, considered and distinctly its own.",
    opportunity:
      "We saw an opportunity to craft a refined, modern brand world that connects with a discerning lifestyle audience.",
    delivered:
      "A contemporary identity and lifestyle communications suite that gives the brand a clear, confident presence.",
    gallery: [
      { media: "/assets/Projects/38.webp", title: "Identity" },
      { media: "/assets/Projects/39.webp", title: "Lifestyle Visuals" },
      { media: "/assets/Projects/40.webp", title: "Campaign" },
    ],
  },
  {
    slug: "mudo",
    brand: "Mudo",
    cardImage: "/assets/Projects/41.webp",
    cardDescription:
      "Playful branding and content for a food and beverage venture.",
    industries: ["Food and Beverage"],
    intro:
      "Bringing playful energy to a food and beverage brand.",
    heroImage: "/assets/Projects/41.webp",
    whatTheySaid:
      "Mudo wanted branding and content with personality — playful, appetising and easy to love.",
    opportunity:
      "We saw an opportunity to build a vibrant, characterful brand that stands out on shelves and in feeds alike.",
    delivered:
      "Playful branding and a stream of appetising content that gives the F&B brand a distinct, lovable personality.",
    gallery: [
      { media: "/assets/Projects/42.webp", title: "Branding" },
      { media: "/assets/Projects/43.webp", title: "Packaging" },
      { media: "/assets/Projects/44.webp", title: "Social Content" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
