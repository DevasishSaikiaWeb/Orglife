import type { GalleryMedia } from "./portfolio";
export type CaseStudyMedia = GalleryMedia;

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
    cardImage: `https://cdn.orglife.co.in/orglife_website/Army.mp4`,
    cardDescription:
      "Multiple visual communication assignments for the Indian Army across domains and geographies.",
    industries: ["Indian Defence Forces"],
    intro:
      "Crafting visual communications with the discipline, dignity and impact the nation’s forces deserve.",
    heroImage: `https://cdn.orglife.co.in/orglife_website/Case+Studies/Indian+Army/Indian+Army+Logo+Animation.mp4`,
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
            title: "Sanyukt Vimochan HADR exercise film",
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
              "https://youtu.be/WpXvyE5gm2I",
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
            title: "PHOTOGRAPHY PROJECT 1",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Indian army/WEB/VIDEOGRAPHY PROJECT 2.webp",
            title: "VIDEOGRAPHY PROJECT 2",
            span: "half",
          },
        ],
      },
    ],
  },
  {
    slug: "ministry-of-external-affairs",
    brand: "Ministry of External Affairs",
    cardImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/MEA.mp4",
    cardDescription:
      "Projects ranging from a series of ebooks to international event communications.",
    industries: ["Government"],
    intro:
      "Communicating India to the world — with the nuance diplomacy demands.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/MEA/MEA+LOGO+ANIMATION.mp4",
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
            title: "Ministry of External Affairs E Book 1",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Ministry of External Affairs/Web/Ministry of External Affairs E-Book 2.webp",
            title: "Ministry of External Affairs E Book 2",
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
            title: "MEA Overseas Indian Branding",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "sswai",
    brand: "SSWAI",
    cardImage: `https://cdn.orglife.co.in/orglife_website/Sswai.mp4`,
    cardDescription:
      "From brand identity design concepts to ingenious brand communications for a young, dynamic fashion brand.",
    industries: ["Fashion and Lifestyle"],
    intro:
      "Empowering a young and dynamic contemporary Indian fashion brand with a bold, distinctive identity.",
    heroImage: `https://cdn.orglife.co.in/orglife_website/Case+Studies/Sswai/Sswai+Logo+Animation.mp4`,
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
            title: "SSWAI Visiting Card",
            span: "half",
          },
          {
            media: "/assets/Case studies/SSWAI/Web/Sswai Packaging.webp",
            title: "SSWAI Packaging",
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
            title: "SSWAI Visual Branding",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/SSWAI/Web/Sswai Visual Branding 2.webp",
            title: "SSWAI Visual Branding 2",
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
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/Sswai/Sswai_Web.mp4",
            title: "SSWAI Web",
            span: "full",
          },
        ],
      },
      {
        thecase: "Social media and campaign management",
        theopportunity:
          "Content themes, calendar curation, social media management and digital ad campaigns.",
        whatwedelivered:
          "Creative real and AI visual content design, management of Sswai's social accounts and pages across all organic and paid verticals.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/SSWAI/Web/Social Media.webp",
            title: "Social Media",
            span: "half",
          },
          {
            media: "/assets/Case studies/SSWAI/Web/Social Media 1.webp",
            title: "Social Media 1",
            span: "half",
          },
        ],
      },
    ],
  },
  {
    slug: "ku",
    brand: "Karnavati University",
    cardImage: `https://cdn.orglife.co.in/orglife_website/KU.mp4`,
    cardDescription:
      "Brand narratives, compelling visual communications and event theme designs — for half a decade now.",
    industries: ["Education"],
    intro: "An exciting journey of creative partnership in storytelling.",
    heroImage: `https://cdn.orglife.co.in/orglife_website/Case+Studies/KU/Karnavati_University.mp4`,
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
              "https://youtu.be/SheRORR7KUg",
            title: "Event Theme",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/KU/content_and_communication_1.1.mp4",
            title: "Brand Narrative",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/KU/content_and_communication_1.2.mp4",
            title: "Campus Communications",
          },
          {
            media:
              "https://youtu.be/U8Jx2YHMV98",
            title: "Brand Narrative",
            span: "full",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/KU/content_and_communication_1.4.mp4",
            title: "Campus Communications",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/KU/content_and_communication_1.5.mp4",
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
              "https://youtu.be/UuQ9oRVBAsU",
            title: "Brand Narrative",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/KU/Creative_direction_of_event_IPs.mp4",
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
    cardImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/WantASanta.mp4",
    cardDescription: "Never-before magic in the field of immersive experience.",
    industries: ["Amusement", "Event Management"],
    intro: "An universe of virtual worlds and magical experiences.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Wanta+Santa/Wanta_SantaLogo_Animation.mp4",
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
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/Wanta+Santa/ARTH_TO_MAR.mp4",
            title: "ARTH TO MARS",
            span: "full",
          },
          {
            media:
              "/assets/Case studies/Wanta Santa/Web/Winter_wonderland.webp",
            title: "Winter wonderland",
            span: "half",
          },
          {
            media: "/assets/Case studies/Wanta Santa/Web/Astronaut.webp",
            title: "Astronaut",
            span: "half",
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
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/Wanta+Santa/Winter_Wonderland.mp4",
            title: "Winter Wonderland",
            span: "full",
          },
          {
            media: "/assets/Products/webp/360_BusSequence_4k.mp4",
            is360: true,
            title: "360 Immersive Experience",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "landmark-and-volkswagen",
    brand: "Group Landmark",
    cardImage: "/assets/Case studies/Landmark and Volkswagen/Web/Landmark.webp",
    cardDescription:
      "Creative concepts and visual content for impactful communications across multiple platforms.",
    industries: ["Automobile"],
    intro: "Driving impactful automobile communications across platforms.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Group+Landmark/Landmark_Group_Logo.mp4",
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
              "https://youtu.be/rKUr_scBdFI",
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
            title: "Social media and campaign management",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Landmark and Volkswagen/Web/Social media and campaign management 2.webp",
            title: "Social media and campaign management 2",
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
              "https://youtu.be/WmXlhXB2xWQ",
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
              "https://youtu.be/leAXEb6ACrc",
            title: "Volkswagen Taigun Gujarat launch",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "actuate-hydraulics",
    brand: "Actuate Hyadraulics",
    cardImage: "/assets/Case studies/Actuate/WEB/Actuate.webp",
    cardDescription:
      "World-class hydraulics. Finally, a world-class brand to match.",
    industries: ["Manufacturing", "Industrial"],
    intro: "World-class hydraulics. Finally, a world-class brand to match.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Actuate+Hyadraulics/Actuate_Logo_Animation.mp4",
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
          {
            media:
              "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.webp",
            title: "Training Modules",
          },
          {
            media:
              "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.1.webp",
            title: "Field Sessions",
          },
          {
            media:
              "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.2.webp",
            title: "Assessments",
          },
          {
            media:
              "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.3.webp",
            title: "Field Sessions",
          },
          {
            media:
              "/assets/Case studies/Actuate/WEB/Brand identity design Rebranding 1.4.webp",
            title: "Assessments",
          },
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
            media:
              "/assets/Case studies/Actuate/WEB/3D product design and visual assets1.webp",
            title: "3D product design and visual assets1",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Actuate/WEB/3D product design and visual assets2.webp",
            title: "3D product design and visual assets2",
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
          {
            media: "/assets/Case studies/Actuate/WEB/Brand website.webp",
            title: "Training Modules",
          },
        ],
      },
    ],
  },
  {
    slug: "mudo",
    brand: "Mudo",
    cardImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Mudo.mp4",
    cardDescription: "Nobody ever noticed an earplug. Until this one.",
    industries: ["Healthcare / Wellness", "Lifestyle"],
    intro: "Nobody ever noticed an earplug. Until this one.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Mudo/Mudo+Logo+Animation.mp4",
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
            media:
              "https://youtu.be/U0nYVjwt3aY",
            title: "3D product design Mudo",
            span: "full",
          },
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
            media:
              "/assets/Case studies/Mudo/AI visual assets for display1.webp",
            title: "AI visual assets for display1",
            span: "half",
          },
          {
            media:
              "/assets/Case studies/Mudo/AI visual assets for display2.webp",
            title: "AI visual assets for display2",
            span: "half",
          },
        ],
      },
      {
        thecase: "Brand website",
        theopportunity:
          "To design and develop the brand's official website along with its ecommerce strategy.",
        whatwedelivered:
          "We delivered a modern and minimalist, technically optimised website alongside its copy and curated product visuals.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/Mudo/Mudo Web.mp4",
            title: "Mudo website",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "sterling",
    brand: "Sterling",
    cardImage: "/assets/Case studies/Sterling/Sterling.webp",
    cardDescription:
      "Helping the brand create patient experience, through visual communications.",
    industries: ["Healthcare"],
    intro:
      "One brand. Every facility. Creating communication that goes beyond just care.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Sterling/Sterling_Logo_Animation.mp4",
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
            title: "Brand campaign design 1",
            span: "half",
          },
          {
            media: "/assets/Case studies/Sterling/Brand campaign design 2.webp",
            title: "Brand campaign design 2",
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
            media:
              "https://youtu.be/LBcVT0UhsG4",
            title: "Advertisement concepts 1",
            span: "full",
          },
          {
            media:
              "https://youtu.be/PAzwYo496a4",
            title: "Advertisement concepts 2",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "cerc",
    brand: "CERC",
    cardImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/CERC.mp4",
    cardDescription:
      "Harnessing the power of visual storytelling in spreading awareness among children.",
    industries: ["Consumer Services", "Research/Advocacy"],
    intro:
      "Harnessing the power of visual storytelling in spreading awareness among children.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/CERC/CERC_Logo_Animation.mp4",
    cases: [
      {
        thecase: "AI-powered Educational Videos",
        theopportunity:
          "Creation of a power-packed visual communication campaign of 100+ videos covering 5+ domains.",
        whatwedelivered:
          "AI-visual strategy, scripts and storyboards, character design, visual direction, AI-powered short film production.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://youtu.be/YuIcr6e7jFk",
            title: "CERC 1",
            span: "full",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/CERC/CERC1.1.mp4",
            title: "CERC1.1",
            span: "half",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/CERC/CERC_1.2.mp4",
            title: "CERC 1.2",
            span: "half",
          },
          {
            media:
              "https://youtu.be/i1hZi9wN5uo",
            title: "CERC 2",
            span: "full",
          },
        ],
      },
    ],
  },
  {
    slug: "dunes-college",
    brand: "Dunes College",
    cardImage: "/assets/Case studies/Dunes/Web/Dunes_logo.webp",
    cardDescription:
      "Laying the foundation of a new vision, a new brand in the field of modern education.",
    industries: ["Educations"],
    intro:
      "Laying the foundation of a new vision, a new brand in the field of modern education.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Dunes+College/Dunes+College+Logo.mp4",
    cases: [
      {
        thecase: "Brand foundation design",
        theopportunity:
          "Brand discovery followed by full-scale brand identity design.",
        whatwedelivered:
          "Deep-researched brand profile, brand identity system, visual assets and voice.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/Dunes/Web/DUNES 2.webp",
            title: "DUNES 2",
            span: "full",
          },
        ],
      },
      {
        thecase: "Print and digital design strategy",
        theopportunity:
          "Creative print and digital designs for the launch of the institution.",
        whatwedelivered:
          "Content and visual direction for brochures and magazines, outdoor and internal communication design.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media: "/assets/Case studies/Dunes/Web/Dunes.webp",
            title: "Dunes",
            span: "half",
          },
          {
            media: "/assets/Case studies/Dunes/Web/Dunes3.webp",
            title: "Dunes3",
            span: "half",
          },
        ],
      },
    ],
  },
  {
    slug: "verity",
    brand: "Verity",
    cardImage: "/assets/Case studies/Verity/Verity.webp",
    cardDescription: "Building a virtual world with the three dimensions.",
    industries: ["Consumer Durables"],
    intro: "Building a virtual world with the three dimensions.",
    heroImage:
      "https://cdn.orglife.co.in/orglife_website/Case+Studies/Verity/Verity_Log.mp4",
    cases: [
      {
        thecase: "3D product designs and SOPs",
        theopportunity:
          "To develop advanced 3D designs and animated functions and features for the entire range of products.",
        whatwedelivered: "High-precision product 3D models.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://youtu.be/95W5Qb97rx8",
            title: "3D product design and SOP animation",
            span: "full",
          },
        ],
      },
      {
        thecase: "3D ad videos and visual assets",
        theopportunity:
          "To develop ad films with advanced 3D designs for the complete range of electronic products and peripherals.",
        whatwedelivered:
          "High-precision product 3D model advertisements with animated demonstration of features, for promotions and cataloguing.",
        layout: "grid",
        // TODO: swap for this case's real assets — 2 small images.
        gallery: [
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/Verity/3.mp4",
            title: "3D product advertisement film",
            span: "half",
          },
          {
            media:
              "https://cdn.orglife.co.in/orglife_website/Case+Studies/Verity/4.mp4",
            title: "3D feature demonstration film",
            span: "half",
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
