<script>
	import Clouds from '../Clouds.svelte';
	import Project from './Project.svelte';
	import { researchAreas } from '$lib/researchAreas.js';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Research — Joe Palmo</title>
</svelte:head>

<Clouds particleBackground={false} />
<div id="body">
	<div class="gif-container">
		<img
			src="https://svante.mit.edu/~jpalmo/gifs/co_globe.gif"
			alt="rotating globe with air pollution data"
		/>
	</div>
    
	{#each researchAreas as area}
		<Project
			title={area.title}
			tagline={area.tagline}
			imagedata={area.image}
			href="{base}/research/{area.slug}"
		/>
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
		margin: 0 0 2rem;
		color: var(--medium-gray);
	}

	.intro a {
		color: var(--black);
		text-decoration: none;
	}

	.intro a:hover {
		text-shadow: 0 0 5px var(--light-green);
	}

	.gif-container {
		text-align: center;
		margin-bottom: 2rem;
	}

	.gif-container img {
		max-width: 100%;
		height: auto;
		border-radius: 2px;
	}

	@media (max-width: 600px) {
		#body {
			width: 90vw;
			min-width: auto;
			padding: 10px 5px 30px 5px;
		}
	}
</style>
