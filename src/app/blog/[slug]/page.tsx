import { client, urlFor } from "@/app/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import AdUnit from "@/app/components/AdUnit";
import { notFound } from "next/navigation";
import Link from "next/link";

// 1. IMPROVED TYPE DEFINITIONS
type Params = { slug: string };

interface Post {
  title: string;
  mainImage: any;
  body: any;
  excerpt: string;
  slug: string;
  _createdAt: string;
  author?: {
    name: string;
    image: any;
  };
  categories?: {
    title: string;
  }[];
}

// 2. STYLISH PORTABLE TEXT COMPONENTS
// This tells Sanity how to render your content with Tailwind classes
const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10 relative rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || "Blog image"}
              fill
              className="object-contain"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2 italic p-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-gray-100 scroll-mt-20">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-xl text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700 dark:text-gray-300 marker:text-blue-500">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-gray-700 dark:text-gray-300 marker:font-bold">
        {children}
      </ol>
    ),
  },
};

// 3. ENHANCED DATA FETCHING
async function getPostBySlug(slug: string): Promise<Post | null> {
  const cleanSlug = slug.trim();
  const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      body,
      excerpt,
      "slug": slug.current,
      _createdAt,
      author->{name, image},
      categories[]->{title}
    }`;

  try {
    return await client.fetch(query, { slug: cleanSlug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Your Awesome Blog`,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  };
}

// 4. MAIN COMPONENT
export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Date formatter
  const date = new Date(post._createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-gray-50 dark:bg-[#111] border-b dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-5 py-16 md:py-24 text-center">
          
          {/* Category Pill */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex justify-center gap-2 mb-6">
              {post.categories.map((cat, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-8">
            {post.title}
          </h1>

          {/* Author & Date Row */}
          <div className="flex items-center justify-center space-x-4">
            {post.author?.image && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm">
                <Image
                  src={urlFor(post.author.image).width(100).height(100).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {post.author?.name || "Anonymous"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {date} • 5 min read
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN IMAGE --- */}
      {post.mainImage && (
        <div className="max-w-5xl mx-auto px-5 -mt-10 md:-mt-16 mb-16 relative z-10">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              priority
              className="object-cover transition-transform hover:scale-105 duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* --- CONTENT BODY --- */}
      <div className="max-w-3xl mx-auto px-5 pb-20">
        
        <AdUnit slotId="TOP_SLOT_ID" />

        {/* The 'prose' class does the magic for typography */}
        <div className="prose prose-lg md:prose-xl dark:prose-invert prose-blue mx-auto prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500">
          {post.body ? (
            <PortableText value={post.body} components={myPortableTextComponents} />
          ) : (
            <p className="text-center italic text-gray-500">No content found...</p>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
           <AdUnit slotId="BOTTOM_SLOT_ID" />
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
             ← Back to all posts
          </Link>
        </div>

      </div>
    </article>
  );
}