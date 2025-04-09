// src/app/layout.tsx
import type { Metadata } from "next";
import { Noto_Serif, PT_Serif } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
// import Link from "next/link"; // Import Link - Removed unused import

//Import theme
import 'prismjs/themes/prism-tomorrow.css';

// --- Font setup (keep as is) ---
const geistSans = localFont({
  src: './fonts/Geist-Regular.woff2', // Adjust path
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMono-Regular.woff2', // Adjust path
  variable: '--font-geist-mono',
  display: 'swap',
});

const notoSerif = Noto_Serif({ variable: "--font-noto-serif", subsets: ["latin"], weight: ["400", "700"] });
const ptSerif = PT_Serif({ variable: "--font-pt-serif", subsets: ["latin"], weight: ["400", "700"] });

// --- Metadata (keep as is) ---
export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: { icon: "https://i.ibb.co/JWR3wbBD/favicon-1.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         {/* ADD THIS LINE FOR KATEX STYLES */}
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1tBCETVFN/4gFh6zSOXP4CvvrSay" crossOrigin="anonymous" />
         {/* You might have other meta tags or links here already */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="bg-[#FFFCF8]">{children}</main> {/* Ensure main content area has appropriate background */}
        {/* You could add a footer here */}
      </body>
    </html>
  );
}