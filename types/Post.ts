import { PortableTextBlock } from "sanity";

export type Post = {
	_id: string;
	_createdAt: Date;
	releaseDate: Date;
	author: string;
	title: string;
	excerpt: string;
	slug: string;
	content: PortableTextBlock[];
};