export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  paperUrl?: string;
  blogUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Student Superpower",
    description:
      "Student Super Power is a system of AI agents that work together like a smart teacher team—tracking how each student learns, guiding them chapter by chapter, and helping them improve with the right support at the right time.",
    technologies: ["Python", "CrewAI", "Streamlit"],
    projectUrl: "https://www.youtube.com/watch?v=2K7YrZgkVF8",
    imageUrl:
      "https://i.ibb.co/bgZf98PF/2840d306-8c0d-44aa-8c06-0201fceb7790.jpg",
    codeUrl: "https://github.com/chiragjoshi12/Student-Super-Power",
  },
  {
    title: "Podcast Generation",
    description:
      "Transforms educational content into engaging Gujarati podcasts—making learning conversational, accessible, and easier to understand for students and teachers.",
    technologies: ["Python", "Gemini", "ElevenLabs"],
    projectUrl: "https://x.com/Chiragjoshi_12/status/1861022396184182945",
    imageUrl:
      "https://web.edutorapp.com/_next/static/media/default_prompt_icon.e666cb16.png",
    blogUrl: "https://chirag-ai.medium.com/notebooklm-with-gemini-and-elevenlabs-detailed-documentation-b8db6739ba9b",
  },
  {
    title: "RoastFolio",
    description:
      "Your Portfolio Roaster - analyzes your portfolio and gives you a brutally honest (but fun) recap.",
    technologies: ["Python", "TypeScript", "Gemini"],
    projectUrl: "https://roastfolio.vercel.app/",
    imageUrl: "https://roastfolio.vercel.app/favicon.ico",
  },
];
