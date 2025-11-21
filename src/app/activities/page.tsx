// src/app/activities/page.tsx
import { marked } from 'marked';
import { activitiesMarkdown } from '@/data/activities';
import Link from 'next/link';

export const metadata = {
  title: "Activities",
  description: "A log of activities, workshops, and talks by Chirag Joshi.",
};

export default function ActivitiesPage() {
  const htmlContent = marked(activitiesMarkdown);

  return (
    <div className="min-h-screen text-black font-sans bg-[#FFFCF8]">
      <div className="px-4 md:px-8 py-12 max-w-4xl mx-auto overflow-x-hidden">
        <header className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chirag&apos;s World</h1>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-base md:text-lg">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <span className="text-red-500 font-bold border-b-2 border-red-500">Activities</span>
              <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
              <Link href="/books" className="hover:text-red-500 transition-colors">Books</Link>
              <Link href="/moments" className="hover:text-red-500 transition-colors">Moments 📸</Link>
            </nav>

            <p className="text-lg md:text-xl text-zinc-700">
              A collection of Hackathons, Trips, and Events I&apos;ve been a part of.
            </p>
        </header>
        
        <article
          className="prose prose-zinc mx-auto w-full min-w-0 max-w-none 
          break-words 
          !text-base md:!text-lg 
          prose-headings:font-serif prose-headings:break-words 
          prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:break-all
          prose-img:rounded-xl prose-img:w-full prose-img:h-auto"
          dangerouslySetInnerHTML={{ __html: htmlContent as string }}
        />
      </div>
    </div>
  );
}
