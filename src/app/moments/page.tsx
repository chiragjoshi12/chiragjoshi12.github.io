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
      <div className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <header className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chirag&apos;s World</h1>
            
            {/* RESPONSIVE NAV */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-base md:text-lg">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <Link href="/activities" className="hover:text-red-500 transition-colors">Activities</Link>
              <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
              <Link href="/books" className="hover:text-red-500 transition-colors">Books</Link>
              <span className="text-red-500 font-bold border-b-2 border-red-500">Moments 📸</span>
            </nav>
            
            <p className="text-lg md:text-xl text-zinc-700 mb-12">
              A collection of moments, people, and places I hold dear.
            </p>
        </header>

        {/* Masonry Photo Gallery - CSS handles column count responsiveness */}
        <div className="masonry-gallery">
          {momentsData.map((moment, index) => (
            <div key={index} className="masonry-item group mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={moment.src}
                  alt={moment.alt || ""}
                  width={moment.width}
                  height={moment.height}
                  className="object-cover w-full h-auto transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 6}
                />
                
                {/* Caption Overlay - Responsive text size */}
                {moment.caption && (
                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-white text-xs md:text-sm font-medium leading-snug shadow-black drop-shadow-md">
                        {moment.caption}
                      </p>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
