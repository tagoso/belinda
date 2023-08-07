import { getPosts } from "@/sanity/sanity-utils";

import "../globals.css";
import Link from "next/link";

export const metadata = {
  title: "Belinda blog theme",
  description: "this is a building template of sanity blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of our posts
  const posts = await getPosts();

  return (
    <html
      className="bg-slate-100 font-mono text-slate-700 dark:bg-slate-700  dark:text-slate-300"
      lang="en"
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <body>
        <div className="relative max-w-screen-xl lg:grid lg:grid-cols-6 lg:gap-4">
          <div className="fixed left-0 right-0 top-0 hidden min-h-screen w-64 bg-slate-200 lg:block">
            <div className="m-2 my-5 p-2 pt-16">
              {posts.map((post) => (
                <li key={post._id}>
                  <Link
                    key={post._id}
                    href={`/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.title}
                    <br />
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-screen-2xl px-8 py-5 lg:col-span-5 lg:col-start-2 lg:ml-20">
            <main className="py-3">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
