import { Event } from "./types";

export const events: Event[] = [
  {
    id: "e1",
    slug: "tech-symposium-2026",
    title: "National Tech Symposium 2026",
    description: "Annual technical symposium featuring workshops, hackathons, and guest lectures from industry experts.",
    date: "2026-08-15T09:00:00Z",
    endDate: "2026-08-17T18:00:00Z",
    venue: "Main Auditorium, NSSCE",
    societyId: "cs",
    status: "upcoming",
    banner: "/events/symposium.jpg",
    tags: ["Symposium", "Hackathon", "Networking"],
    speakers: [
      {
        name: "Dr. Alice Turing",
        designation: "AI Researcher at DeepMind",
        bio: "Dr. Turing has over 15 years of experience in artificial intelligence and machine learning research.",
        photo: "/speakers/alice.jpg"
      },
      {
        name: "Bob Builder",
        designation: "Senior Software Engineer",
        bio: "Specializes in scalable cloud architectures and full-stack web development.",
        photo: "/speakers/bob.jpg"
      }
    ],
    agenda: [
      { time: "09:00 AM", title: "Registration & Breakfast", description: "Collect your badges and networking." },
      { time: "10:00 AM", title: "Keynote Address", description: "Dr. Alice Turing on the Future of AI." },
      { time: "11:30 AM", title: "Hands-on Workshop", description: "Building scalable web apps." },
      { time: "01:00 PM", title: "Lunch Break" },
      { time: "02:00 PM", title: "Hackathon Kickoff" }
    ],
  },
  {
    id: "e2",
    slug: "robotics-workshop",
    title: "Intro to ROS & Autonomous Bots",
    description: "A hands-on workshop to get started with Robot Operating System (ROS) and building your first autonomous robot.",
    date: "2026-06-20T10:00:00Z",
    venue: "Robotics Lab",
    societyId: "ras",
    status: "upcoming",
    banner: "/events/robotics.jpg",
    tags: ["Workshop", "Robotics", "ROS"],
  },
  {
    id: "e3",
    slug: "women-in-tech-summit",
    title: "Women in Tech Summit",
    description: "Celebrating the achievements of women in engineering and tech, with panel discussions and networking.",
    date: "2026-03-08T09:00:00Z",
    venue: "Seminar Hall",
    societyId: "wie",
    status: "past",
    banner: "/events/wie-summit.jpg",
    tags: ["Summit", "Women in Tech", "Networking"],
  }
];
