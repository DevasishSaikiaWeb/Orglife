export type ProductDetail = {
  title: string;
  intro: string;
  heroImage: string;
  heroIs360?: boolean;
  sectionHeading: string;
  sectionText_1: string;
  sectionText_2: string;
  gallery: string[];
  section2Text_1?: string;
  section2Text_2?: string;
};

// Keyed by the slug used in the product's `action.href` (e.g. /products/aigio).
export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  aigio: {
    title: "Aigio - Branding, Redefined.",
    intro:
      "Aigio is here to democratize enterprise-grade brand strategy for organizations of all sizes. This is more than a tool. It’s a paradigm shift that replaces guesswork with deep-researched brand discovery, high-fidelity insights and intelligent branding direction.",
    heroImage: "/assets/Products/webp/Ai_platform.webp",
    sectionHeading: "Insight over guesswork.",
    sectionText_1:
      "AIGIO blends two decades of strategic creative expertise with modern data intelligence. With focus on features such as industry research to brand strategy, content and communication design to marketing campaigns, Aigio is engineered as the first true Operating System for Brand Continuity.",
    sectionText_2:"Where basic AI tools require constant prompting and human agencies suffer from talent turnover, AIGIO centralizes the proprietary brand strategy and forces adherence across every piece of visual and verbal output natively.",
    gallery: [
      "/assets/Projects/2.webp",
      "/assets/Projects/3.webp",
      "/assets/Projects/4.webp",
    ],
    section2Text_1:
      "For localized marketing agencies and lean internal teams of MSMEs and startup organizations bleeding margins to slow human strategy retainers, AIGIO is the unified brand operating system that delivers comprehensive brand foundations and campaign architectures instantly, yet meaningfully. Unlike generic AI content generators or legacy agencies, AIGIO integrates proprietary strategy frameworks across multiple LLMs to ensure absolute brand continuity without human bottlenecks.",
  },
  "micro-minds": {
    title: "Micro Minds",
    intro:
      "Microminds is a visually and logically advanced K-8 EdTech and cognitive assessment platform operating at the intersection of AI-generated entertainment and life-skills education. It is driven by AI-generated animated short films teaching life skills, paired with dynamic, real-time AI-driven quantitative and qualitative reasoning assessments.",
    heroImage: "/assets/Products/webp/Micro_Mind.webp",
    sectionHeading: "Building the next generation.",
    sectionText_1:
      "An evolved K-8 EdTech and cognitive assessment platform operating at the intersection of AI-generated entertainment and life-skills education, Microminds is driven by culturally localized, AI-generated animated short films on various foundational learning domains, paired with dynamic, real-time AI-driven quantitative and qualitative reasoning assessments.",
    sectionText_2:"",
    gallery: [
      "/assets/Projects/5.webp",
      "/assets/Projects/6.webp",
      "/assets/Projects/7.webp",
    ],
    section2Text_1:"Microminds is a parental utility designed to alleviate guilt. The focus is purely on the conversion of wasted time ok kids into proven cognitive development. A great tool to transform unmonitored digital consumption into meanigful indulgence, Microminds is the only cognitive assessment platform disguised as premium entertainment. Unlike passive platforms like YouTube Kids or dry academic tools that exist in the digital space, Microminds uses culturally localized AI animation and dynamic questioning to transform screen time into measurable behavioral growth."
  },
  "ai-films": {
    title: "AI Films",
    intro:
      "Our proprietary AI film architecture — a production engine built from the ground up and integrated with the world's leading AI platforms and LLMs powers a cinematic production capability that creates films, short-format series and animation content at global broadcast standards.",
    heroImage: "/assets/Products/webp/AI_FILMS_-_WEBSITE.webp",
    sectionHeading: "Cinema, reimagined.",
    sectionText_1:
      "Our indigenously developed workflows fuse storytelling craft with generative AI to produce films that feel more like immersive experiences than mere virtual content — fast, flexible and boundlessly creative.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/9.webp",
      "/assets/Projects/10.webp",
      "/assets/Projects/11.webp",
    ],
  },
  "ai-ad-campaigns": {
    title: "AI Ad Campaigns",
    intro:
      "What makes our brand films and ads different is not the tools. It is the creative intelligence layered between them — the proprietary frameworks, the directorial discipline, brand alignment and the creative rigour that ensures every film we produce is a brand asset, not just a generated video.",
    heroImage: "/assets/Products/webp/AI_AD_CAMPAIGNS_-_WEBSITE.webp",
    sectionHeading: "Stories that scale.",
    sectionText_1:
      "From concept to campaign, we craft communications that adapt across platforms and audiences — combining data-driven targeting with creative narratives that make brands seen and heard.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/12.webp",
      "/assets/Projects/13.webp",
      "/assets/Projects/14.webp",
    ],
  },
  animation: {
    title: "AI Animation",
    intro:
      "We produce 3D animated content across the full spectrum of formats and applications — from hyper-real product visualisations and animated brand mascots to stylised character series, process demonstration films, and fully animated campaign content — using a production pipeline that combines proprietary creative frameworks with industry-leading 3D modelling, rigging, and rendering platforms.",
    heroImage: "/assets/Products/webp/360_BusSequence_4k.mp4",
    heroIs360: true,
    sectionHeading: "Motion with meaning.",
    sectionText_1:
      "Our animation pipeline spans 2D and 3D, mascots and models, process demonstrations and immersive 360°/VR experiences — bringing brands to life with detail and depth.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/15.webp",
      "/assets/Projects/16.webp",
      "/assets/Projects/17.webp",
    ],
  },
  "extended-reality": {
    title: "Extended Reality",
    intro:
      "Product showcases. Brand worlds. Interactive experiences. Immersive training environments. Spatial campaign installations - all built from brief to final render with the same directorial discipline we bring to every film we make.",
    heroImage: "/assets/Projects/9.webp",
    sectionHeading: "Motion with meaning.",
    sectionText_1:
      "Our animation pipeline spans 2D and 3D, mascots and models, process demonstrations and immersive 360°/VR experiences — bringing brands to life with detail and depth.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/15.webp",
      "/assets/Projects/16.webp",
      "/assets/Projects/17.webp",
    ],
  },
};
