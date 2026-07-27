// Page details
export const PAGE_DETAILS_TITLE = "INNOVATING FOR THE FUTURISTIC MINDS.";
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
    img: "/assets/Products/webp/Ai_platform.webp",
    description:
      "This is more than a tool. It’s Branding, redefined. Aigio is a paradigm shift that replaces guesswork with high-fidelity insights.",
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
    img: "/assets/Products/webp/Micro_Mind.webp",
    description:
      "It is a classy, holistic approach to awareness that doesn’t just share knowledge but builds the intellectual and emotional architecture for the next generation.",
    action: {
      label: "Explore Micro Minds",
      href: "/products/micro-minds",
    },
  },
  {
    title: "AI Films",
    img: "/assets/Products/webp/AI_FILMS_-_WEBSITE.webp",
    description:
      "We’re now ready with our own recipe of workflows and AI agents, blending human creativity and artificial intelligence - to create never-before magic in the field of immersive cinematic experience.",
    action: {
      label: "Explore AI Films",
      href: "/products/ai-films",
    },
  },
  {
    title: "AI Ad Campaigns",
    img: "/assets/Products/webp/AI_AD_CAMPAIGNS_-_WEBSITE.webp",
    description:
      "We develop modern brand storytelling concepts that communicate across platforms and masses.",
    action: {
      label: "Explore AI Ad Campaigns",
      href: "/products/ai-ad-campaigns",
    },
  },
  {
    title: "Extended Reality",
    img: "/assets/Products/webp/360_BusSequence_4k.mp4",
    is360: true,
    description:
      "From ultra-precise product models to detailed process flows to mascots, we design animated 2D and 3D content for brands that feel more like cinematic experiences than mere virtual content.",
    action: {
      label: "Explore Extended Reality",
      href: "/products/extended-reality",
    },
  },

  {
    title: "Animation",
    img: "/assets/Products/webp/360_BusSequence_4k.mp4",
    is360: true,
    description:
      "From ultra-precise product models to detailed process flows to mascots, we design animated 2D and 3D content for brands that feel more like cinematic experiences than mere virtual content.",
    action: {
      label: "Explore Animation",
      href: "/products/animation",
    },
  },
];
