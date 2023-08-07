const post = {
	name: "post",
	title: "Posts",
	type: "document",
	fields: [
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: {type: "author"},
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: "text",
			rows: 2,
		},
		{
			name: 'releaseDate',
			title: 'Release date',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
				calendarTodayLabel: 'Today'
			  }
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: "96",
			},
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default post;
