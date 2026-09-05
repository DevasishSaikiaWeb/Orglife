// Page details
export const PAGE_DETAILS_TITLE = "INNOVATING FOR THE FUTURISTIC MINDS";
export const PAGE_DETAILS_SUBTITLE =
  "Here’s where we have brought about a sophisticated synthesis of two decades of strategic creative expertise and innovative modern data intelligence. Welcome to our crazy world of platforms.";

type Product = {
  title: string;
  img: string;
  description: string;
  action: { label: string; href: string };
  /** Render `img` as an interactive 360°/VR panorama (equirectangular file). */
  is360?: boolean;
};

// PRODUCT cards
export const PRODUCTS: Product[] = [
  {
    title: "Aigio",
    img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1787655396/AIGIO_nycrut.mp4",
    description:
      "Aigio is here to democratize enterprise-grade brand strategy for organizations of all sizes. This is more than a tool. It’s a paradigm shift that replaces guesswork with deep-researched brand discovery, high-fidelity insights and intelligent branding direction.",
    action: {
      label: "Explore Aigio",
      href: "/products/aigio",
    },
    // list: [
    //   {
    //     label: "Brand identity design",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Brand Personality",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Brand Positioning",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Tone of Voice and Verbal Identity",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Brand guidelines and manual",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Industry, market and audience research",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Brand narrative and storytelling",
    //     isComingSoon: false,
    //   },
    //   {
    //     label: "Rebranding strategy",
    //     isComingSoon: false,
    //   },
    // ],
  },
  {
    title: "Micro Minds",
    img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1787655398/Micro_Minds_y0evxo.mp4",
    description:
      "An evolved K-8 EdTech and cognitive assessment platform operating at the intersection of AI-generated entertainment and life-skills education, Microminds is driven by culturally localized, AI-generated animated short films on various foundational learning domains, paired with dynamic, real-time AI-driven quantitative and qualitative reasoning assessments.",
    action: {
      label: "Explore Micro Minds",
      href: "/products/micro-minds",
    },
  },
  {
    title: "AI Films",
    img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1787655396/AI_Films_dtmc77.mp4",
    description:
      "Our proprietary AI film architecture — a production engine built from the ground up and integrated with the world's leading AI platforms and LLMs powers a cinematic production capability that creates films, short-format series and animation content at global broadcast standards.",
    action: {
      label: "Explore AI Films",
      href: "/products/ai-films",
    },
  },
  {
    title: "AI Campaigns",
    img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1787655398/AI_Ad_Campaigns_aibr85.mp4",
    description:
      "What makes our brand films and ads different is not the tools. It is the creative intelligence layered between them — the proprietary frameworks, the directorial discipline, brand alignment and the creative rigour that ensures every film we produce is a brand asset, not just a generated video.",
    action: {
      label: "Explore AI Campaigns",
      href: "/products/ai-campaigns",
    },
  },
  {
    title: "Extended Reality",
    img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1787655396/Extended_Reality_qmgjox.mp4",
    is360: false,
    description:
      "Product showcases, brand worlds, interactive experiences, immersive training environments, spatial campaign installations - all built from brief to final render with the same directorial discipline we bring to every film we make.",
    action: {
      label: "Explore Extended Reality",
      href: "/products/extended-reality",
    },
  },

  {
    title: "Animation",
    img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1787655396/Animation_ikn61k.mp4",
    is360: false,
    description:
      "We produce 3D animated content across the full spectrum of formats and applications — from hyper-real product visualisations and animated brand mascots to stylised character series, process demonstration films, and fully animated campaign content — using a production pipeline that combines proprietary creative frameworks with industry-leading 3D modelling, rigging, and rendering platforms.",
    action: {
      label: "Explore Animation",
      href: "/products/animation",
    },
  },
];
