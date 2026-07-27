type event = {
  title: String;
  images: any;
  year: Date | String;
  genre: String;
  location: String;
  subtext: String;
};

type events = {
  Concerts: event[];
  Festivals: event[];
};

export const Events: events = {
  Concerts: [
    {
      title: "Harsh Gujral",
      images: [
        [
          "/assets/Home_page/Concerts/webp/Harsh_Gujral_1_xfmcvv.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Harsh_Gujral_2_wxeptm.webp",
          "/assets/Home_page/Concerts/webp/Harsh_Gujral_3_phwngn.webp",
        ],
      ],
      year: "2023",
      genre: "Stand-up Comedy Show",
      location: "Ahmedabad, Gujarat",
      subtext: "Video production x Orglife",
    },

    {
      title: "Shruti Pathak",
      images: [
        [
          "/assets/Home_page/Concerts/webp/Shruti_Pathak_1_uyxeiv.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Shruti_Pathak_2_igvzfv.webp",
          "/assets/Home_page/Concerts/webp/Shruti_Pathak_3_s4aorn.webp",
        ],
      ],
      year: "2023",
      genre: "Music Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Video production x Orglife",
    },
    {
      title: "Vishal and Shekhar",
      images: [
        [
          "/assets/Home_page/Concerts/webp/Vishal_Shekhar_1_modk6r.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Vishal_Shekhar_2_phlxlm.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Vishal_Shekhar_3_g3jzn6.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Vishal_Shekhar_4_cwkzoj.webp",
          "/assets/Home_page/Concerts/webp/Vishal_Shekhar_5_o5egk1.webp",
        ],
      ],
      year: "2023",
      genre: "Music Concert [Fundraiser]",
      location: "Ahmedabad, Gujarat",
      subtext: "Video production x Orglife",
    },

    {
      title: "Maati Baani",
      images: [
        [
          "/assets/Home_page/Concerts/webp/Maati_Baani_1_fx3mf2.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Maati_Baani_2_q7bmie.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Maati_Baani_3_yyr25o.webp",
          "/assets/Home_page/Concerts/webp/Maati_Baani_4_zjbox6.webp",
        ],
      ],
      year: "2023",
      genre: "Contemporary/ Folk Music Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Video production x Orglife",
    },

    {
      title: "Gurleen Pannu",
      images: [
        [
          "/assets/Home_page/Concerts/webp/Gurleen_Pannu_1_jfrbxa.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Gurleen_Pannu_2_pcgn1f.webp",
        ],
      ],
      year: "2023",
      genre: "Stand-up Comedy Show",
      location: "Ahmedabad, Gujarat",
      subtext: "Video production x Orglife",
    },

    {
      title: "Big Ban Theory",
      images: [
        [
          "/assets/Home_page/Concerts/webp/Big_Ban_Theory_1_zt0fsg.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Big_Ban_Theory_2_tl2nqp.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Big_Ban_Theory_3_qrrywx.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/Big_Ban_Theory_4_wje86t.webp",
        ],
      ],
      year: "2023",
      genre: "Rock Concert",
      location: "KLFF, Ahmedabad, Gujarat",
      subtext: "Video production x Orglife",
    },

    {
      title: "The Local Train",
      images: [
        [
          "/assets/Home_page/Concerts/webp/1.11.jpg_glqrvm.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/1.12.jpg_rx5zdf.webp",
          "/assets/Home_page/Concerts/webp/1.13.jpg_tuhe8n.webp",
        ],
      ],
      year: "2020",
      genre: "Rock Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management",
    },
    {
      title: "Ritviz",
      images: [
        [
          "/assets/Home_page/Concerts/webp/1.22.jpg_olymwx.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/1.23.jpg_cvkntj.webp",
          "/assets/Home_page/Concerts/webp/1.42.jpg_mjkpbj.webp",
        ],
      ],
      year: "2020",
      genre: "Electronic Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management",
    },
    // {
    //   title: "Houdini",
    //   images: [
    //     [
    //       "/assets/Home_page/Concerts/webp/Houdini_1_qzqcmw.webp",
    //       "/assets/Home_page/Concerts/webp/Houdini_2_xufj1t.webp",
    //     ],
    //     [
    //       "/assets/Home_page/Concerts/webp/Houdini_3_cbxxxe.webp",
    //     ],
    //   ],
    //   year: "2020",
    //   genre: "Electronic/ Techno Concert",
    //   location: "Ahmedabad, Gujarat",
    //   subtext: "Event Concept & Management",
    // },
    // {
    //   title: "Ana Lilia + Flymeon + Lucas Firtzer",
    //   images: [
    //     [
    //       "/assets/Home_page/Concerts/webp/Ana_Lilia_1_l2sxr7.webp",
    //     ],
    //     [
    //       "/assets/Home_page/Concerts/webp/Ana_Lilia_2_mjkpbj.webp",
    //       "/assets/Home_page/Concerts/webp/Ana_Lilia_3_xmj45d.webp",
    //     ],
    //   ],
    //   year: "2024",
    //   genre: "Electronic/ Techno Concert",
    //   location: "Bengaluru",
    //   subtext: "Event Concept & Management",
    // },
    {
      title: "Divine",
      images: [
        [
          "/assets/Home_page/Concerts/webp/1.51.jpg_d5781p.webp",
        ],
        [
          "/assets/Home_page/Concerts/webp/1.52.jpg_tzqngh.webp",
        ],
      ],
      year: "2019",
      genre: "Bollywood Music Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management",
    },
  ],

  Festivals: [
    {
      title: "Jasmine Sandlas Live",
      images: [
        [
          "/assets/Home_page/Festivals/webp/Jasmine_Sandlas_Live1_qpuxmp.webp",
        ],
        [
          "/assets/Home_page/Festivals/webp/Jasmine_Sandlas_Live_2_rf1xll.webp",
        ],
      ],
      year: "2026",
      genre: "Music Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management",
    },
    {
      title: "Sheri Circle Garba",
      images: [
        [
          "/assets/Home_page/Festivals/webp/Sheri_Circle_Garba_1_ooi9jq.webp",
        ],
        [
          "/assets/Home_page/Festivals/webp/Sheri_Circle_Garba_2_rqe9tz.webp",
        ],
        [
          "/assets/Home_page/Festivals/webp/Sheri_Circle_Garba_3_me5xoq.webp",
        ],
        [
          "/assets/Home_page/Festivals/webp/Sheri_Circle_Garba_4_norpio.webp",
        ],
        [
          "/assets/Home_page/Festivals/webp/Sheri_Circle_Garba_5_gva1a4.webp",
        ],
      ],
      year: "2025",
      genre: "Navratri Garba Fest",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management",
    },
  ],
};
