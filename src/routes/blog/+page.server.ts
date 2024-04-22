export async function load() {
	const url = 'http://localhost:1337/api/posts';
	const data = fetch(url).then((res) => {
		return res.json();
	});

	return {
		testPost: {
			title: `title for the post goes here`,
			content: `content for the post goes here`
		},
		posts: await data
	};
}
