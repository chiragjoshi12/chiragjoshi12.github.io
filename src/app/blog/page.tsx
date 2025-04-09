// src/app/blog/page.tsx

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPostPreview {
  slug: string;
  title: string;
  date: Date;
}

const POSTS_PATH = path.join(process.cwd(), 'src/blog-posts');

async function getAllPostPreviews(): Promise<BlogPostPreview[]> {
  const fileNames = await fs.readdir(POSTS_PATH);

  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const filePath = path.join(POSTS_PATH, fileName);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContents);

        if (!data.title || !data.date) return null;

        const slug = fileName.replace(/\.md$/, '');

        return {
          slug,
          title: data.title,
          date: new Date(data.date),
        };
      })
  );

  return posts
    .filter((post): post is BlogPostPreview => post !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

export const metadata = {
  title: "Blog",
  description: "Blog posts",
};

export default async function BlogIndexPage() {
  const posts = await getAllPostPreviews();

  return (
    // <div className="min-h-screen bg-[#fefce8] text-black font-mono">
    <div className="min-h-screen text-black font-mono">
      <div className="px-8 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Chirag&#39;s World</h1>

        <nav className="flex gap-6 mb-6 text-lg">
          <Link href="/" className="underline decoration-red-500 underline-offset-4">
            Home
          </Link>
          <span className="underline decoration-red-500 underline-offset-4 font-bold">
            Blog
          </span>
        </nav>

        <hr className="border-t border-black border-dotted mb-8" />

        <div className="space-y-5">
          {posts.map((post) => (
            <div key={post.slug} className="flex gap-6 items-baseline">
              <span className="w-32 text-gray-500">{formatDate(post.date)}</span>
              <Link href={`/blog/${post.slug}`}>
                <span className="border-b-4 border-red-500 pb-1 hover:text-gray-700 transition-colors">
                  {post.title}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <hr className="border-t border-black border-dotted mt-10" />
      </div>
    </div>
  );
}