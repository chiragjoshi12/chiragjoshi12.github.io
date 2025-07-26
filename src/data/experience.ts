export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Apr 2023 - Present",
    title: "AI Engineer",
    company: "EdutorApp",
    description:
      "Building the Agentic OS of Education — developing multi-agent systems to deliver deeply personalized K-12 learning experiences.",
    companyUrl: "https://edutorapp.com",
  },
  {
    date: "Aug 2024 - Present",
    title: "Builder",
    company: "AIRRE Club",
    description:
      "AIRRE is a mission-driven frontier tech club where we're nurturing young talent in AI, rockets, robotics, and energy. We're preparing first-principles thinkers who will build the future.",
    advisor: "Khetesh Akoliya",
    companyUrl: "https://x.com/airr_club",
  }
];
