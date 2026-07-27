export type ProductDetail = {
  title: string;
  // Paragraph right below the big title.
  intro: string;
  // Large full-width media after the intro (360 image/video, video, or image).
  heroImage: string;
  // Render `heroImage` as an interactive 360°/VR panorama (equirectangular file).
  heroIs360?: boolean;
  // Two-column block: heading on the left, paragraph on the right.
  sectionHeading: string;
  sectionText: string;
  // Row of 2–3 images shown in a single grid.
  gallery: string[];
};

// Keyed by the slug used in the product's `action.href` (e.g. /products/aigio).
export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  aigio: {
    title: "Aigio — Branding, Redefined.",
    intro:
      "This is more than a tool. It’s branding, redefined. Aigio is a paradigm shift that replaces guesswork with high-fidelity insights, powering brand decisions with data intelligence.",
    heroImage: "/assets/Products/webp/Ai_platform.webp",
    sectionHeading: "Insight over guesswork.",
    sectionText:
      "Aigio blends two decades of strategic creative expertise with modern data intelligence. From industry research to brand strategy, content and communication design to marketing campaigns — our AI agents and platforms are ready to power up your brand game.",
    gallery: [
      "/assets/Projects/2.webp",
      "/assets/Projects/3.webp",
      "/assets/Projects/4.webp",
    ],
  },
  "micro-minds": {
    title: "Micro Minds",
    intro:
      "A classy, holistic approach to awareness that doesn’t just share knowledge but builds the intellectual and emotional architecture for the next generation.",
    heroImage: "/assets/Products/webp/Micro_Mind.webp",
    sectionHeading: "Building the next generation.",
    sectionText:
      "Micro Minds is designed to nurture curiosity and critical thinking, blending creativity with technology to create meaningful learning experiences that resonate with young, dynamic minds.",
    gallery: [
      "/assets/Projects/5.webp",
      "/assets/Projects/6.webp",
      "/assets/Projects/7.webp",
    ],
  },
  "ai-films": {
    title: "AI Films",
    intro:
      "We’re now ready with our own recipe of workflows and AI agents, blending human creativity and artificial intelligence — to create never-before magic in the field of immersive cinematic experience.",
    heroImage: "/assets/Products/webp/AI_FILMS_-_WEBSITE.webp",
    sectionHeading: "Cinema, reimagined.",
    sectionText:
      "Our indigenously developed workflows fuse storytelling craft with generative AI to produce films that feel more like immersive experiences than mere virtual content — fast, flexible and boundlessly creative.",
    gallery: [
      "/assets/Projects/9.webp",
      "/assets/Projects/10.webp",
      "/assets/Projects/11.webp",
    ],
  },
  "ai-ad-campaigns": {
    title: "AI Ad Campaigns",
    intro:
      "We develop modern brand storytelling concepts that communicate across platforms and masses, powered by AI and grounded in strategy.",
    heroImage: "/assets/Products/webp/AI_AD_CAMPAIGNS_-_WEBSITE.webp",
    sectionHeading: "Stories that scale.",
    sectionText:
      "From concept to campaign, we craft communications that adapt across platforms and audiences — combining data-driven targeting with creative narratives that make brands seen and heard.",
    gallery: [
      "/assets/Projects/12.webp",
      "/assets/Projects/13.webp",
      "/assets/Projects/14.webp",
    ],
  },
  animation: {
    title: "AI Animation",
    intro:
      "From ultra-precise product models to detailed process flows to mascots, we design animated 2D and 3D content for brands that feel more like cinematic experiences than mere virtual content.",
    heroImage: "/assets/Products/webp/360_BusSequence_4k.mp4",
    heroIs360: true,
    sectionHeading: "Motion with meaning.",
    sectionText:
      "Our animation pipeline spans 2D and 3D, mascots and models, process demonstrations and immersive 360°/VR experiences — bringing brands to life with detail and depth.",
    gallery: [
      "/assets/Projects/15.webp",
      "/assets/Projects/16.webp",
      "/assets/Projects/17.webp",
    ],
  },
  "extended-reality": {
    title: "Extended Reality",
    intro:
      "From ultra-precise product models to detailed process flows to mascots, we design animated 2D and 3D content for brands that feel more like cinematic experiences than mere virtual content.",
    heroImage: "/assets/Projects/9.webp",
    sectionHeading: "Motion with meaning.",
    sectionText:
      "Our animation pipeline spans 2D and 3D, mascots and models, process demonstrations and immersive 360°/VR experiences — bringing brands to life with detail and depth.",
    gallery: [
      "/assets/Projects/15.webp",
      "/assets/Projects/16.webp",
      "/assets/Projects/17.webp",
    ],
  },
};
