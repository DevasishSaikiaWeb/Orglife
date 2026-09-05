import type { GalleryMedia } from "./portfolio";

export type ProductDetail = {
  title: string;
  intro: string;
  heroImage: string;
  heroIs360?: boolean;
  sectionHeading: string;
  sectionText_1: string;
  sectionText_2: string;
  gallery: GalleryMedia[];
  section2Text_1?: string;
  section2Text_2?: string;
};

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  aigio: {
    title: "Aigio - Branding, Redefined.",
    intro:
      "Aigio is here to democratize enterprise-grade brand strategy for organizations of all sizes. This is more than a tool. It’s a paradigm shift that replaces guesswork with deep-researched brand discovery, high-fidelity insights and intelligent branding direction.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788616028/AIGIO_2.mp4",
    sectionHeading: "Insight over guesswork.",
    sectionText_1:
      "AIGIO blends two decades of strategic creative expertise with modern data intelligence. With focus on features such as industry research to brand strategy, content and communication design to marketing campaigns, Aigio is engineered as the first true Operating System for Brand Continuity.",
    sectionText_2:
      "Where basic AI tools require constant prompting and human agencies suffer from talent turnover, AIGIO centralizes the proprietary brand strategy and forces adherence across every piece of visual and verbal output natively.",
    gallery: [
      // "/assets/Projects/2.webp",
      // "/assets/Projects/3.webp",
      // "/assets/Projects/4.webp",
    ],
    section2Text_1:
      "For localized marketing agencies and lean internal teams of MSMEs and startup organizations bleeding margins to slow human strategy retainers, AIGIO is the unified brand operating system that delivers comprehensive brand foundations and campaign architectures instantly, yet meaningfully. Unlike generic AI content generators or legacy agencies, AIGIO integrates proprietary strategy frameworks across multiple LLMs to ensure absolute brand continuity without human bottlenecks.",
  },
  "micro-minds": {
    title: "Micro Minds",
    intro:
      "An evolved K-8 EdTech and cognitive assessment platform operating at the intersection of AI-generated entertainment and life-skills education, Microminds is driven by culturally localized, AI-generated animated short films on various foundational learning domains, paired with dynamic, real-time AI-driven quantitative and qualitative reasoning assessments.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788616027/logo_reveal.mp4",
    sectionHeading: "Building the next generation.",
    sectionText_1:
      "Microminds exists to eradicate the modern Indian parenting dilemma by transforming passive digital consumption into active cognitive and behavioral development. We do not just occupy a child's time. We engineer cinematic environments where essential life skills ranging from basic financial literacy to grassroots civic sense are absorbed, tested, and proven to parents in real time. Our purpose is to build the behavioral architecture of the next generation without sacrificing the entertainment value they crave.",
    sectionText_2: "",
    gallery: [
      {
        media:
          "https://res.cloudinary.com/txchjkcd/image/upload/v1788616025/1half.webp",
        title: "Visual 1",
        span: "half",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/image/upload/v1788616024/2half.webp",
        title: "Visual 2",
        span: "half",
      },
    ],
    section2Text_1:
      "Microminds is built from day one to satisfy strict institutional requirements as well. The National Education Policy 2020 explicitly mandates holistic development and critical thinking over rote memorization. Yet Indian private schools lack the digital tools to formally assess soft skills. By utilizing AI to dynamically adjust question difficulty based on age and maturity standards, Microminds serves as a ready to use behavioral assessment engine for school administrators. This dual utility ensures that the product architecture we build for a single household is identical to the platform we license to a school network, protecting our operational margins while we scale.",
  },
  "ai-films": {
    title: "AI Films",
    intro:
      "Our proprietary AI film architecture — a production engine built from the ground up and integrated with the world's leading AI platforms and LLMs powers a cinematic production capability that creates films, short-format series and animation content at global broadcast standards.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788616049/ALL_FILMS.mp4",
    sectionHeading: "Cinema, reimagined.",
    sectionText_1:
      "Our AI cinematic films vertical revolutionizes the process of modern film-making. Desperate for efficiency, every industry is currrently looking up to the generative technology boom. What we have realized is that this has led to a chaotic creator economy full of operators producing generic visuals built on stolen intellectual property. Our cinematic vertical aims to sever this compromise. We indulge in regionally authentic, culturally accurate cinematic AI production tailored specifically for the Indian subcontinent's advertising and film industries, backed by enterprise-level IP indemnification and indigenously designed workflows and pipelines.",
    sectionText_2: "",
    gallery: [
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788617811/Jain.mp4",
        title: "Visual 1",
        span: "half",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788617811/Shauryam_-_MAJ_THAPA.mp4",
        title: "Visual 2",
        span: "half",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788617815/Sahajanand_Swami_Trailer_1.mp4",
        title: "Visual 3",
        span: "half",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788617812/Ravishankar_Vyas.mp4",
        title: "Visual 4",
        span: "half",
      },
    ],
    section2Text_1:
      "Today we allow creative directors and production houses to pitch legally safe impossible worlds. We allow regional producers to previz massive science fiction sequences without breaking their budgets. We are not tech disruptors trying to replace traditional filmmakers. We are the definitive generative production partner scaling your cinematic ambition globally.",
    section2Text_2:
      "We are gearing up to launch our very own AI Micro-drama platform by mid-2027. Get ready to be swept away by a cinematic wave of drama series featuring Indian historical personalities, teenage adventure stories and animated Indian superhero series and revived folk-stories from different parts of India  - all curated with the perfect blend of human creativity and advanced gen-AI magic.",
  },
  "ai-campaigns": {
    title: "AI Campaigns",
    intro:
      "What makes our brand films and ads different is not the tools. It is the creative intelligence layered between them — the proprietary frameworks, the directorial discipline, brand alignment and the creative rigour that ensures every film we produce is a brand asset, not just a generated video.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788616053/1.mp4",
    sectionHeading: "Stories that scale.",
    sectionText_1:
      "We blend experienced visualizers and creative animators with technologists, and as a result the output shifts from algorithmic generation to intentional cinematic direction. This hybrid approach allows us to slash traditional visual effects production costs and accelerate slow storyboarding processes without sacrificing the photorealism and consistency required by corporate clients and brands. The technology simply acts as the camera, while human directorial vision remains the decisive factor.",
    sectionText_2: "",
    gallery: [
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788616046/2_Gujarat_Tourism.mp4",
        title: "Visual 1",
        span: "full",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788616036/Swaminarayan_podcast.mp4",
        title: "Visual 2",
        span: "full",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788616040/CERC_2d_style.mp4",
        title: "Visual 3",
        span: "full",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788616053/CERC.mp4",
        title: "Visual 4",
        span: "full",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788617868/Safaai_Saarthi.mp4",
        title: "Visual 5",
        span: "full",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788617866/Sterling_For_Web.mp4",
        title: "Visual 6",
        span: "full",
      },
    ],
    section2Text_1:
      "The era of using cheap artificial intelligence to cut corners is over. The middle market will soon collapse. In its place, two distinct categories will remain. The first category will be cheap automated tools used by local businesses for basic social media filler. The second category, where we are anchored now, will be premium cinematic AI production partners serving ambitious brands and serious film producers.",
  },
  animation: {
    title: "Animation",
    intro:
      "We produce 3D animated content across the full spectrum of formats and applications — from hyper-real product visualisations and animated brand mascots to stylised character series, process demonstration films, and fully animated campaign content — using a production pipeline that combines proprietary creative frameworks with industry-leading 3D modelling, rigging, and rendering platforms.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788616042/3D_Showreel4.mp4",
    heroIs360: false,
    sectionHeading: "From pixel ideas to live visual environments.",
    sectionText_1:
      "At Orglife, we have designed our own approach to animation design. We know that visuals must be anchored in predictive analytics and deep brand positioning before a single frame is sketched or rendered. They are engineered to solve complex messaging friction and communicate intricate value propositions. We utilize generative AI for rapid initial visual concepts which allows our brand strategists to test multiple visual positionings quickly and efficiently leading to rigorous attention to detail. This hybrid operational model ensures our clients receive category defining creative that performs predictably in the market.",
    sectionText_2: "",
    gallery: [
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788618837/Earth_Day.mp4",
        title: "Visual 1",
        span: "full",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788266911/2.mp4",
        title: "Visual 2",
        span: "half",
      },
      {
        media:
          "https://res.cloudinary.com/txchjkcd/video/upload/v1788176711/3D_product_design_Mudo.mp4",
        title: "Visual 3",
        span: "half",
      },
    ],
    section2Text_1:
      "Visual communication must evolve past the subjective. The future of brand strategy belongs to those who integrate deep market research with exceptional creative execution. Orglife builds future forward brands that win through intelligent strategy and groundbreaking animation design. We do not just make your brand look innovative. We engineer your visual assets to dominate the market.",
  },
  "extended-reality": {
    title: "Extended Reality - A Powerful Visual Dimension",
    intro:
      "Product showcases, brand worlds, interactive experiences, immersive training environments, spatial campaign installations - all built from brief to final render with the same directorial discipline we bring to every film we make.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788616050/Earth_To_Mars.mp4",
    sectionHeading: "From pixel ideas to live visual environments.",
    sectionText_1:
      "Scrolling through a story is one thing. Experiencing it firest-hand is something else entirely, something your audience will not forget — because the human brain does not forget places and experiences the way it forgets pages. We design and produce 3D virtual reality environments and assets — brand worlds, product showrooms, spatial storytelling installations, and interactive XR experiences — for brands that want their audience to feel the brand from the inside rather than watch it on a flat screen.",
    sectionText_2: "",
    gallery: [
      {
        media: "https://youtu.be/plihikd_thA",
        title: "Visual 1",
        span: "full",
      },
    ],
    section2Text_1:
      "Our environments are built using proprietary spatial design frameworks layered with the world's leading real-time 3D engines and XR development platforms. Every space is architected around a brand strategy. Every interaction is choreographed. Every environment is delivered across headset, web, and spatial display formats — ready for the moment your audience steps in.",
  },
};
