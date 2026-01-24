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
      title: "Enchanted Expo",
      images: [
        ["/images/demo1.webp"],
        ["/images/demo1.webp", "/images/demo1.webp"],
      ],
      year: "2025",
      genre: "Fantasy",
      location: "Mehdi Nawaz Jung Hall: Ahmedabad",
    },
    {
      title: "Enchanted Expo",
      images: [
        ["/images/demo1.webp"],
        ["/images/demo1.webp", "/images/demo1.webp"],
      ],
      year: "2025",
      genre: "Fantasy",
      location: "Mehdi Nawaz Jung Hall: Ahmedabad",
    },
    {
      title: "Enchanted Expo",
      images: [
        ["/images/demo1.webp", "/images/demo1.webp"],
        ["/images/demo1.webp", "/images/demo1.webp"],
        ["/images/demo1.webp"],
      ],
      year: "2025",
      genre: "Fantasy",
      location: "Mehdi Nawaz Jung Hall: Ahmedabad",
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
        "/images/demo1.webp",
        "/images/demo1.webp",
        "/images/demo1.webp",
        "/images/demo1.webp",
        "/images/demo1.webp",
        "/images/demo1.webp",
      ],
      year: "2025",
      genre: "Fantasy",
      location: "Mehdi Nawaz Jung Hall: Ahmedabad",
    },
  ],
};
