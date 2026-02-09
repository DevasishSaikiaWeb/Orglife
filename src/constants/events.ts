type event = {
  title: String;
  images: any;
  year: Date | String;
  genre: String;
  location: String;
};

type events = {
  Concerts: event[];
  Festivals: event[];
};

export const Events: events = {
  Concerts: [
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
    },
    {
      title: "Enchanted Expo",
      images: [
        ["/images/demo1.webp", "/images/demo1.webp"],
        ["/images/demo1.webp", "/images/demo1.webp"],
      ],
      year: "2025",
      genre: "Fantasy",
      location: "Mehdi Nawaz Jung Hall: Ahmedabad",
    },
  ],

  Festivals: [
    {
      title: "Enchanted Expo",
      images: [
        ["/images/demo1.webp"],

        ["/images/demo1.webp", "/images/demo1.webp"],
        ["/images/demo1.webp"],
      ],
      year: "2025",
      genre: "Fantasy",
      location: "Mehdi Nawaz Jung Hall: Ahmedabad",
    },
  ],
};
