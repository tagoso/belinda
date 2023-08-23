import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="rm-0 items-center">
      <h1 className="text-4xl font-extrabold">Another awsome blog title</h1>

      <h2 className="mt-3 text-xl text-gray-600">subtitle</h2>

      <div className="mt-8">
        {posts.map((post) => (
          <Link href={`/${post.slug}`} key={post._id}>
            <div className="py-2">{post.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    // Revalidate every 10 seconds
    revalidate: 10,
  };
}
