type Project = {
  img: string;
  title: string;
  description: string;
  category: string[];
  // Slug of the matching case study (/case-studies/<urlSlug>), when one exists.
  urlSlug?: string;
};

// Page details
export const PAGE_DETAILS_TITLE = "Let’s team up for some magic";
export const PAGE_DETAILS_SUBTITLE =
  "Orglife Studio has been a part of the journeys of many brands - with some, during their initial start-up stage while with others in their quest for expansion.";

export const CURRENT_PROJECTS: Project[] = [
  {
    img: "assets/Home_page/Exploring a new world of creative possibilities/Sswai.mp4",
    title: "SSWAI",
    description:
      "From brand identity design concepts to ingenious brand communications, we are empowering this young and dynamic fashion brand.",
    category: ["Fashion and Lifestyle"],
    urlSlug: "sswai",
  },
  {
    img: "assets/Home_page/Exploring a new world of creative possibilities/Army.mp4",
    title: "Indian Army",
    description:
      "Our engagement covers multiple visual communication assignments for the Indian Army across domains and geographies.",
    category: ["Indian Defence Forces"],
    urlSlug: "indian-army",
  },
  {
    img: "assets/Home_page/Exploring a new world of creative possibilities/KU.mp4",
    title: "Karnavati University",
    description:
      "Brand narratives, compelling visual communications and event theme designs, we’ve loved working with this brand, for half a decade now.",
    category: ["Education"],
    urlSlug: "ku",
  },
  // {
  //   img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077591/Verity_rr4xrn.mp4",
  //   title: "Verity",
  //   description:
  //     "We transformed the way 3D models and animated visual content could lead their digital communication and advertising needs.",
  //   category: ["Consumer Durables", "Electronics"],
  // },
];

// export const PROJECTS: Project[] = [
//   {
//     img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077583/WantaSanta_zvqexf.mp4",
//     title: "Wantasanta",
//     description:
//       "We teamed up with the brand to create never-before magic in the field of immersive experience.",
//     category: ["Amusement", "Event Management"],
//   },
//   {
//     img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077593/Group_Landmark_f34ymi.mp4",
//     title: "Group Landmark",
//     description:
//       "Crafted creative concepts and visual content for impactful communications across multiple platforms.",
//     category: ["Automobile"],
//   },
//   {
//     img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077582/MEA_umrxhk.mp4",
//     title: "Ministry Of External Affairs",
//     description:
//       "Multiple projects ranging from design of a series of ebooks to Int’l event communications.",
//     category: ["Government"],
//   },
//   {
//     img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077584/SiS_qy9rdp.mp4",
//     title: "SIS Prep",
//     description:
//       "We brought its mascots to life - animated concepts that enhanced the brand’s visual identity immensely.",
//     category: ["Education"],
//   },
// ];

export const PROJECTS: Project[] = [
  {
    img: "/assets/Products/webp/AI_FILMS_-_WEBSITE.webp",
    title: "AI FILMS",
    description:
      "Our indigenous tech-stacks with their workflows and AI agents blend human creativity and artificial intelligence - to create never-before magic in the field of immersive cinematic experiences.",
    category: ["Films and Cinematic concepts"],
  },
  {
    img: "/assets/Products/webp/AI_AD_CAMPAIGNS_-_WEBSITE.webp",
    title: "AI AD CAMPAIGNS",
    description:
      "We help brands outpace traditional production limitations with multi-format AI storytelling concepts to deliver distinct visual assets that command immediate market attention and establish undeniable brand authority.",
    category: ["Brand Campaigns/ Advertisement"],
  },
  {
    img: "/assets/Products/webp/Ai_platform.webp",
    title: "AI BRAND PLATFORMS",
    description:
      "Industry research, brand strategy, content and communication design, marketing campaigns – you name it and we have our tech solutions, AI agents and platforms ready for you.",
    category: ["Technology solutions/ AI Applications"],
  },
  // {
  //   img: "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077584/SiS_qy9rdp.mp4",
  //   title: "SIS Prep",
  //   description:
  //     "We brought its mascots to life - animated concepts that enhanced the brand’s visual identity immensely.",
  //   category: ["Education"],
  // },
];

//Portfolio Images & Video
export const OTHER_PROJECTS = [
  [
    {
      image: "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795229/IMAGE_2-_kggem3_ke5tke.mp4",
      title: "Army AI Video",
    },
  ],
  [
    {
      image: "/assets/Projects/2.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/3.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/4.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/5.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/6.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/7.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/9.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/10.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/11.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/12.webp",
      title: "Project 1",
    },
  ],

  [
    {
      image: "/assets/Projects/13.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/14.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/15.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/16.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/17.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/18.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/19.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/20.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/21.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/22.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795237/Army_Ai_Video_fgivpc.mp4",
      title: "Army AI Video",
    },
  ],
  [
    {
      image: "/assets/Projects/23.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/24.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/25.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/26.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/27.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/28.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/29.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/30.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/31.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/32.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/33.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/34.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/35.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/36.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/37.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/38.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/39.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/40.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/41.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/42.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/43.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/44.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/45.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/46.webp",
      title: "Project 1",
    },
  ],
  [
    {
      image: "/assets/Projects/47.webp",
      title: "Project 1",
    },
    {
      image: "/assets/Projects/48.webp",
      title: "Project 1",
    },
  ],
];
