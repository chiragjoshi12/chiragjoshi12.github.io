// src/app/blog/[slug]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Import remark and necessary plugins for Markdown and KaTeX
import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypePrismPlus from 'rehype-prism-plus';

// Import the ScrollToTopButton component
import ScrollToTopButton from '@/components/ScrollToTopButton';

// --- Corrected Props Interface ---
// Define Props specifically for this page route ([slug])
interface Props {
  params: { slug: string }; // 'slug' must match the folder name '[slug]'
  // Optionally include searchParams if you use them
  // searchParams: { [key: string]: string | string[] | undefined };
}
// --- End Correction ---

interface BlogPostData {
  slug: string;
  title: string;
  date: string; // Keep as formatted string
  author: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  contentHtml: string;
}

const POSTS_PATH = path.join(process.cwd(), 'src/blog-posts');

async function getPostData(slug: string): Promise<BlogPostData | undefined> {
  const filePath = path.join(POSTS_PATH, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate required frontmatter (optional but good practice)
    if (!data.title || !data.date || !data.author || !data.description) {
      console.warn(`[${slug}] Post is missing required frontmatter: title, date, author, or description.`);
      // Decide if you want to return undefined here or provide defaults
      // For now, we'll continue with defaults as before
    }

    let formattedDate = 'Invalid Date';
    try {
      // Ensure date is parsed correctly before formatting
      const dateObject = new Date(data.date);
      if (!isNaN(dateObject.getTime())) {
         formattedDate = dateObject.toLocaleDateString('en-US', { // Example formatting
           year: 'numeric',
           month: 'long',
           day: 'numeric',
         });
      } else {
         console.warn(`[${slug}] Invalid date format in frontmatter: ${data.date}`);
      }
    } catch (dateError) {
        console.warn(`[${slug}] Error parsing date: ${data.date}`, dateError);
    }


    // Process Markdown content with KaTeX support
    const processedContent = await remark()
      .use(remarkMath)
      // Ensure allowDangerousHtml is necessary and understood
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex) // Ensure KaTeX CSS is imported globally (e.g., in layout.tsx)
      .use(rehypePrismPlus) // Ensure Prism CSS is imported globally
      .use(rehypeStringify)
      .process(content);

    const contentHtml = processedContent.toString();

    const postData: BlogPostData = {
      slug: slug,
      title: data.title || 'Untitled Post',
      date: formattedDate, // Use the potentially corrected/formatted date
      author: data.author || 'Unknown Author',
      description: data.description || '',
      imageUrl: data.imageUrl as string | undefined, // Keep cast if needed for flexibility
      tags: Array.isArray(data.tags) ? data.tags : undefined, // Ensure tags is an array
      contentHtml: contentHtml,
    };
    return postData;

  } catch (error: unknown) {
    // Check if the error is specifically a file not found error
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
       console.log(`[${slug}] Markdown file not found.`);
       // Don't log as an error, this is expected for notFound()
    } else if (error instanceof Error) {
      console.error(`[${slug}] Error reading or processing post:`, error.message);
    } else {
      console.error(`[${slug}] An unknown error occurred:`, error);
    }
    return undefined; // Return undefined on any error
  }
}

// Use the corrected Props type
export async function generateMetadata({ params }: Props) {
  // No need to cast params.slug, it's already typed as string
  const post = await getPostData(params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return { title: post.title, description: post.description };
}

// Use the corrected Props type
export default async function BlogPostPage({ params }: Props) {
  // No need to cast params.slug, it's already typed as string
  const slug = params.slug;

  const post = await getPostData(slug);

  if (!post) {
    notFound(); // Trigger 404 if post data not found
  }

  // Base URL for sharing links (replace with your actual domain)
  const baseUrl = "https://chiragjoshi12.github.io"; // Or process.env.NEXT_PUBLIC_BASE_URL
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    // Add 'dark:bg-gray-900' etc. if you implement dark mode
    <div className="bg-[#FFFCF8] min-h-screen pb-16">
      {/* Add KaTeX and PrismJS CSS links in your root layout if not already done */}
      {/* e.g., <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2sMBliJwPEgwPOQAHdTxCRRPZCsqGZNlLFBXhjp" crossOrigin="anonymous"/> */}
      {/* e.g., <link href="/path/to/your/prism-theme.css" rel="stylesheet" /> */}

      <article className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Post Header */}
        <header className="mb-10 lg:mb-14 border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-zinc-800 dark:text-zinc-100 leading-tight">
            {post.title}
          </h1>

          <div className="text-base text-zinc-600 dark:text-zinc-400 flex items-center flex-wrap gap-x-3 gap-y-1">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={new Date(post.date).toISOString()}>{post.date}</time> {/* Improve date semantics */}
            </div>
            <span className="font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
          </div>


          {post.tags && post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="inline-block bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors cursor-default">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Optional Featured Image */}
        {post.imageUrl && (
          <figure className="mb-10 lg:mb-12 -mx-4 sm:-mx-6 lg:-mx-8"> {/* Allow image to bleed slightly */}
            <Image
              src={post.imageUrl}
              alt={`Featured image for ${post.title}`}
              width={1200} // Intrinsic width for aspect ratio calculation
              height={630} // Intrinsic height (common social sharing ratio)
              className="rounded-lg w-full h-auto object-cover shadow-lg" // Maintain aspect ratio
              priority // Prioritize loading if it's above the fold
              // Consider adding sizes attribute for responsive optimization
              // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 900px"
            />
          </figure>
        )}

        {/* Description as a lead paragraph */}
        {post.description && (
          <div className="mb-8 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-serif leading-relaxed border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic">
            {post.description}
          </div>
        )}

        {/* Post Content */}
        <div
          // Add dark mode prose styles if needed: dark:prose-invert
          className="prose prose-zinc prose-lg lg:prose-xl max-w-none" // prose-zinc provides decent defaults, max-w-none overrides prose width constraints
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2 text-sm">Share this article:</h3>
              <div className="flex space-x-3">
                {/* Twitter/X share button */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="text-zinc-500 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
                >
                   {/* Use a better icon component if available */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                {/* LinkedIn share button */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="text-zinc-500 hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors"
                >
                  {/* Use a better icon component if available */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                {/* Add more share buttons as needed (e.g., Facebook, Reddit) */}
              </div>
            </div>
            <Link href="/blog" className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to blog
            </Link>
          </div>
        </div>
      </article>
      <ScrollToTopButton /> {/* Ensure this component works well */}
    </div>
  );
}


export async function generateStaticParams() {
  try {
    const fileNames = await fs.readdir(POSTS_PATH);
    // Filter for markdown files and map to the expected structure
    const params = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
      }));
    console.log("Generated static params:", params); // Good for debugging
    return params;
  } catch (error: unknown) {
    // Log error specifically for generateStaticParams
    if (error instanceof Error) {
        console.error('Error reading post directory for generateStaticParams:', error.message);
    } else {
        console.error('Unknown error in generateStaticParams:', error);
    }
    // Return empty array on error to prevent build failure if possible,
    // though this might indicate a deeper issue (e.g., directory not found)
    return [];
  }
}