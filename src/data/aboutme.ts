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
  "I&#39;m doing what I love most — building things that matter.<br><br>I believe in curiosity-driven growth. I&#39;m a mix of an engineer, a relentless learner, and someone who believes in doing bold, crazy things to create real impact.<br><br>At <a href=&#39;https://edutorapp.com/&#39; target=&#39;_blank&#39;><b>Edutor App</b></a>, we&#39;re building an Agentic OS for Education — AI tools that personalize learning for every student.<br><br>Running <a href=&#39;https://x.com/airr_club&#39; target=&#39;_blank&#39;><b>AIRR Club</b></a> (AI, Rockets, Robotics, Energy) to nurture first-principles thinkers and ignite Gujarat&#39;s deep-tech ecosystem.<br><br>One of the most electrifying moments of my life was attending <a href=&#39;https://x.com/Chiragjoshi_12/status/1797502241970291087&#39; target=&#39;_blank&#39;><b>Jensen Huang&#39;s keynote</b></a> at Computex Taiwan.<br><br>In the meantime, I enjoy playing badminton, reading books and Gujarati literature, and writing poems, blogs, or stories. 🏸<br><br>I&#39;m 15 years old and I&#39;ve left school to build something truly valuable — and I&#39;m just getting started.",
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
