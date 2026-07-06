<script>
	import Clouds from '../Clouds.svelte';
	import { SCHOLAR_URL } from '$lib/links.js';
	import { publications, highlightAuthor, citationDetails } from '$lib/publications.js';

	const sections = [
		{ title: 'In Prep / Submitted / Under Review', status: 'in-progress' },
		{ title: 'Peer-reviewed', status: 'peer-reviewed' }
	];

	function groupByYear(pubs) {
		const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
		return years.map((year) => ({
			year,
			pubs: pubs.filter((p) => p.year === year)
		}));
	}
</script>

<svelte:head>
	<title>Publications — Joe Palmo</title>
</svelte:head>

<Clouds particleBackground={false} />
<div id="body">
	<p class="intro">
		Also refer to my 
		<a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer">Google Scholar profile</a>.
	</p>

	{#each sections as section}
		{@const sectionPubs = publications.filter((p) => p.status === section.status)}
		{#if sectionPubs.length > 0}
			<h2 class="section">{section.title}</h2>
			{#each groupByYear(sectionPubs) as { year, pubs }}
				<h3 class="year">{year}</h3>
				<ul class="entries">
					{#each pubs as pub}
						<li class="entry">
							<span class="citation">
								{@html highlightAuthor(pub.authors, pub.boldName)}
								({pub.year}), <span class="title">{pub.title}</span>{citationDetails(pub)}{#if pub.link},
								<a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.link}</a>{/if}
							</span>
						</li>
					{/each}
				</ul>
			{/each}
		{/if}
	{/each}
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

	.intro {
		margin: 0 0 1.5rem;
		color: var(--medium-gray);
	}

	.intro a {
		color: var(--black);
	}

	.section {
		font-family: GTAmerica-Bold, GTAmerica, sans-serif;
		font-size: 1.2em;
		font-weight: normal;
		margin: 2rem 0 0.75rem;
	}

	.section:first-of-type {
		margin-top: 0;
	}

	.year {
		font-family: GTAmerica-Bold, GTAmerica, sans-serif;
		font-size: 1.1em;
		font-weight: normal;
		margin: 1.25rem 0 0.5rem;
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
