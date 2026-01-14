import { client, urlFor } from "@/app/sanity";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    mainImage
  }`;
  return client.fetch(query);
}

export default async function BlogIndex() {
  const data = await getData();

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-12">Latest Articles</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {data.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              )}
            </div>
            <h2 className="text-2xl font-bold group-hover:text-blue-600 transition">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}