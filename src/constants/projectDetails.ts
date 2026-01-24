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
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740376/Sswai_Logo_Animation_kfnfla.mp4",
    main_content: {
      paragraphs: [
        "We designed and developed a high-performance Shopify website for Sswai Lifestyle that brought the brand to life online. Powered by AI-driven model generation and product photography, our approach enabled visually rich presentations and editorial-style shoots at scale — ensuring consistency, speed and cost efficiency. The result was a seamless, conversion-focused e-commerce experience where storytelling, aesthetics and technology came together to elevate the brand’s digital storefront.",
      ],
    },

    sections: [
      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766740410/IMAGE_3_-_FULL_SCREEN_-_Mockup_of_laptop_bmtowj.jpg",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766740422/Card_vdkw5a.jpg",
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740436/IMAGE_5_-_HALF_SCREEN_-_Mockup_of_phone_x_Blank_template_gwgg50.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740526/Image_9_sswai_mascots_2_tv4raf.mp4",

        half_image: [
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740520/Image_8_AI_Model_images_slideshow_video_bd7rfs.mp4",
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740515/Image_7_AI_Model_video_2_jznati.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740501/Image_6_tablet-ipad_screen_x_blog_h2quvu.mp4",
      },
    ],
  },

  "Indian Army": {
    title: "Indian Army",
    subTitle:
      "Through insight-led storytelling, cinematic visuals and purpose-driven narratives, we translate courage, sacrifice and service into compelling content across platforms for the Indian Army — strengthening public trust, national pride and long-term legacy building.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766739436/1indian_army_d2st3h.mp4",
    main_content: {
      paragraphs: [
        "Our digital story archiving solutions systematically preserve historical data, missions and defining incidents, transforming them into accessible, future-ready narratives that safeguard the Army’s heritage while inspiring generations to come.",
      ],
    },

    sections: [
      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1767076974/oMAGE_2_r1luqp.jpg",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766739579/IMAGE_3._TRAINING_WORKSHOP_hkoqrc.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766739583/IMAGE_4._PHOTOGRAPHY_PROJECT_c9f8rw.png",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766739588/IMAGE_5._VIDEOGRAPHY_PROJECT_tmdylx.png",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766739610/IMAGE_6_Sanyukt_vimochan_wihxzn.mp4",
        second_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766739718/IMAGE_7._LIVE_EVENT_PHOTOGRAPHY_mhxorc.png",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766739740/IMAGE_8._LIVE_EVENT_VIDEOGRAPHY_xxuj7e.png",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1767077377/IMAGE_9_Capt_yqqh6g.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738860/2_3D_ANIMATION_SEQUENCE_OF_LOGO_rfuxnf.mp4",
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738886/3_MASCOT_CHARACTER_MODELLING_IMAGE_pziyjb.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738876/4_Phone_CGI_Mockup_2_gzi073.mp4",
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738902/5_SIS_Laptop_CGI_Mockup_zxtjaz.mp4",
        ],
      },
    ],
  },

  "Karnavati University": {
    title: "Karnavati University",
    subTitle:
      "We blend strategic thinking with evocative storytelling, design and content for Karnavati University and its constituent colleges to help them articulate their purpose, celebrate achievements and build meaningful connections with students, faculty, alumni, and the world — across every platform and touchpoint.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766729612/Image_1KU_r7e3sk.mp4",
    main_content: {
      title: "Real Voices. Real Stories. Real Campaigns.",
      paragraphs: [
        "We craft immersive visual themes and narrative-driven screenplays that bring the University’s stories to life. From concept to execution, our video production sequences blend cinematic storytelling with purposeful messaging — transforming campaigns into engaging experiences.",
      ],
    },

    sections: [
      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766730595/Image_2_Saloni_Mehta_iokydf.mp4",
      },
      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766730830/image_3_UIFM_z307sd.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766730865/IMAGE_4_-_HALF_SCREEN_-_Mockup_of_PHONE_x_REEL_YELLOW_e9itj9.mp4",
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766731538/IMAGE_5_-_HALF_SCREEN_-_Mockup_of_PHONE_x_REEL_PARIS_F_WEEK_k504st.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766732990/IMAGE_6_-_HALF_SCREEN_-_Mockup_of_PHONE_x_REEL_USCI_20MB_c66ws2.mp4",
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766733052/IMAGE_7_-_HALF_SCREEN_-_Mockup_of_PHONE_x_REEL_KUAT_14MB_bvtk0c.mp4",
        ],
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766733108/Image_8_ADW_final_video90MB_tcjtp4.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766733258/Image_9_Satyajit_Ray_HR90MB_ixgwc4.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733273/IMAGE_10_-_HALF_SCREEN_-_IMAGE_OF_BROCHURE_MOCKUP_3_mgqurk.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733420/Image_11_KU_crwqvf.jpg",
        ],
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766733469/iamge_12_ANI_DOI_zlxjzf.mp4",
      },

      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766733483/Image_13_ADW_Wireframe_yaxj5u.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733499/IMAGE_14-_FULL_SCREEN_-_TEDX_IMAGE_yujpiw.jpg",
        ],
        second_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733493/IMAGE_15_-_FULL_SCREEN_-_KLFF_IMAGE_s8m5v8.jpg",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733502/IMAGE_16_-_FULL_SCREEN_-_YP_IMAGE_nuzl9l.jpg",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733506/IMAGE_17-_FULL_SCREEN_-_KUGM_IMAGE_j2kakt.jpg",
        ],
        second_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766733509/IMAGE_18-_FULL_SCREEN_-_EDGE_IMAGE_lwv0cx.jpg",
      },
    ],
  },

  "Ministry Of External Affairs": {
    title: "Ministry Of External Affairs",
    subTitle: "This is a sample subtitle for the work details page.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740082/MEA_LOGO_ANIMATION_LOOP_c4qio7.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766740216/2_MEA_Video_d5tgog.mp4",
        second_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1767073167/Image_5_IDM_itthxf.jpg",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766740246/Image_3_Laptop_ho3aae.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766740266/Image_4_Phone_gejto5.jpg",
        ],
        content: [
          {
            title: "Strategic Brand Development for Humanitarian Impact",
            paragraphs: [
              "Despite operating for a decade and delivering consistent results, Instant Aid faced a fundamental challenge: their vital work remained largely invisible. Operating under the radar meant missing critical opportunities for expansion precisely when credibility determines partnership potential.",
              "Government officials and major supporters require proof of legitimacy before committing resources. Without established credibility markers, even the most effective organisations struggle to secure the partnerships that amplify their reach and deepen their impact.",
              "When Instant Aid approached us, they carried the weight of a previous design process that had fallen short of expectations. Their website, brand materials, and social presence felt fragmented. This created a jarring disconnect between their life-saving capabilities and how they presented to the world. This misalignment left potential partners questioning their credibility, despite their proven track record of effective, evidence-based aid delivery.",
            ],
          },
        ],
      },
      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766740280/Image_6_banner_kj8j2g.jpg",
      },
    ],
  },

  "Group Landmark": {
    title: "Group Landmark",
    subTitle: "This is a sample subtitle for the work details page.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766737584/Image_1_Logo_animation_t2bw89.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766737675/Image_2_Farmer_s_Market_by_Volkswagen_Ahmedabad_720p_25fps_H264-128kbit_AAC_aytpgk.mp4",
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766737846/Image_3_Grishma_Final-_kq2ocx.mp4",
        content: [
          {
            title: "Strategic Brand Development for Humanitarian Impact",
            paragraphs: [
              "Despite operating for a decade and delivering consistent results, Instant Aid faced a fundamental challenge: their vital work remained largely invisible. Operating under the radar meant missing critical opportunities for expansion precisely when credibility determines partnership potential.",
              "Government officials and major supporters require proof of legitimacy before committing resources. Without established credibility markers, even the most effective organisations struggle to secure the partnerships that amplify their reach and deepen their impact.",
              "When Instant Aid approached us, they carried the weight of a previous design process that had fallen short of expectations. Their website, brand materials, and social presence felt fragmented. This created a jarring disconnect between their life-saving capabilities and how they presented to the world. This misalignment left potential partners questioning their credibility, despite their proven track record of effective, evidence-based aid delivery.",
            ],
          },
        ],
      },
      {
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738303/Image_6_Festival_greetings_x_Halloween__2024_ikr9ts.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766737861/Image_4_awesome_phone_mockup_u02kqi.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766737901/Image_5_Phone_iwxvj3.jpg",
        ],
        content: [
          {
            title: "Strategic Brand Development for Humanitarian Impact",
            paragraphs: [
              "Despite operating for a decade and delivering consistent results, Instant Aid faced a fundamental challenge: their vital work remained largely invisible. Operating under the radar meant missing critical opportunities for expansion precisely when credibility determines partnership potential.",
              "Government officials and major supporters require proof of legitimacy before committing resources. Without established credibility markers, even the most effective organisations struggle to secure the partnerships that amplify their reach and deepen their impact.",
              "When Instant Aid approached us, they carried the weight of a previous design process that had fallen short of expectations. Their website, brand materials, and social presence felt fragmented. This created a jarring disconnect between their life-saving capabilities and how they presented to the world. This misalignment left potential partners questioning their credibility, despite their proven track record of effective, evidence-based aid delivery.",
            ],
          },
        ],
      },
      {
        main_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766738664/image_7_Festival_greetings_and_offers_x_Diwali_2024_unbfpx.mp4",
      },
    ],
  },
  Verity: {
    title: "Verity",
    subTitle: "This is a sample subtitle for the work details page.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766840611/Verity_Logo_pdydei.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1767073439/IMAGE_2-_kggem3.mp4",

        half_image: [
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1767073772/IMAGE_3_PRODUCT_VIDEO_de8mms.mp4",
        ],
      },
      {
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1767074658/Image_6_Hedphone_mp8sj5.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1767074236/Verity_1_etvqb4.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1767074258/Verity_2_a0bgtw.jpg",
        ],
      },
      {
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1767074534/Image_7_phone_reel_jlwqex.mp4",
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766840698/Image_8_Phone_Reel_ybuhad.mp4",
        ],
      },
    ],
  },
  Wantasanta: {
    title: "Wantasanta",
    subTitle: "This is a sample subtitle for the work details page.",
    main_image:
      "https://res.cloudinary.com/dpblcamaw/video/upload/v1766840041/Wanta_Santa_L_ta52mr.mp4",
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
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766840340/IMAGE_2_-_EARTH_TO_MARS_91_s3bwxi.mp4",

        half_image: [
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766840508/Image_3_Mangal_to_erth_92_cdgjtl.mp4",
        ],
      },
      {
        second_image:
          "https://res.cloudinary.com/dpblcamaw/video/upload/v1766840552/IMAGE_7_-_FULL_SCREEN_-_ELLI_THE_3D_CHARACTER_xjkuc2.mp4",
        half_image: [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766840527/Image_4_Winter_wonderland_ngprnf.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1766840539/Image_5_Astronaut_moy3bb.jpg",
        ],
      },
      ,
    ],
  },
};
