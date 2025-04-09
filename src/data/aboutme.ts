export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Chirag Joshi",
  title: "Builder & Learner",
  institution: "EdutorApp",
  description:
  "I'm doing what I love most — building things that matter.<br><br>I believe in curiosity-driven growth. I'm a mix of an engineer, a relentless learner, and someone who believes in doing bold, crazy things to create real impact.<br><br>At <a href='https://edutorapp.com/' target='_blank'><b>Edutor App</b></a>, we're building an Agentic OS for Education — AI tools that personalize learning for every student.<br><br>Running <a href='https://x.com/airr_club' target='_blank'><b>AIRR Club</b></a> (AI, Rockets, Robotics, Energy) to nurture first-principles thinkers and ignite Gujarat’s deep-tech ecosystem.<br><br>One of the most electrifying moments of my life was attending <a href='https://x.com/Chiragjoshi_12/status/1797502241970291087' target='_blank'><b>Jensen Huang’s keynote</b></a> at Computex Taiwan.<br><br>In the meantime, I enjoy playing badminton, reading books and Gujarati literature, and writing poems, blogs, or stories. 🏸<br><br>I’m 15 years old and I’ve left school to build something truly valuable — and I’m just getting started.",
  email: "chirag.edutorai@gmail.com",
  imageUrl:
    "https://i.ibb.co/YTLMfbWn/headshot24.webp",
  githubUsername: "chiragjoshi12",
  linkedinUsername: "chiragjoshi12",
  twitterUsername: "Chiragjoshi_12",
  blogUrl: "/blog",
  cvUrl: "https://",
  institutionUrl: "https://edutorapp.com/",
  // altName: "Chirkut",
  secretDescription: "I like badminton.",
};
