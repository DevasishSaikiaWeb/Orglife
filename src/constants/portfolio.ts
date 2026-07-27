export type PortfolioItem = {
  // Media URL — image, video (.mp4/.webm), or an equirectangular 360 file.
  media: string;
  title: string;
  // Small caption/service line shown under the slide (optional).
  tag?: string;
  // Render `media` as an interactive 360°/VR panorama.
  is360?: boolean;
};

export type PortfolioCategory = {
  slug: string;
  title: string;
  description: string;
  items: PortfolioItem[];
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    slug: "content-strategy",
    title: "Content Strategy",
    description:
      "We architect content that connects — blueprints, funnels and narratives that turn attention into lasting brand conversations.",
    items: [
      {
        media: "/assets/Home_page/Exploring a new world of creative possibilities/KU.mp4",
        title: "Karnavati University",
        tag: "Event video production + Edit",
      },
      {
        media: "/assets/Projects/2.webp",
        title: "Ahmedabad Design Week",
        tag: "Content and Communication Strategy",
      },
      {
        media: "/assets/Projects/3.webp",
        title: "Brand Literature",
        tag: "Multi-format content",
      },
      {
        media: "/assets/Projects/4.webp",
        title: "Editorial Design",
        tag: "Print + Digital",
      },
      {
        media: "/assets/Projects/5.webp",
        title: "Campaign Narrative",
        tag: "Storytelling",
      },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    description:
      "From identity to guidelines, we craft brand foundations that resonate with audiences and stand the test of markets.",
    items: [
      {
        media: "/assets/Projects/6.webp",
        title: "Brand Identity System",
        tag: "Identity Design",
      },
      {
        media: "/assets/Projects/7.webp",
        title: "Visual Language",
        tag: "Brand Guidelines",
      },
      {
        media: "/assets/Projects/9.webp",
        title: "Packaging",
        tag: "Product Branding",
      },
      {
        media: "/assets/Projects/10.webp",
        title: "Rebranding",
        tag: "Brand Strategy",
      },
      {
        media: "/assets/Projects/11.webp",
        title: "Logo Suite",
        tag: "Mark Design",
      },
    ],
  },
  {
    slug: "ai-creatives",
    title: "AI Creatives",
    description:
      "Where human creativity meets artificial intelligence — films, campaigns and immersive assets built with our own AI workflows.",
    items: [
      {
        media: "/assets/Products/webp/AI_FILMS_-_WEBSITE.webp",
        title: "AI Films",
        tag: "Generative Cinema",
      },
      {
        media: "/assets/Products/webp/AI_AD_CAMPAIGNS_-_WEBSITE.webp",
        title: "AI Ad Campaigns",
        tag: "Brand Storytelling",
      },
      {
        media: "/assets/Products/webp/Ai_platform.webp",
        title: "AI Brand Platform",
        tag: "Aigio",
      },
      {
        media: "/assets/Projects/12.webp",
        title: "AI Photography",
        tag: "Product Visuals",
      },
      {
        media: "/assets/Projects/13.webp",
        title: "Generative Assets",
        tag: "Concept Art",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "UI/UX design and development, web tools and applications — bold steps for strong digital footprints.",
    items: [
      {
        media: "/assets/Projects/14.webp",
        title: "Marketing Website",
        tag: "UI/UX + Build",
      },
      {
        media: "/assets/Projects/15.webp",
        title: "Web Application",
        tag: "Product Design",
      },
      {
        media: "/assets/Projects/16.webp",
        title: "E-commerce Platform",
        tag: "Storefront",
      },
      {
        media: "/assets/Projects/17.webp",
        title: "Design System",
        tag: "Component Library",
      },
      {
        media: "/assets/Projects/18.webp",
        title: "Landing Experience",
        tag: "Interactive",
      },
    ],
  },
  {
    slug: "motion-visuals",
    title: "Motion Visuals",
    description:
      "2D and 3D animation, mascots, product models and immersive 360°/VR experiences that bring brands to life.",
    items: [
      {
        media: "/assets/Products/webp/360_BusSequence_4k.mp4",
        title: "360° Product Experience",
        tag: "VR / 360 View",
        is360: true,
      },
      {
        media: "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795237/Army_Ai_Video_fgivpc.mp4",
        title: "Army AI Video",
        tag: "Motion Graphics",
      },
      {
        media: "/assets/Projects/19.webp",
        title: "3D Product Model",
        tag: "CGI",
      },
      {
        media: "/assets/Projects/20.webp",
        title: "Animated Mascot",
        tag: "Character Design",
      },
      {
        media: "/assets/Projects/21.webp",
        title: "Process Demonstration",
        tag: "Explainer",
      },
    ],
  },
  {
    slug: "social-creatives",
    title: "Social Creatives",
    description:
      "Scroll-stopping social content — graphics, reels and campaigns that amplify brand voices across platforms.",
    items: [
      {
        media: "/assets/Projects/22.webp",
        title: "Social Campaign",
        tag: "Multi-platform",
      },
      {
        media: "/assets/Projects/23.webp",
        title: "Reel Series",
        tag: "Short-form Video",
      },
      {
        media: "/assets/Projects/24.webp",
        title: "Content Grid",
        tag: "Feed Design",
      },
      {
        media: "/assets/Projects/25.webp",
        title: "Story Templates",
        tag: "Engagement",
      },
      {
        media: "/assets/Projects/26.webp",
        title: "Launch Creatives",
        tag: "Announcement",
      },
    ],
  },
];
