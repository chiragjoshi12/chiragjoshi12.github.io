// src/components/blog-entry.tsx
import Link from "next/link";

// Define the shape of the post prop this component expects
interface BlogEntryProps {
  post: {
    slug: string;
    title: string;
    date: string;
    author: string;
    description: string; // Expecting plain text description
  };
}

// Renders a simple preview, expecting plain text description
export function BlogEntry({ post }: BlogEntryProps) {
  return (
    <div className="mb-8 pb-8 border-b border-zinc-200 last:border-b-0 last:pb-0">
      <h3 className="font-serif text-xl mb-2">
        <Link href={`/blog/${post.slug}`} className="text-zinc-800 hover:text-zinc-600 transition-colors duration-200">
          {post.title}
        </Link>
      </h3>
      <p className="text-sm text-zinc-500 mb-3">{post.date} - {post.author}</p>
      {/* Render description as plain text */}
      <p className="text-sm text-zinc-600 leading-relaxed">
        {post.description}
      </p>
       <Link href={`/blog/${post.slug}`} className="text-xs text-blue-600 hover:underline mt-3 inline-block uppercase tracking-wider">
          Read Post
      </Link>
    </div>
  );
}