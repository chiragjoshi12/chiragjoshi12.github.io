// src/app/blog/page.tsx

import Link from 'next/link';
import { blogData } from '@/data/blog'; // Import your new blog data

// Helper function to format the date string
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
  const year = date.getUTCFullYear();
  return `${day} ${month}, ${year}`;
}

export const metadata = {
  title: "Blog",
  description: "Blog posts by Chirag Joshi",
};

export default function BlogIndexPage() {
  // Sort posts by date in descending order
  const posts = blogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen text-black font-sans bg-[#FFFCF8]">
      <div className="px-4 py-12 max-w-6xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Chirag's World</h1>
            <nav className="flex gap-6 mb-8 text-lg justify-center">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/blog" className="text-red-500 font-bold border-b-2 border-red-500">Blog</Link>
              <Link href="/books" className="hover:text-red-500 transition-colors">Books</Link>
              <Link href="/moments" className="hover:text-red-500 transition-colors">Moments 📸</Link>
            </nav>

            <p className="text-xl mb-12">
              I write about what I'm learning, building, or thinking.
            </p>
        </header>

        <hr className="border-t border-black border-dotted mb-8" />

        <div className="space-y-5">
          {posts.map((post) => (
            <div key={post.title} className="flex gap-6 items-baseline">
              <span className="w-32 text-gray-500">{formatDate(post.date)}</span>
              {/* This is the key change: an <a> tag opening in a new tab */}
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <span className="border-b-4 border-red-500 pb-1 hover:text-gray-700 transition-colors">
                  {post.title}
                </span>
              </a>
            </div>
          ))}
        </div>

        <hr className="border-t border-black border-dotted mt-10" />
      </div>
    </div>
  );
}