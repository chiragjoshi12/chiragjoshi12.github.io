import Link from 'next/link';
import { blogData } from '@/data/blog';

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
      <div className="px-4 md:px-8 py-12 max-w-4xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chirag&apos;s World</h1>
            
            {/* RESPONSIVE NAV: flex-wrap, adjusted gap and text size */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-base md:text-lg">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/activities" className="hover:text-red-500 transition-colors">Activities</Link>
              <span className="text-red-500 font-bold border-b-2 border-red-500">Blog</span>
              <Link href="/books" className="hover:text-red-500 transition-colors">Books</Link>
              <Link href="/moments" className="hover:text-red-500 transition-colors">Moments 📸</Link>
            </nav>

            <p className="text-lg md:text-xl mb-12 text-zinc-700">
              I write about what I&apos;m learning, building, or thinking.
            </p>
        </header>

        <hr className="border-t border-black border-dotted mb-8" />

        <div className="space-y-6 md:space-y-5">
          {posts.map((post) => (
            // RESPONSIVE LIST: Stack date and title on mobile, row on desktop
            <div key={post.title} className="flex flex-col md:flex-row md:gap-6 md:items-baseline">
              <span className="text-sm text-gray-500 md:w-32 shrink-0 mb-1 md:mb-0">
                {formatDate(post.date)}
              </span>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <span className="text-lg border-b-4 border-red-500/20 hover:border-red-500 pb-1 hover:text-gray-700 transition-all duration-200">
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
