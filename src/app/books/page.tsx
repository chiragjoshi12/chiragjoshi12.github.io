// src/app/books/page.tsx
import { Bookshelf } from "@/components/bookshelf";
import { booksByYear } from "@/data/books";
import Link from 'next/link';

export const metadata = {
  title: "Books",
  description: "Books I've read and recommend.",
};

export default function BooksPage() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#FFFCF8]">
      <div className="px-4 md:px-8 py-12 max-w-4xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chirag&apos;s World</h1>
            
            {/* RESPONSIVE NAV */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-base md:text-lg">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/activities" className="hover:text-red-500 transition-colors">Activities</Link>
              <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
              <span className="text-red-500 font-bold border-b-2 border-red-500">Books</span>
              <Link href="/moments" className="hover:text-red-500 transition-colors">Moments 📸</Link>
            </nav>
        
            <p className="text-lg md:text-xl mb-12 text-zinc-700 px-2">
              Here are books I have read recently. All of them were good. Some were{" "}
              <span className="text-blue-600 font-medium">great</span>. A few were{" "}
              <span className="text-green-600 font-medium">remarkable</span>. Feel free to send me recommendations.
            </p>
        </header>
        
        {/* Bookshelf Component wrapper */}
        <div className="mx-auto">
          <Bookshelf booksByYear={booksByYear} />
        </div>
      </div>
    </div>
  );
}
