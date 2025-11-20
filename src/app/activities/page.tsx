// src/app/activities/page.tsx
import { marked } from 'marked';
import { activitiesMarkdown } from '@/data/activities';
import Link from 'next/link';

export const metadata = {
  title: "Activities",
  description: "A log of activities, workshops, and talks by Chirag Joshi.",
};

export default function ActivitiesPage() {
  // Convert the Markdown string to HTML
  const htmlContent = marked(activitiesMarkdown);

  return (
    <div className="min-h-screen text-black font-sans bg-[#FFFCF8]">
      <div className="px-4 py-12 max-w-4xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Chirag's World</h1>
            <nav className="flex gap-6 mb-8 text-lg justify-center">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <span className="text-red-500 font-bold border-b-2 border-red-500">Activities</span>
              <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
              <Link href="/books" className="hover:text-red-500 transition-colors">Books</Link>
              <Link href="/moments" className="hover:text-red-500 transition-colors">Moments 📸</Link>
            </nav>
            <p className="text-xl text-zinc-700 mb-12">
              A collection of Hackathons, Trips, and Events I've been a part of.
            </p>
        </header>
        
        {/* Render the HTML from your Markdown file */}
        <article
          className="prose prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
