import type { PortfolioItem } from "./portfolio";
export type CaseStudyMedia = PortfolioItem & {
  span?: "full" | "half";
};

export type CaseStudyCase = {
  thecase: string;
  theopportunity: string;
  whatwedelivered: string;
  layout?: "carousel" | "grid";
  gallery: CaseStudyMedia[];
};

export type CaseStudy = {
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
  cases: CaseStudyCase[];
};

const HOME =
  "/assets/Home_page/Exploring a new world of creative possibilities";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "indian-army",
    brand: "Indian Army",
    cardImage: `https://res.cloudinary.com/txchjkcd/video/upload/v1788178857/Army.mp4`,
    cardDescription:
      "Multiple visual communication assignments for the Indian Army across domains and geographies.",
    industries: ["Indian Defence Forces"],
    intro:
      "Crafting visual communications with the discipline, dignity and impact the nation’s forces deserve.",
    heroImage: `https://res.cloudinary.com/dpblcamaw/video/upload/v1788161454/1._Indian_Army_Logo_Animation_dnfuz7.mp4`,
    cases: [
      {
        thecase:
          "Int'l event Sanyukt Vimochan - Annual Joint HADR Exercise 2024, themed Cyclone.",
        theopportunity:
          "To become an integral part of a team which would showcase the Indian Defence Forces' capabilities and readiness in disaster management and relief and rescue operations.",
        whatwedelivered:
          "Flow of the event campaign, pre-event visual promotions, direction and coverage of the live event and post-event communications, over a campaign period of 2 months.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "https://youtu.be/_l_EcRhd-D4",
            title: "Divisional Archive",
            span: "full",
          },
        ],
      },
      {
        thecase: "Visual Content and Multimedia Training Modules",
        theopportunity:
          "A series of media production training programs for real-time visual content generation and collection.",
        whatwedelivered:
          "Design of the flow of the event campaign, conducting sessions, assessments and live field sessions across terrains and geographies.",
        layout: "grid",
        // TODO: swap for this case's real assets — 1 full image + 2 small images.
        gallery: [
          {
            media:
              "/assets/Case studies/Indian army/WEB/Indian Army Training Workshops.webp",
            title: "Training Modules",
          },
          {
            media:
              "/assets/Case studies/Indian army/WEB/Indian Army Training Workshops 2.webp",
            title: "Field Sessions",
          },
          {
            media:
              "/assets/Case studies/Indian army/WEB/Indian_Army_Training_Workshops_2-1.webp",
            title: "Assessments",
          },
        ],
      },
      {
        thecase:
          "Cinematic tribute to gallantry awardees of Indian Army during Hornbill Festival.",
        theopportunity:
          "AI short-film tribute series commemorating the valor and sacrifice of Indian Army martyrs and gallantry award recipients from Nagaland, showcased during the Hornbill Festival, 2025-26.",
        whatwedelivered:
          "Development & Creative Foundation, pre-production and visual planning, production and asset generation, post-production and packaging.",
        layout: "grid",
        // TODO: swap for this case's real assets — 1 video + 2 small images.
        gallery: [
          {
            media:
              "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795237/Army_Ai_Video_fgivpc.mp4",
            title: "Hornbill Tribute Series",
          },
          {
            media:
              "/assets/Case studies/Indian army/WEB/Indian Army Ai Video.webp",
            title: "Visual Planning",
          },
          {
            media:
              "/assets/Case studies/Indian army/WEB/Indian Army Ai Video 2.webp",
            title: "Asset Generation",
          },
        ],
      },
      {
        thecase: "Photo & Video archiving of Divisional Data",
        theopportunity:
          "Detailed cinematic documentation of current capabilities & historical achievements of Regiments through video films for archiving objectives.",
        whatwedelivered:
          "Data research, Development & Creative Foundation, visual planning, production and asset generation, post-production and packaging.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "/assets/Case studies/Indian army/WEB/PHOTOGRAPHY PROJECT 1.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Indian army/WEB/VIDEOGRAPHY PROJECT 2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
    ],
  },
  {
    slug: "ministry-of-external-affairs",
    brand: "Ministry of External Affairs",
    cardImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788178855/MEA.mp4",
    cardDescription:
      "Projects ranging from a series of ebooks to international event communications.",
    industries: ["Government"],
    intro:
      "Communicating India to the world — with the nuance diplomacy demands.",
    heroImage:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1788166899/1_MEA_LOGO_ANIMATION_LOOP_c4qio7_bhdrwo.mp4",
    cases: [
      {
        thecase: "Ebooks of multiple events, with multimedia features",
        theopportunity:
          "To be instrumental in the shift from printed booklets to ebooks and flipbooks with embedded videos and links.",
        whatwedelivered:
          "We designed and developed one of the first series of such content for the Ministry of External Affairs of India - Int’l Day of Yoga ebooks and A Trip To The Heart Of Asia ebook.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "/assets/Case studies/Ministry of External Affairs/Web/Ministry of External Affairs E-Book 1.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Ministry of External Affairs/Web/Ministry of External Affairs E-Book 2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase:
          "Design team for India Development Foundation for Overseas Indians",
        theopportunity:
          "Lead creative print and digital designs for multiple International events and causes",
        whatwedelivered:
          "Content and visual direction for brochures and magazines, outdoor communication design",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "/assets/Case studies/Ministry of External Affairs/Web/MEA Overseas Indian Branding.webp",
            title: "Divisional Archive",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "sswai",
    brand: "SSWAI",
    cardImage: `https://res.cloudinary.com/txchjkcd/video/upload/v1788178881/Sswai.mp4`,
    cardDescription:
      "From brand identity design concepts to ingenious brand communications for a young, dynamic fashion brand.",
    industries: ["Fashion and Lifestyle"],
    intro:
      "Empowering a young and dynamic contemporary Indian fashion brand with a bold, distinctive identity.",
    heroImage: `https://res.cloudinary.com/dpblcamaw/video/upload/v1788167898/1_Sswai_Logo_Animation_kfnfla_oktstr.mp4`,
    cases: [
      {
        thecase: "Brand foundation design",
        theopportunity:
          "Brand discovery followed by a full-scale impactful brand strategy.",
        whatwedelivered:
          "Deep-researched brand profile, brand identity system, visual assets and voice.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/SSWAI/Web/SSWAI Visting Card.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media: "/assets/Case studies/SSWAI/Web/Sswai Packaging.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase: "Brand and product visual assets",
        theopportunity:
          "To design and develop an evolved range of visual assets through photography, videography and advanced AI tools for brand communications and products displays.",
        whatwedelivered:
          "High-fidelity hyper-real generative AI visual content and multi-layered product photography and videography for digital and print catalogues and social media.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/SSWAI/Web/Sswai Visual Branding.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/SSWAI/Web/Sswai Visual Branding 2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase: "Brand website and ecommerce",
        theopportunity:
          "To design and develop the brand's ecommerce website along with listing and management on marketplace platforms.",
        whatwedelivered:
          "The brand's ecommerce website with visually appealing UI and clear navigation, listing and management of brand on platforms like Myntra, Ajio and others.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "/assets/Case studies/SSWAI/Web/Sswai Website Development.webp",
            title: "Divisional Archive",
            span: "full",
          },
        ],
      },
      {
        thecase: "Brand foundation design",
        theopportunity:
          "Brand discovery followed by a full-scale impactful brand strategy.",
        whatwedelivered:
          "Deep-researched brand profile, brand identity system, visual assets and voice.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/SSWAI/Web/Social Media.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media: "/assets/Case studies/SSWAI/Web/Social Media 1.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
    ],
  },
  {
    slug: "ku",
    brand: "Karnavati University",
    cardImage: `https://res.cloudinary.com/txchjkcd/video/upload/v1788178860/KU.mp4`,
    cardDescription:
      "Brand narratives, compelling visual communications and event theme designs — for half a decade now.",
    industries: ["Education"],
    intro: "An exciting journey of creative partnership in storytelling.",
    heroImage: `https://res.cloudinary.com/txchjkcd/video/upload/v1788170580/Karnavati_university_Logo_Animation.mp4`,
    cases: [
      {
        thecase: "Visual content and communication",
        theopportunity:
          "To create multi-format ad videos for promotional campaigns",
        whatwedelivered:
          "Narrative development & creative foundation, pre-production and visual planning, production and asset generation, post-production and packaging.",
        layout: "grid",
        gallery: [
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788171879/1_content_and_communication.mp4",
            title: "Event Theme",
          },
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788171881/1.1_content_and_communication.mp4",
            title: "Brand Narrative",
          },
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788171876/1.2_content_and_communication.mp4",
            title: "Campus Communications",
          },
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788171895/1.3_content_and_communication.mp4",
            title: "Brand Narrative",
            span: "full",
          },
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788171874/1.4_content_and_communication.mp4",
            title: "Campus Communications",
          },
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788171871/1.5_content_and_communication.mp4",
            title: "Campus Communications",
          },
        ],
      },
      {
        thecase: "Creative direction of event IPs",
        theopportunity:
          "Curating strategies for branding and communication design for Nat'l and Int'l events such as Ahmedabad Design Week and Karnavati Literature and Film Festival.",
        whatwedelivered:
          "Themes of the event IPs with content and communication strategy, flow of the event campaign, pre-event visual promotions and post-event communications.",
        layout: "grid",
        gallery: [
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788172211/2_Visual_Content_Strategy.mp4",
            title: "Brand Narrative",
          },
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788173509/2.1_Visual_Content_Strategy.mp4",
            title: "Campus Communications",
          },
          {
            media:
              "/assets/Case studies/Karnavati University/Visual Content Strategy.webp",
            title: "Campus Communications",
          },
        ],
      },
    ],
  },
  {
    slug: "wanta-santa",
    brand: "Wanta Santa",
    cardImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788178860/WantASanta.mp4",
    cardDescription: "Never-before magic in the field of immersive experience.",
    industries: ["Amusement", "Event Management"],
    intro: "An universe of virtual worlds and magical experiences.",
    heroImage:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1788168993/Wanta_SantaLogo_Animation_cyjegw.mp4",
    cases: [
      {
        thecase: "Mission Mars",
        theopportunity:
          "To design the immersive journey through visual assets - from Earth to Mars and back.",
        whatwedelivered:
          "3D models, animated visual assets and environements and graphic simulation for immersive experiences.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://res.cloudinary.com/dpblcamaw/video/upload/v1788169067/ARTH_TO_MARS_bqwzh4.mp4",
            title: "Divisional Archive",
            span: "full",
          },
        ],
      },
      {
        thecase: "The North Pole Express",
        theopportunity:
          "To design an amazing immersive journey to Santa's village aboard the North Pole Express.",
        whatwedelivered:
          "3D mascot and Christmas character models, animated visual assets and multiple environements and graphic simulation for immersive experiences.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://res.cloudinary.com/dpblcamaw/video/upload/v1788169405/Winter_Wonderland_jajl6f.mp4",
            title: "Divisional Archive",
            span: "full",
          },
          {
            media:
              "/assets/Case studies/Wanta Santa/Web/Winter_wonderland.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
          {
            media: "/assets/Case studies/Wanta Santa/Web/Astronaut.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
    ],
  },
  {
    slug: "landmark-and-volkswagen",
    brand: "Group Landmark",
    cardImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788178861/Landmark.mp4",
    cardDescription:
      "Creative concepts and visual content for impactful communications across multiple platforms.",
    industries: ["Automobile"],
    intro: "Driving impactful automobile communications across platforms.",
    heroImage:
      "https://res.cloudinary.com/txchjkcd/video/upload/v1788173767/Landmark_Group_Logo.mp4",
    cases: [
      {
        thecase: "Visual content and communication",
        theopportunity:
          "To create multi-format ad videos for branding and promotional campaigns for multiple automotive brands.",
        whatwedelivered:
          "Narratives and scripts, articles and blogs, graphic concepts, video production and post-production.",
        layout: "grid",
        // TODO: swap for this case's real assets — 1 video + 2 small images.
        gallery: [
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788173876/Visual_content_and_communication_2.mp4",
            title: "Hornbill Tribute Series",
          },
          {
            media:
              "/assets/Case studies/Landmark and Volkswagen/Web/Visual content and communication 2.webp",
            title: "Visual Planning",
          },
          {
            media:
              "/assets/Case studies/Landmark and Volkswagen/Web/Visual content and communication 2.1.webp",
            title: "Asset Generation",
          },
        ],
      },
      {
        thecase: "Social media and campaign management",
        theopportunity:
          "Content, communication and campaign design and social media management of multiple automobile brands.",
        whatwedelivered:
          "Management of Group Landmark's social accounts and pages for VW, Honda, Mercedes Benz, Nissan and Renault across all organic and paid verticals.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "/assets/Case studies/Landmark and Volkswagen/Web/Social media and campaign management.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Landmark and Volkswagen/Web/Social media and campaign management 2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase: "3D/ CGI animated content for festivals and events",
        theopportunity:
          "To bring festive and event ideas to life through awesome 3D animation concepts and visuals.",
        whatwedelivered:
          "3D character, product and environment design, and cinematic animation features and vshort films.",
        layout: "grid",
        // TODO: swap for this case's real assets — 1 video + 2 small images.
        gallery: [
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788175144/3D_CGI_animated_content.mp4",
            title: "Hornbill Tribute Series",
          },
        ],
      },
      {
        thecase: "Volkswagen Taigun - Gujarat launch",
        theopportunity:
          "Product model launch event creative direction and productio",
        whatwedelivered:
          "Development & creative foundation, communication design, pre-production and visual planning, production and post-production.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://res.cloudinary.com/txchjkcd/video/upload/v1788175233/Volkswagen_Taigun_-_Gujarat_launc.mp4",
            title: "Divisional Archive",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "actuate-hydraulics",
    brand: "Actuate Hyadraulics",
    cardImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788178878/Actuate.mp4",
    cardDescription:
      "World-class hydraulics. Finally, a world-class brand to match.",
    industries: ["Manufacturing", "Industrial"],
    intro: "World-class hydraulics. Finally, a world-class brand to match.",
    heroImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788175395/Actuate_Logo_Animation.mp4",
    cases: [
      {
        thecase: "Brand identity design/ Rebranding",
        theopportunity:
          "Brand modernization and repositioning followed by a full-scale impactful brand strategy.",
        whatwedelivered:
          "Deep-researched brand profile, brand identity system, visual assets and voice.",
        layout: "grid",
        // TODO: swap for this case's real assets — 1 full image + 2 small images.
        gallery: [
          { media: "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.webp", title: "Training Modules" },
          { media: "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.1.webp", title: "Field Sessions" },
          { media: "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.2.webp", title: "Assessments" },
          { media: "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.3.webp", title: "Field Sessions" },
          { media: "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.4.webp", title: "Assessments" },
        ],
      },
      {
        thecase: "3D product design and visual assets",
        theopportunity:
          "To develop advanced 3D designs for the complete range of industrial hydraulic products, followed by AI-powered visual asset creation.",
        whatwedelivered:
          "High-precision product 3D models with animated demonstration of processes, along with high-fidelity generative AI visual content for cataloguing.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/Actuate/WEB/3D product design and visual assets1.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media: "/assets/Case studies/Actuate/WEB/3D product design and visual assets2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase: "Brand website",
        theopportunity:
          "To design and develop the brand's official website in a manner that it moving everything — visitors, enquiries and search rankings.",
        whatwedelivered:
          "We designed the complete digital presence — delivering a modern, technically optimised website alongside original copy and curated visuals for every page.",
        layout: "grid",
        gallery: [
          { media: "/assets/Case studies/Actuate/WEB/Brand website.webp", title: "Training Modules" },
        ],
      },
    ],
  },
  {
    slug: "mudo",
    brand: "Mudo",
    cardImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788178857/Mudo.mp4",
    cardDescription: "Nobody ever noticed an earplug. Until this one.",
    industries: ["Healthcare / Wellness", "Lifestyle"],
    intro: "Nobody ever noticed an earplug. Until this one.",
    heroImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788176620/Mudo_Logo_Animation.mp4",
    cases: [
      {
        thecase: "3D product design",
        theopportunity:
          "To develop advanced 3D designs and animated features for the entire range of products.",
        whatwedelivered:
          "High-precision product 3D models with animated ad videos.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "https://res.cloudinary.com/txchjkcd/video/upload/v1788176711/3D_product_design_Mudo.mp4",
            title: "Divisional Archive",
            span: "full",
          }
        ],
      },
      {
        thecase: "AI visual assets for display and advertisements",
        theopportunity:
          "To develop advanced 3D designs and animated features for the entire range of products.",
        whatwedelivered:
          "High-fidelity hyper-realistic generative AI visual content for product ad videos and ecommerce cataloguing.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/Mudo/AI visual assets for display1.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media: "/assets/Case studies/Mudo/AI visual assets for display2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase: "Brand foundation design",
        theopportunity:
          "Brand discovery followed by a full-scale impactful brand strategy.",
        whatwedelivered:
          "Deep-researched brand profile, brand identity system, visual assets and voice.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "https://res.cloudinary.com/txchjkcd/video/upload/v1788177180/Mudo_website.mp4",
            title: "Divisional Archive",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "sterling",
    brand: "Sterling",
    cardImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788178863/Sterling.mp4",
    cardDescription:
      "Helping the brand create patient experience, through visual communications.",
    industries: ["Hospitality", "Lifestyle"],
    intro:
      "Crafting warm, aspirational communications for a hospitality brand.",
    heroImage: "https://res.cloudinary.com/txchjkcd/video/upload/v1788177309/Sterling_Logo_Animation.mp4",
    cases: [
      {
        thecase: "Brand campaign design",
        theopportunity:
          "Lead creative print and digital designs for multiple events and causes",
        whatwedelivered:
          "Content, designs and visual direction for campaigns, outdoor and internal communication design.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/Sterling/Brand campaign design 1.webp",
            title: "Divisional Archive",
            span: "half",
          },
          {
            media: "/assets/Case studies/Sterling/Brand campaign design 2.webp",
            title: "Cinematic Documentation",
            span: "half",
          },
        ],
      },
      {
        thecase: "Advertisement concepts",
        theopportunity:
          "To create multi-format ad videos - cinematic and AI, for events and promotional campaigns",
        whatwedelivered:
          "Narrative development & creative foundation, pre-production and visual planning, production and asset generation, post-production and packaging.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "https://res.cloudinary.com/txchjkcd/video/upload/v1788177693/Advertisement_concepts_1.mp4",
            title: "Divisional Archive",
            span: "full",
          },
          {
            media: "https://res.cloudinary.com/txchjkcd/video/upload/v1788177685/Advertisement_concepts_2.mp4",
            title: "Cinematic Documentation",
            span: "full",
          },
        ],
      },
    ],
  },
];
export function caseStudyMedia(study: CaseStudy): CaseStudyMedia[] {
  return study.cases.flatMap((entry) => entry.gallery);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
