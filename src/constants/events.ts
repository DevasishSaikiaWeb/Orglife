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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989391/Harsh_Gujral_1_xfmcvv.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989363/Harsh_Gujral_2_wxeptm.png",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989364/Harsh_Gujral_3_phwngn.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989314/Shruti_Pathak_1_uyxeiv.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989303/Shruti_Pathak_2_igvzfv.png",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989332/Shruti_Pathak_3_s4aorn.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989343/Vishal_Shekhar_1_modk6r.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989327/Vishal_Shekhar_2_phlxlm.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989325/Vishal_Shekhar_3_g3jzn6.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989334/Vishal_Shekhar_4_cwkzoj.png",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989346/Vishal_Shekhar_5_o5egk1.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989381/Maati_Baani_1_fx3mf2.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989384/Maati_Baani_2_q7bmie.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989344/Maati_Baani_3_yyr25o.png",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770989343/Maati_Baani_4_zjbox6.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770990320/Gurleen_Pannu_1_jfrbxa.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770990298/Gurleen_Pannu_2_pcgn1f.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770991335/Big_Ban_Theory_1_zt0fsg.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770991523/Big_Ban_Theory_2_tl2nqp.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770991499/Big_Ban_Theory_3_qrrywx.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770991276/Big_Ban_Theory_4_wje86t.png",
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
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770641949/1.11.jpg_glqrvm.jpg",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770641912/1.jpg_kutphr.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770641910/1.13.jpg_tuhe8n.jpg",
        ],
      ],
      year: "2020",
      genre: "Rock Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
    {
      title: "Ritviz",
      images: [
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770645855/1.211.jpg_vsmyac.jpg",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770645799/1.22.jpg_olymwx.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770645824/1.23.jpg_cvkntj.jpg",
        ],
      ],
      year: "2020",
      genre: "Electronic Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
    {
      title: "Houdini",
      images: [
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770646473/1.32.jpg_qzqcmw.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770646461/1.33.jpg_xufj1t.jpg",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770646455/1.31.jpg_cbxxxe.jpg",
        ],
      ],
      year: "2020",
      genre: "Electronic/ Techno Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
    {
      title: "Ana Lilia + Flymeon + Lucas Firtzer",
      images: [
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770646790/1.41.jpg_l2sxr7.jpg",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770646790/1.42.jpg_mjkpbj.jpg",
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770646794/1.43.jpg_xmj45d.jpg",
        ],
      ],
      year: "2024",
      genre: "Electronic/ Techno Concert",
      location: "Bengaluru",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
    {
      title: "Divine",
      images: [
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770647262/1.51.jpg_d5781p.jpg",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1770647239/1.52.jpg_tzqngh.jpg",
        ],
      ],
      year: "2019",
      genre: "Bollywood Music Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
  ],

  Festivals: [
    {
      title: "Jasmine Sandlas Live",
      images: [
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161661/Jasmine_Sandlas_Live1_qpuxmp.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161663/Jasmine_Sandlas_Live_2_rf1xll.png",
        ],
      ],
      year: "2026",
      genre: "Music Concert",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
    {
      title: "Sheri Circle Garba",
      images: [
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161667/Sheri_Circle_Garba_1_ooi9jq.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161667/Sheri_Circle_Garba_2_rqe9tz.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161656/Sheri_Circle_Garba_3_me5xoq.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161655/Sheri_Circle_Garba_4_norpio.png",
        ],
        [
          "https://res.cloudinary.com/dpblcamaw/image/upload/v1771161662/Sheri_Circle_Garba_5_gva1a4.png",
        ],
      ],
      year: "2025",
      genre: "Navratri Garba Fest",
      location: "Ahmedabad, Gujarat",
      subtext: "Event Concept & Management x Why Not Entertainment",
    },
  ],
};
