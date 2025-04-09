// src/app/blog/[slug]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';  // Import Image component from next/image
import Link from 'next/link';    // Import Link component from next/link


// Import remark and necessary plugins for Markdown and KaTeX
import { remark } from 'remark';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypePrismPlus from 'rehype-prism-plus';

// Import the ScrollToTopButton component
import ScrollToTopButton from '@/components/ScrollToTopButton';

interface Props {
  params: { slug: string };
}

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
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

    // Validate required frontmatter
    if (!data.title || !data.date || !data.author || !data.description) {
      console.warn(`[${slug}] Post is missing required frontmatter.`);
    }

    const date = new Date(data.date);

    // Process Markdown content with KaTeX support
    const processedContent = await remark()
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypePrismPlus)
      .use(rehypeStringify)
      .process(content);

    const contentHtml = processedContent.toString();

    const postData: BlogPostData = {
      slug: slug,
      title: data.title || 'Untitled Post',
      date: date.toLocaleDateString(),
      author: data.author || 'Unknown Author',
      description: data.description || '',
      imageUrl: data.imageUrl as string | undefined, // Added type assertion here
      tags: data.tags as string[] | undefined, // Added type assertion here
      contentHtml: contentHtml,
    };
    return postData;

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`[${slug}] Error reading or processing post:`, error.message);
    } else {
      console.error(`[${slug}] An unknown error occurred:`, error);
    }
    return undefined;
  }
}


// Generate Metadata for the page
export async function generateMetadata({ params }: Props) {
  const post = await getPostData(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.description };
}

// The Page Component
export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Trigger 404 if post data not found
  }

  return (
    <div className="bg-[#FFFCF8] min-h-screen pb-16">
      <article className="max-w-screen-md mx-auto px-4 sm:px-8 py-16 lg:py-24">
        {/* Post Header */}
        <header className="mb-10 lg:mb-14 border-b border-zinc-200 pb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-zinc-800 leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-zinc-600 flex items-center">
            <span className="inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            {post.date} • <span className="ml-1 font-medium">{post.author}</span>
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="inline-block bg-zinc-100 text-zinc-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-zinc-200 transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Optional Featured Image */}
        {post.imageUrl && (
          <figure className="mb-10 lg:mb-12">
            <Image
              src={post.imageUrl}
              alt={`Featured image for ${post.title}`}
              width={1200}  // Choose appropriate width
              height={500}   // Choose appropriate height
              className="rounded-xl w-full object-cover max-h-[500px] shadow-md"
              style={{objectFit: 'cover', height: 'auto'}}
            />
          </figure>
        )}

        {/* Description as a lead paragraph if available */}
        {post.description && (
          <div className="mb-8 text-xl text-zinc-600 font-serif leading-relaxed border-l-4 border-zinc-300 pl-4 italic">
            {post.description}
          </div>
        )}

        <div
          className="prose prose-lg lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Article Footer - CTA, share links, etc. */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h3 className="font-medium text-zinc-800 mb-1">Share this article</h3>
              <div className="flex space-x-3">
                {/* Twitter/X share button */}
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chiragjoshi12.github.io/blog/${post.slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                {/* LinkedIn share button */}
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://chiragjoshi12.github.io/blog/${post.slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>
              <Link href="/blog" className="inline-flex items-center text-zinc-600 hover:text-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to blog
              </Link>
          </div>
        </div>
      </article>
      <ScrollToTopButton />
    </div>
  );
}

// Generate Static Paths for SSG (Optional but Recommended)
export async function generateStaticParams() {
  try {
    const fileNames = await fs.readdir(POSTS_PATH);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
      }));
  } catch (error: unknown) {
    console.error("Error reading post directory for generateStaticParams:", error);
    return [];
  }
}