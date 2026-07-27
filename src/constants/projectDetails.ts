export type Project_Details = {
  title: string;
  subTitle: string;
  main_image: string;
  main_content: {
    title: string;
    paragraphs?: string[];
  };
  sections?: {
    main_image?: string;
    second_image?: string;
    half_image?: string[];
    content?: {
      title?: string;
      paragraphs?: string[];
    }[];
  }[];
};

export const PROJECT_DETAILS = {
  SSWAI: {
    title: "SSWAI",
    subTitle:
      "From defining the brand’s core story and visual identity to shaping collections, campaigns, digital presence and consumer experiences, our 360-degree approach ensures every touchpoint speaks one cohesive language.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795221/WEBSITE_HOMEPAGE_1ST_VIDEO_fw32g7.mp4",
    main_content: {
      paragraphs: [
        "We designed and developed a high-performance Shopify website for Sswai Lifestyle that brought the brand to life online. Powered by AI-driven model generation and product photography, our approach enabled visually rich presentations and editorial-style shoots at scale — ensuring consistency, speed and cost efficiency. The result was a seamless, conversion-focused e-commerce experience where storytelling, aesthetics and technology came together to elevate the brand’s digital storefront.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/2.webp",
        half_image: [
          "/assets/Projects/3.webp",
          "/assets/Projects/4.webp",
        ],
        content: [
          {
            paragraphs: [
              "Our brand foundation design services gave the label a distinct, memorable presence rooted in its cultural essence. From logo systems and color palettes to typography, motifs and visual guidelines, we created assets that complemented the timeless yet contemporary essence of the brand —ensuring consistency across packaging, campaigns, digital platforms and retail touchpoints, while expressing the brand’s unique story and sensibility.",
            ],
          },
        ],
      },

      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795221/WEBSITE_HOMEPAGE_1ST_VIDEO_fw32g7.mp4",

        half_image: [
          "/assets/Projects/3.webp",
          "/assets/Projects/4.webp",
        ],
        content: [
          {
            paragraphs: [
              "Through thoughtfully crafted content, blogs and articles, we help Sswai Lifestyle articulate its philosophy, craftsmanship and cultural narratives. From trend-led stories and collection highlights to educational and editorial pieces, our content strategy builds credibility, drives engagement and strengthens emotional connections with audiences across digital and social platforms.",
            ],
          },
        ],
      },

      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795221/WEBSITE_HOMEPAGE_1ST_VIDEO_fw32g7.mp4",
      },
    ],
  },

  "Indian Army": {
    title: "Indian Army",
    subTitle:
      "Through insight-led storytelling, cinematic visuals and purpose-driven narratives, we translate courage, sacrifice and service into compelling content across platforms for the Indian Army — strengthening public trust, national pride and long-term legacy building.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795221/WEBSITE_HOMEPAGE_1ST_VIDEO_fw32g7.mp4",
    main_content: {
      paragraphs: [
        "Our digital story archiving solutions systematically preserve historical data, missions and defining incidents, transforming them into accessible, future-ready narratives that safeguard the Army’s heritage while inspiring generations to come.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/5.webp",
        half_image: [
          "/assets/Projects/6.webp",
        ],
        content: [
          {
            paragraphs: [
              "Our photography and videography services are designed to capture the Indian Army with accuracy, dignity and emotional depth. From on-ground operations and training exercises to ceremonial moments and human-interest stories, we produce cinematic, documentary-style visuals that reflect realism, discipline and bravery — ensuring every frame preserves the truth and spirit of service.",
            ],
          },
        ],
      },

      {
        main_image:
          "/assets/Projects/7.webp",
        half_image: [
          "/assets/Projects/8.webp",
        ],
        content: [
          {
            paragraphs: [
              "We offer comprehensive live-event coverage and high-impact video and photography services for national and international engagements of the Indian Army. From real-time documentation to post-event promotional films and dynamic real-time display content, we ensure every moment is captured and communicated with precision and scale. ",
            ],
          },
        ],
      },

      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1784795221/WEBSITE_HOMEPAGE_1ST_VIDEO_fw32g7.mp4",
        second_image:
          "/assets/Projects/2.webp",
        half_image: [
          "/assets/Projects/2.webp",
        ],
        content: [
          {
            paragraphs: [
              "We provide advanced strategic content and communication services that respectfully amplify the legacy, valor, and human stories of the Indian Army. Through our innovative AI-powered films — featured during the Hornbill Festival 2025 — we brought history, courage and national pride of gallantry award recipients to life in immersive and contemporary cinematic formats.",
            ],
          },
        ],
      },

      {
        main_image:
          "/assets/Projects/2.webp",
      },
    ],
  },

  "SIS Prep": {
    title: "SIS Prep",
    subTitle: "This is a sample subtitle for the work details page.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738830/1_SIS_PREP_LOGO_ANIMATION_LOOP_o0hhaa.mp4",
    main_content: {
      title: "Racing Against Time When Every Hour Matters",
      paragraphs: [
        "In the wake of a devastating earthquake, immediate action is crucial to save lives and provide relief to those affected. Our collaboration with a leading humanitarian organization focused on rapid response efforts, ensuring that aid reached the most vulnerable communities swiftly and efficiently.",
        "Through strategic brand development, we crafted a compelling narrative that highlighted the urgency of the situation and the organization's pivotal role in disaster response. By leveraging powerful storytelling and impactful visuals, we were able to convey the critical need for support and mobilize resources quickly.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/3.webp",
        second_image:
          "/assets/Projects/4.webp",
        half_image: [
          "/assets/Projects/5.webp",
          "/assets/Projects/6.webp",
        ],
      },
    ],
  },

  "Karnavati University": {
    title: "Karnavati University",
    subTitle:
      "We blend strategic thinking with evocative storytelling, design and content for Karnavati University and its constituent colleges to help them articulate their purpose, celebrate achievements and build meaningful connections with students, faculty, alumni, and the world — across every platform and touchpoint.",
    main_image:
      "/assets/Projects/7.webp",
    main_content: {
      title: "Real Voices. Real Stories. Real Campaigns.",
      paragraphs: [
        "We craft immersive visual themes and narrative-driven screenplays that bring the University’s stories to life. From concept to execution, our video production sequences blend cinematic storytelling with purposeful messaging — transforming campaigns into engaging experiences.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/8.webp",
      },
      {
        main_image:
          "/assets/Projects/9.webp",
        half_image: [
          "/assets/Projects/10.webp",
          "/assets/Projects/11.webp",
        ],
        content: [
          {
            title: "Motion-driven multi-media content to inspire action",
            paragraphs: [
              "Through motion-graphic videos, animated stories and visually striking engaging content, we amplify their brand communications with energy and creativity elevating the brand’s prestige online.",
            ],
          },
        ],
      },
      {
        half_image: [
          "/assets/Projects/12.webp",
          "/assets/Projects/13.webp",
        ],
        second_image:
          "/assets/Projects/14.webp",
        content: [
          {
            title:
              "From theme design to visual communication, every detail is designed to engage.",
            paragraphs: [
              "From the very first spark of a theme to a full-fledged visual communication strategy, we shape every aspect of the University’s brand narratives and IP-focused events.",
              "We develop a cohesive visual language that branches out to every touchpoint. From thematic frameworks that reflect the objectives and values to craft visual assets that speak across platforms, we structure the alignment of messaging to resonate with diverse audiences. Every campaign, asset and story is strategically mapped — ensuring consistency, impact and an unmistakable identity that positions the University’s events as frontrunners in their domains.",
            ],
          },
        ],
      },
      {
        main_image:
          "/assets/Projects/8.webp",
        half_image: [
          "/assets/Projects/10.webp",
          "/assets/Projects/11.webp",
        ],
        second_image:
          "/assets/Projects/12.webp",
      },

      {
        main_image:
          "/assets/Projects/8.webp",
        half_image: [
          "/assets/Projects/10.webp",
          "/assets/Projects/11.webp",
        ],
        second_image:
          "/assets/Projects/12.webp",
        content: [
          {
            title:
              "Every event is documented, every memory preserved – for the world.",
            paragraphs: [
              "We bring the University’s flagship events to life with a flair that’s anything but ordinary. From the creativity of Ahmedabad Design Week and the storytelling of Karnavati Literature & Film Festival, to the energy of the Youth Parliament of India and the vibrancy of Karnavati University Garba Mahotsav, our promotional content and highlight videos and films capture the spirit, excitement and uniqueness of every moment.",
            ],
          },
        ],
      },
      {
        main_image:
          "/assets/Projects/16.webp",
        half_image: [
          "/assets/Projects/17.webp",
        ],
        second_image:
          "/assets/Projects/18.webp",
      },
    ],
  },

  "Ministry Of External Affairs": {
    title: "Ministry Of External Affairs",
    subTitle:
      "We designed visuals and narratives that spoke diplomacy and national affairs in color and form. ",
    main_image:
      "/assets/Projects/19.webp",
    main_content: {
      title: "Adapting and innovating along with time.",
      paragraphs: [
        "Through thoughtful design and captivating content, we helped the Ministry communicate with clarity, impact, precision and elegance — making every message resonate on a national and global stage. It all started with the official ebook of the first-ever International Day of Yoga in 2015 titled ‘Celebrating the Journey to the Inner Self – International Day of Yoga’, followed by ‘A Trip to the Heart of Asia’ and ‘International Day of Yoga 2016’. A new concept for that time, the projects were challenging yet highly rewarding.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/20.webp",
        second_image:
          "/assets/Projects/21.webp",
        half_image: [
          "/assets/Projects/22.webp",
          "/assets/Projects/23.webp", 
        ],
        content: [
          {
            title: "Literature and communication packed as visual delight.",
            paragraphs: [
              "Projects like the Namami Gange Program and Swacchh Bharat Abhiyaan, under the India Development Foundation of Overseas Indians gave us the opportunity to create engaging visual communication concepts to align the Ministry’s efforts with the dynamics of overseas Indians willing to participate in nation-building initiatives.",
            ],
          },
        ],
      },
      {
        main_image:
          "/assets/Projects/24.webp",
      },
    ],
  },

  "Group Landmark": {
    title: "Group Landmark",
    subTitle:
      "We helped Group Landmark tell its story in multiple formats and across multiple global automobile brands that it represented. From creative communication strategies to everyday social content, we made sure every message reached its enthusiastic stakeholders across India.",
    main_image:
      "/assets/Projects/25.webp",
    main_content: {
      title: "We transformed ideas to marketable content.",
      paragraphs: [
        "We had been with the brand for close to half a decade, in every step of the way, bringing ideas to life through videos. From shaping event concepts to executing cinematic shoots and producing high-impact promotional videos, we ensured every frame told the right story to its audience. We have created content for brands like Volkswagen, Mercedes and Honda on Landmark’s behalf, and our work captured the energy, innovation and personality of each of them, creating content that connected with audiences and drove engagement across different media platforms.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/26.webp",
        second_image:
          "/assets/Projects/27.webp",
        content: [
          {
            title:
              "Keeping the brand vibrant and engaging across social media.",
            paragraphs: [
              "We helped the brand stay vibrant and connected on social media. From striking images to engaging motion graphics, and from everyday posts to festive greetings, we created content that captured attention and inspired audiences to communicate with the auto brands.",
            ],
          },
        ],
      },
      {
        second_image:
          "/assets/Projects/30.webp",
        half_image: [
          "/assets/Projects/28.webp",
          "/assets/Projects/29.webp",
        ],
        content: [
          {
            title: "Greeting audiences in unconventional ways.",
            paragraphs: [
              "We helped the brand, especially its Volkswagen dealerships, to ensure that they didn’t just wish on Diwali and Halloween. They celebrated in 3D. From twinkling lights and fireworks to a roaring Dracula and zombies, our animated efforts turned festive greeting into little spectacles.",
            ],
          },
        ],
      },
      {
        main_image:
          "/assets/Projects/31.webp",
      },
    ],
  },
  Verity: {
    title: "Verity",
    subTitle:
      "From realistic product visualizations to engaging animated video content, our services helped Verity showcase its gaming products and peripherals’ features, functionality and design innovation.",
    main_image:
      "/assets/Projects/32.webp",
    main_content: {
      title:
        "Beyond the Surface: Photoreal 3D models that engaged and inspired",
      paragraphs: [
        "We focused our efforts on end-to-end 3D product visualization that transformed electronic products into captivating digital experiences. From meticulous 3D modelling and photorealistic rendering to detailed texturing and dynamic animations, we brought every product to life with striking realism and precision. Our work powered their product demonstrations, display advertisements, social media content and digital campaigns, allowing Verity’s audiences to explore features, functionality, and design innovations in an immersive mode. By blending technical accuracy with creative storytelling, we helped it launch a range of 10+ products",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/33.webp",

        half_image: [
          "/assets/Projects/34.webp",
        ],
      },
      {
        second_image:
          "/assets/Projects/35.webp",
        half_image: [
          "/assets/Projects/36.webp",
          "/assets/Projects/37.webp",
        ],
      },
      {
        half_image: [
          "/assets/Projects/38.webp",
          "/assets/Projects/39.webp",
        ],
      },
    ],
  },
  Wantasanta: {
    title: "Wantasanta",
    subTitle: "This is a sample subtitle for the work details page.",
    main_image:
      "/assets/Projects/40.webp",
    main_content: {
      title: "Racing Against Time When Every Hour Matters",
      paragraphs: [
        "In the wake of a devastating earthquake, immediate action is crucial to save lives and provide relief to those affected. Our collaboration with a leading humanitarian organization focused on rapid response efforts, ensuring that aid reached the most vulnerable communities swiftly and efficiently.",
        "Through strategic brand development, we crafted a compelling narrative that highlighted the urgency of the situation and the organization's pivotal role in disaster response. By leveraging powerful storytelling and impactful visuals, we were able to convey the critical need for support and mobilize resources quickly.",
      ],
    },

    sections: [
      {
        main_image:
          "/assets/Projects/41.webp",

        half_image: [
          "/assets/Projects/42.webp",
        ],
      },
      {
        second_image:
          "/assets/Projects/43.webp",
        half_image: [
          "/assets/Projects/44.webp",
          "/assets/Projects/45.webp",
        ],
      },
      ,
    ],
  },
};
