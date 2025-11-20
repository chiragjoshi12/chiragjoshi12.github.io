// src/data/blog.ts

export interface BlogPost {
  title: string;
  date: string; // Format: "YYYY-MM-DD"
  url: string;  // The external URL to your Medium/Substack post
  description: string;
}

export const blogData: BlogPost[] = [
  {
    title: "My Observations about China",
    date: "2025-09-02",
    url: "https://chirag-ai.medium.com/my-observations-about-china-chirag-joshi-4f1280fd5e63",
    description: "My Observations about China",
  },
  {
    title: "કુદરત + આધુનિકતા = વધુ સુંદરતા",
    date: "2025-08-11",
    url: "https://chirag-ai.medium.com/%E0%AA%95%E0%AB%81%E0%AA%A6%E0%AA%B0%E0%AA%A4-%E0%AA%86%E0%AA%A7%E0%AB%81%E0%AA%A8%E0%AA%BF%E0%AA%95%E0%AA%A4%E0%AA%BE-%E0%AA%B5%E0%AA%A7%E0%AB%81-%E0%AA%B8%E0%AB%81%E0%AA%82%E0%AA%A6%E0%AA%B0%E0%AA%A4%E0%AA%BE-3f243067175b",
    description: "કુદરત + આધુનિકતા = વધુ સુંદરતા",
  },
  {
    title: "A strong experience in Shanghai (Gujarati)",
    date: "2025-08-06",
    url: "https://chirag-ai.medium.com/a-strong-experience-in-shanghai-gujarati-dd111c40eaa3",
    description: "A strong experience in Shanghai (Gujarati)",
  },
  {
    title: "ચિન : એક લોંગ સ્ટોરી",
    date: "2025-08-03",
    url: "https://chirag-ai.medium.com/%E0%AA%9A%E0%AA%BF%E0%AA%A8-%E0%AA%8F%E0%AA%95-%E0%AA%B2%E0%AB%8B%E0%AA%82%E0%AA%97-%E0%AA%B8%E0%AB%8D%E0%AA%9F%E0%AB%8B%E0%AA%B0%E0%AB%80-751bfea74715",
    description: "ચિન : એક લોંગ સ્ટોરી",
  },
  {
    title: "આજના વિદ્યાર્થીઓને મારે કહેવું છે...",
    date: "2025-06-24",
    url: "https://chirag-ai.medium.com/%E0%AA%86%E0%AA%9C%E0%AA%A8%E0%AA%BE-%E0%AA%B5%E0%AA%BF%E0%AA%A6%E0%AB%8D%E0%AA%AF%E0%AA%BE%E0%AA%B0%E0%AB%8D%E0%AA%A5%E0%AB%80%E0%AA%93%E0%AA%A8%E0%AB%87-%E0%AA%AE%E0%AA%BE%E0%AA%B0%E0%AB%87-%E0%AA%95%E0%AA%B9%E0%AB%87%E0%AA%B5%E0%AB%81%E0%AA%82-%E0%AA%9B%E0%AB%87-cebfaa5f995f",
    description: "આજના વિદ્યાર્થીઓને મારે કહેવું છે...",
  },
  {
    title: "નવા નદીસર પ્રાથમિક શાળા — એક આઇડિયલ સ્કૂલ 🏫",
    date: "2025-05-11",
    url: "https://chirag-ai.medium.com/%E0%AA%A8%E0%AA%B5%E0%AA%BE-%E0%AA%A8%E0%AA%A6%E0%AB%80%E0%AA%B8%E0%AA%B0-%E0%AA%AA%E0%AB%8D%E0%AA%B0%E0%AA%BE%E0%AA%A5%E0%AA%AE%E0%AA%BF%E0%AA%95-%E0%AA%B6%E0%AA%BE%E0%AA%B3%E0%AA%BE-%E0%AA%8F%E0%AA%95-%E0%AA%86%E0%AA%87%E0%AA%A1%E0%AA%BF%E0%AA%AF%E0%AA%B2-%E0%AA%B8%E0%AB%8D%E0%AA%95%E0%AB%82%E0%AA%B2-2cb9f9bc6361",
    description: "",
  },
  {
    title: "NotebookLM with Gemini and Elevenlabs (Detailed Documentation)",
    date: "2025-01-11",
    url: "https://chirag-ai.medium.com/notebooklm-with-gemini-and-elevenlabs-detailed-documentation-b8db6739ba9b",
    description: "Turn PDFs into podcasts using AI! This guide shows how to use Gemini for dialogue generation and ElevenLabs for voice to create conversational audio from documents.",
  },
  {
    title: "2024 wrapped",
    date: "2024-12-27",
    url: "https://chirag-ai.medium.com/2024-wrapped-chirag-joshi-596380060ea8",
    description: "",
  },
  {
    title: "November 2024 — A Month of Energy and Building",
    date: "2024-12-02",
    url: "https://chirag-ai.medium.com/november-a-month-of-energy-and-building-chirag-joshi-2935148f5a2f",
    description: "A month of energy and building.",
  },
  {
    title: "AI : આગળ કેવું વિશ્વ હશે !",
    date: "2024-04-24",
    url: "https://chirag-ai.medium.com/ai-%E0%AA%86%E0%AA%97%E0%AA%B3-%E0%AA%95%E0%AB%87%E0%AA%B5%E0%AB%81%E0%AA%82-%E0%AA%B5%E0%AA%BF%E0%AA%B6%E0%AB%8D%E0%AA%B5-%E0%AA%B9%E0%AA%B6%E0%AB%87-ai-%E0%AA%B5%E0%AA%BF%E0%AA%B7%E0%AB%87-%E0%AA%8F%E0%AA%95%E0%AA%A6%E0%AA%AE-%E0%AA%B8%E0%AA%B0%E0%AA%B3-%E0%AA%AD%E0%AA%BE%E0%AA%B7%E0%AA%BE%E0%AA%AE%E0%AA%BE%E0%AA%82-%E0%AA%B8%E0%AA%AE%E0%AA%9C%E0%AB%82%E0%AA%A4%E0%AB%80-c23adb6d4f9b",
    description: "",
  },
  {
    title: "AI કેવી રીતે કામ કરે છે ?",
    date: "2023-12-01",
    url: "https://chirag-ai.medium.com/ai-%E0%AA%95%E0%AB%87%E0%AA%B5%E0%AB%80-%E0%AA%B0%E0%AB%80%E0%AA%A4%E0%AB%87-%E0%AA%95%E0%AA%BE%E0%AA%AE-%E0%AA%95%E0%AA%B0%E0%AB%87-%E0%AA%9B%E0%AB%87-ai-%E0%AA%B5%E0%AA%BF%E0%AA%B7%E0%AB%87-%E0%AA%8F%E0%AA%95%E0%AA%A6%E0%AA%AE-%E0%AA%B8%E0%AA%B0%E0%AA%B3-%E0%AA%AD%E0%AA%BE%E0%AA%B7%E0%AA%BE%E0%AA%AE%E0%AA%BE%E0%AA%82-%E0%AA%B8%E0%AA%AE%E0%AA%9C%E0%AB%82%E0%AA%A4%E0%AB%80-8c0492091fc0",
    description: "",
  },
  {
    title: "AI : એક નવા વિશ્વની શરૂઆત (2)",
    date: "2023-11-15",
    url: "https://chirag-ai.medium.com/ai-%E0%AA%8F%E0%AA%95-%E0%AA%A8%E0%AA%B5%E0%AA%BE-%E0%AA%B5%E0%AA%BF%E0%AA%B6%E0%AB%8D%E0%AA%B5%E0%AA%A8%E0%AB%80-%E0%AA%B6%E0%AA%B0%E0%AB%82%E0%AA%86%E0%AA%A4-2-ai-%E0%AA%B5%E0%AA%BF%E0%AA%B7%E0%AB%87-%E0%AA%8F%E0%AA%95%E0%AA%A6%E0%AA%AE-%E0%AA%B8%E0%AA%B0%E0%AA%B3-%E0%AA%AD%E0%AA%BE%E0%AA%B7%E0%AA%BE%E0%AA%AE%E0%AA%BE%E0%AA%82-%E0%AA%B8%E0%AA%AE%E0%AA%9C%E0%AB%82%E0%AA%A4%E0%AB%80-511cd73ab75a",
    description: "A simple, clear explanation of what AI really is, how it evolved from basic machines to thinking models, and why it's the most powerful technology ever built.",
  },
  {
    title: "AI : એક નવા વિશ્વની શરૂઆત (1)",
    date: "2023-10-31",
    url: "https://chirag-ai.medium.com/ai-%E0%AA%8F%E0%AA%95-%E0%AA%A8%E0%AA%B5%E0%AA%BE-%E0%AA%B5%E0%AA%BF%E0%AA%B6%E0%AB%8D%E0%AA%B5%E0%AA%A8%E0%AB%80-%E0%AA%B6%E0%AA%B0%E0%AB%82%E0%AA%86%E0%AA%A4-%E0%AA%9A%E0%AA%BF%E0%AA%B0%E0%AA%BE%E0%AA%97-%E0%AA%9C%E0%AB%8B%E0%AA%B6%E0%AB%80-chirag-joshi-2f2463d14dcb",
    description: "A powerful beginner-friendly blog that explains why AI is the most transformative and urgent technology of our time, emphasizing its rapid evolution and universal impact.",
  },
];