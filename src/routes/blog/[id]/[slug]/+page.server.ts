export async function load({ params }) {
	const url = `http://localhost:1337/api/posts/${params.id}`;
	const data = fetch(url).then((res) => {
		return res.json();
	});

	return {
		testPost: {
			title: `title for the post goes here`,
			content: `content for the post goes here`
		},
		post: await data
	};
}
