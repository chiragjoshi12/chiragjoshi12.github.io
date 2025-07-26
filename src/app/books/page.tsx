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
      <div className="px-4 py-12 max-w-6xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Chirag's World</h1>
            <nav className="flex gap-6 mb-8 text-lg justify-center">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
              <Link href="/books" className="text-red-500 font-bold border-b-2 border-red-500">Books</Link>
              <Link href="/moments" className="hover:text-red-500 transition-colors">Moments 📸</Link>
            </nav>
        
            <p className="text-xl mb-12">
              Here are books I have read recently. All of them were good. Some were{" "}
              <span className="text-blue-600">great</span>. A few were{" "}
              <span className="text-green-600">remarkable</span>. Feel free to send me recommendations.
            </p>
        </header>
        
        <Bookshelf booksByYear={booksByYear} />
      </div>
    </div>
  );
}