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
    <div className="min-h-screen text-black font-sans">
      <div className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Chirag's World</h1>
        
        <nav className="flex gap-6 mb-10 text-lg">
          <Link href="/" className="underline decoration-red-500 underline-offset-4">
            Home
          </Link>
          <Link href="/blog" className="underline decoration-red-500 underline-offset-4">
            Blog
          </Link>
          <span className="underline decoration-red-500 underline-offset-4 font-bold">
            Books
          </span>
        </nav>
        
        <p className="text-xl mb-12">
          Here are books I have read recently. All of them were good. Some were{" "}
          <span className="text-blue-600">great</span>. A few were{" "}
          <span className="text-green-600">remarkable</span>. Feel free to send me recommendations.
        </p>
        
        <Bookshelf booksByYear={booksByYear} />
      </div>
    </div>
  );
}