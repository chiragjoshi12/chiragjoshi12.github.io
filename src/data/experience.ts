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
    // advisor: "Peter Wang",
    companyUrl: "https://edutorapp.com",
  }
];
