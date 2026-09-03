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
      "Our AI cinematic films vertical revolutionizes the process of modern film-making. Desperate for efficiency, every industry is currrently looking up to the generative technology boom. What we have realized is that this has led to a chaotic creator economy full of operators producing generic visuals built on stolen intellectual property. Our cinematic vertical aims to sever this compromise. We indulge in regionally authentic, culturally accurate cinematic AI production tailored specifically for the Indian subcontinent's advertising and film industries, backed by enterprise-level IP indemnification and indigenously designed workflows and pipelines.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/9.webp",
      "/assets/Projects/10.webp",
      "/assets/Projects/11.webp",
    ],
    section2Text_1:"Today we allow creative directors and production houses to pitch legally safe impossible worlds. We allow regional producers to previz massive science fiction sequences without breaking their budgets. We are not tech disruptors trying to replace traditional filmmakers. We are the definitive generative production partner scaling your cinematic ambition globally."
  },
  "ai-campaigns": {
    title: "AI Campaigns",
    intro:
      "What makes our brand films and ads different is not the tools. It is the creative intelligence layered between them — the proprietary frameworks, the directorial discipline, brand alignment and the creative rigour that ensures every film we produce is a brand asset, not just a generated video.",
    heroImage: "/assets/Products/webp/AI_AD_CAMPAIGNS_-_WEBSITE.webp",
    sectionHeading: "Stories that scale.",
    sectionText_1:
      "We blend experienced visualizers and creative animators with technologists, and as a result the output shifts from algorithmic generation to intentional cinematic direction. This hybrid approach allows us to slash traditional visual effects production costs and accelerate slow storyboarding processes without sacrificing the photorealism and consistency required by corporate clients and brands. The technology simply acts as the camera, while human directorial vision remains the decisive factor.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/12.webp",
      "/assets/Projects/13.webp",
      "/assets/Projects/14.webp",
    ],
    section2Text_1:"The era of using cheap artificial intelligence to cut corners is over. The middle market will soon collapse. In its place, two distinct categories will remain. The first category will be cheap automated tools used by local businesses for basic social media filler. The second category, where we are anchored now, will be premium cinematic AI production partners serving ambitious brands and serious film producers."
  },
  animation: {
    title: "AI Animation",
    intro:
      "We produce 3D animated content across the full spectrum of formats and applications — from hyper-real product visualisations and animated brand mascots to stylised character series, process demonstration films, and fully animated campaign content — using a production pipeline that combines proprietary creative frameworks with industry-leading 3D modelling, rigging, and rendering platforms.",
    heroImage: "/assets/Products/webp/360_BusSequence_4k.mp4",
    heroIs360: true,
    sectionHeading: "Motion with meaning.",
    sectionText_1:
      "At Orglife, we have designed our own approach to animation design. We know that visuals must be anchored in predictive analytics and deep brand positioning before a single frame is sketched or rendered. They are engineered to solve complex messaging friction and communicate intricate value propositions. We utilize generative AI for rapid initial visual concepts which allows our brand strategists to test multiple visual positionings quickly and efficiently leading to rigorous attention to detail. This hybrid operational model ensures our clients receive category defining creative that performs predictably in the market.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/15.webp",
      "/assets/Projects/16.webp",
      "/assets/Projects/17.webp",
    ],
    section2Text_1:"Visual communication must evolve past the subjective. The future of brand strategy belongs to those who integrate deep market research with exceptional creative execution. Orglife builds future forward brands that win through intelligent strategy and groundbreaking animation design. We do not just make your brand look innovative. We engineer your visual assets to dominate the market."
  },
  "extended-reality": {
    title: "Extended Reality - A Powerful Visual Dimension",
    intro:
      "Product showcases. Brand worlds. Interactive experiences. Immersive training environments. Spatial campaign installations - all built from brief to final render with the same directorial discipline we bring to every film we make.",
    heroImage: "/assets/Projects/9.webp",
    sectionHeading: "Motion with meaning.",
    sectionText_1:
      "Scrolling through a story is one thing. Experiencing it firest-hand is something else entirely, something your audience will not forget — because the human brain does not forget places and experiences the way it forgets pages. We design and produce 3D virtual reality environments and assets — brand worlds, product showrooms, spatial storytelling installations, and interactive XR experiences — for brands that want their audience to feel the brand from the inside rather than watch it on a flat screen.",
    sectionText_2:
      "",
    gallery: [
      "/assets/Projects/15.webp",
      "/assets/Projects/16.webp",
      "/assets/Projects/17.webp",
    ],
    section2Text_1:"Our environments are built using proprietary spatial design frameworks layered with the world's leading real-time 3D engines and XR development platforms. Every space is architected around a brand strategy. Every interaction is choreographed. Every environment is delivered across headset, web, and spatial display formats — ready for the moment your audience steps in."
  },
};
