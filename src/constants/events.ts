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
    // {
    //   title: "Enchanted Expo",
    //   images: [
    //     ["/images/demo1.webp"],
    //     ["/images/demo1.webp", "/images/demo1.webp"],
    //   ],
    //   year: "2025",
    //   genre: "Fantasy",
    //   location: "Mehdi Nawaz Jung Hall: Ahmedabad",
    // },
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
