<script>
	import Clouds from '../../Clouds.svelte';
	import { base } from '$app/paths';
	import { highlightAuthor, citationDetails } from '$lib/publications.js';

	export let data;
</script>

<svelte:head>
	<title>{data.area.title} — Joe Palmo</title>
</svelte:head>

<Clouds particleBackground={false} />
<div id="body">
	<a class="back" href="{base}/research">&larr; Research</a>

	<h1>{data.area.title}</h1>

	<div class="abstract">
		{#each data.area.abstract as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>

	<h2 class="section">Related publications</h2>
	<ul class="entries">
		{#each data.relatedPublications as pub}
			<li class="entry">
				<span class="citation">
					{@html highlightAuthor(pub.authors, pub.boldName)}
					({pub.year}), <span class="title">{pub.title}</span>{citationDetails(pub)}{#if pub.link},
					<a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.link}</a>{/if}
				</span>
			</li>
		{/each}
	</ul>

	<p class="bridge">
		See the full <a href="{base}/publications">publications</a> page for a complete list.
	</p>
</div>

<style>
	#body {
		position: relative;
		z-index: 1;
		width: 40vw;
		min-width: 500px;
		margin: auto;
		margin-top: 15vh;
		font-size: 1em;
		line-height: 1.5rem;
		padding: 10px 10px 50px 10px;
	}

	:global(canvas) {
		pointer-events: none;
	}

	.back {
		display: inline-block;
		margin-bottom: 1.5rem;
		color: var(--medium-gray);
		text-decoration: none;
		font-size: 0.95em;
	}

	.back:hover {
		color: var(--black);
		text-shadow: 0 0 5px var(--light-green);
	}

	h1 {
		font-family: GTAmerica-Bold, GTAmerica, sans-serif;
		font-size: 1.35em;
		font-weight: normal;
		line-height: 1.35;
		margin: 0 0 1.25rem;
	}

	.abstract p {
		margin: 0 0 1rem;
		color: var(--black);
	}

	.abstract p:last-child {
		margin-bottom: 0;
	}

	.section {
		font-family: GTAmerica-Bold, GTAmerica, sans-serif;
		font-size: 1.1em;
		font-weight: normal;
		margin: 2rem 0 0.75rem;
	}

	.entries {
		margin: 0;
		padding: 0 0 0 1.5rem;
		list-style: none;
	}

	.entry {
		margin-bottom: 0.75rem;
	}

	.entry :global(.author-name) {
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	@font-face {
		font-family: 'GTAmerica-Medium';
		src: url('/fonts/GT-America-Medium.otf') format('opentype');
	}

	.entry :global(.title) {
		font-family: GTAmerica-Medium, GTAmerica, sans-serif;
	}

	.citation a {
		word-break: break-all;
	}

	a {
		text-decoration: none;
		color: var(--black);
	}

	a:hover {
		text-shadow: 0 0 5px var(--light-green);
	}

	.bridge {
		margin: 2rem 0 0;
		color: var(--medium-gray);
	}

	@media (max-width: 600px) {
		#body {
			width: 90vw;
			min-width: auto;
			padding: 10px 5px 30px 5px;
		}

		.entries {
			padding-left: 0.75rem;
		}
	}
</style>
