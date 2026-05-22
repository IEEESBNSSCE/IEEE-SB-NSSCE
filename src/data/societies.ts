import { Society } from "./types";

export const societies: Society[] = [
  {
    id: "cs",
    slug: "computer-society",
    name: "IEEE Computer Society",
    shortName: "CS",
    description: "Empowering computer science professionals and students to drive the next generation of computing technology.",
    vision: "To be the leading provider of technical information, community services, and personalized services to the world's computing professionals.",
    mission: "To advance the theory, practice, and application of computer and information processing science and technology.",
    accentColor: "bg-orange-500",
    logo: "/societies/cs-logo.svg",
  },
  {
    id: "pes",
    slug: "power-energy-society",
    name: "IEEE Power & Energy Society",
    shortName: "PES",
    description: "Shaping the future of electric power and energy by sharing the latest technological developments.",
    vision: "To be the leading provider of scientific and engineering information on electric power and energy for the betterment of society.",
    mission: "To be the leading provider of scientific and engineering information on electric power and energy for the betterment of society.",
    accentColor: "bg-green-600",
    logo: "/societies/pes-logo.svg",
  },
  {
    id: "ras",
    slug: "robotics-automation-society",
    name: "IEEE Robotics & Automation Society",
    shortName: "RAS",
    description: "Fostering the development and facilitating the exchange of scientific and technological knowledge in Robotics and Automation.",
    vision: "To be the most recognized and respected global organization in Robotics and Automation.",
    mission: "To foster the development and facilitate the exchange of scientific and technological knowledge in Robotics and Automation.",
    accentColor: "bg-red-600",
    logo: "/societies/ras-logo.svg",
  },
  {
    id: "wie",
    slug: "women-in-engineering",
    name: "IEEE Women in Engineering",
    shortName: "WIE",
    description: "Promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering.",
    vision: "A vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.",
    mission: "To facilitate the recruitment and retention of women in technical disciplines globally.",
    accentColor: "bg-purple-600",
    logo: "/societies/wie-logo.svg",
  }
  // Placeholder for the other 9 societies
];
