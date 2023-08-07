import { getPosts, getPost } from "@/sanity/sanity-utils";
import dateFormat, { masks } from "dateformat";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
  params: { post: string };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);
  const posts = await getPosts();

  return (
    <>
      <header className="flex items-center justify-between">
        <div className="my-2">
          <Link href={`/`}>Home</Link>
        </div>
      </header>
      <div className="container mx-auto max-w-screen-lg px-8 py-5">
        <h1 className="mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
          {post.title}
        </h1>
        <div className="m-6 flex justify-center space-x-3 text-gray-500">
          <span>On {dateFormat(post.releaseDate, "longDate")}</span>
          <h2>{post.author}</h2>
        </div>
        <div className="m-3 flex justify-center space-x-3 italic text-gray-500">
          {post.excerpt}
        </div>
      </div>

      {/* content goes here */}
      <div className="container m-4 mx-auto max-w-screen-lg border-t border-gray-100 px-8 py-5 text-lg text-gray-700 lg:py-8 xl:px-5">
        <PortableText value={post.content} />
      </div>

      <div className="items-end justify-center bg-slate-200 p-6 lg:hidden">
        <div>Other Posts</div>
        <ul>
          {posts.map((post) => (
            <>
              <li key={post._id}>
                {" "}
                -{" "}
                <Link
                  key={post._id}
                  href={`/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                  <br />
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
