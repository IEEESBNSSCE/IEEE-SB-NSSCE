import { Achievement } from "./types";

export const achievements: Achievement[] = [
  {
    id: "a1",
    title: "Best Student Branch Award",
    year: 2025,
    description: "Awarded the Outstanding Student Branch within the Kerala Section for exceptional activities and member engagement.",
    tags: ["Section Level", "Outstanding", "Student Branch"],
  },
  {
    id: "a2",
    title: "Global IEEE PES Darrel Chong",
    year: 2024,
    description: "Received Gold level recognition for conducting the highly impactful 'Energy for All' initiative.",
    societyId: "pes",
    tags: ["Global", "Gold", "PES", "Darrel Chong"],
  },
  {
    id: "a3",
    title: "Regional CS Hackathon Winners",
    year: 2024,
    description: "Our Computer Society team secured 1st place at the National Level Hackathon organized by IEEE India Council.",
    societyId: "cs",
    tags: ["National", "Hackathon", "CS"],
  },
  {
    id: "a4",
    title: "WIE Star Program Grant",
    year: 2023,
    description: "Received a special grant to conduct rural outreach STEM programs for school students in Kerala.",
    societyId: "wie",
    tags: ["Grant", "STEM", "WIE"],
  },
  {
    id: "a5",
    title: "IEEE RAS Chapter of the Year",
    year: 2022,
    description: "Recognized as the most active Robotics & Automation Society chapter in the region.",
    societyId: "ras",
    tags: ["Regional", "RAS"],
  }
];
