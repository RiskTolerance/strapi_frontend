<script lang="ts">
	export let data;
	const posts = data.posts.data;
</script>

<p>Blog Entries:</p>

<div class="w-full grid grid-cols-4 gap-4">
	{#if posts}
		{#each posts as post}
			<a href="/blog/{post.id}/{post.attributes.slug}">
				<article class="card card-hover p-8 prose dark:prose-invert">
					<h1 class="text-3xl">{post.attributes.title}</h1>
					{#if post.attributes.richTextLite}
						{@html post.attributes.richTextLite}
					{/if}
					{#if post.attributes.richTextStandard}
						{@html post.attributes.richTextStandard}
					{/if}
					{#if post.attributes.richTextRich}
						{@html post.attributes.richTextRich}
					{/if}
				</article>
			</a>
		{/each}
	{/if}
</div>
