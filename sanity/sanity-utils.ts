import { Post } from "@/types/Post";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
			_id,
			_createdAt,
			releaseDate,
			author,
			title,
			excerpt,
			"slug": slug.current,
			content
		}`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
			_id,
			_createdAt,
			releaseDate,
			"author": author->name,
			title,
			excerpt,
			"slug": slug.current,
			content
		}`,
		{ slug: slug }
  );
}
