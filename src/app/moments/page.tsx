// src/app/moments/page.tsx
import { momentsData } from "@/data/moments";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Moments 📸",
  description: "A collection of moments, people, and places I hold dear.",
};

export default function MomentsPage() {
  return (
    <div className="min-h-screen text-black font-sans bg-[#FFFCF8]">
      <div className="px-4 py-12 max-w-6xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Chirag's World</h1>
            <nav className="flex gap-6 mb-8 text-lg justify-center">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/activities" className="hover:text-red-500 transition-colors">Activities</Link>
              <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
              <Link href="/books" className="hover:text-red-500 transition-colors">Books</Link>
              <span className="text-red-500 font-bold border-b-2 border-red-500">Moments 📸</span>
            </nav>
            <p className="text-xl text-zinc-700 mb-12">
              A collection of moments, people, and places I hold dear.
            </p>
        </header>

        {/* Masonry Photo Gallery */}
        <div className="masonry-gallery">
          {momentsData.map((moment, index) => (
            <div key={index} className="masonry-item group">
              <Image
                src={moment.src}
                alt={moment.alt || ""}
                width={moment.width}
                height={moment.height}
                className="rounded-lg object-cover w-full h-auto transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 6} // Prioritize loading the first few images
              />
              {moment.caption && (
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-white text-sm font-light">{moment.caption}</p>
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}