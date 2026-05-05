import type { Locale } from "./dictionaries";

export type EventItem = {
  slug: string;
  date: string;
  city: string;
  image: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const events: EventItem[] = [
  {
    slug: "tabara-de-vara",
    date: "2026-06-14",
    city: "Brașov",
    image: "/gallery/01.jpeg",
    title: {
      ro: "Tabără de vară pentru copii",
      en: "Summer camp for children",
    },
    description: {
      ro: "O zi întreagă de jocuri în natură, ateliere creative și prieteni noi. Transport și mâncare incluse.",
      en: "A full day of outdoor games, creative workshops and new friends. Transport and meals included.",
    },
  },
  {
    slug: "atelier-pictura",
    date: "2026-05-21",
    city: "București",
    image: "/gallery/02.jpeg",
    title: { ro: "Atelier de pictură", en: "Painting workshop" },
    description: {
      ro: "Atelier de pictură adaptat, condus de artiști voluntari. Toate materialele oferite gratuit.",
      en: "Adaptive painting workshop led by volunteer artists. All supplies provided free of charge.",
    },
  },
  {
    slug: "concert-de-craciun",
    date: "2026-12-18",
    city: "Cluj-Napoca",
    image: "/gallery/03.jpeg",
    title: { ro: "Concert de Crăciun", en: "Christmas concert" },
    description: {
      ro: "Un concert magic cu colinde, cadouri și surprize pentru toți copiii.",
      en: "A magical concert with carols, gifts and surprises for every child.",
    },
  },
];
