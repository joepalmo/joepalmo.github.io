<script>
	export let title = 'Untitled';
	export let tagline = '';
	export let href = '#';
	export let imagedata = '/img/default.jpg';

	import { base } from '$app/paths';

	$: imageSrc = imagedata.startsWith('http') ? imagedata : base + imagedata;
</script>

<a id="research-card" href={href}>
	<div class="image-wrap">
		<img src={imageSrc} alt="" />
	</div>
	<div class="content">
		<h2>{title}</h2>
		{#if tagline}
			<p class="tagline">{tagline}</p>
		{/if}
	</div>
</a>

<style>
	#research-card {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		margin-bottom: 2rem;
		text-decoration: none;
		color: inherit;
		border-radius: 4px;
		transition: background-color 0.2s ease;
	}

	#research-card:hover {
		background-color: rgba(163, 201, 80, 0.06);
	}

	.image-wrap {
		flex-shrink: 0;
		width: 120px;
		height: 120px;
		overflow: hidden;
		border-radius: 4px;
		line-height: 0;
	}

	#research-card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	#research-card:hover img {
		transform: scale(1.04);
	}

	.content {
		flex: 1;
		min-width: 0;
		padding-top: 0.1rem;
	}

	#research-card h2 {
		font-family: GTAmerica-Bold, GTAmerica, sans-serif;
		font-size: 1.15em;
		font-weight: normal;
		line-height: 1.35;
		color: var(--black);
		margin: 0;
	}

	.tagline {
		font-size: 0.92em;
		line-height: 1.45;
		color: var(--medium-gray);
		margin: 0.35rem 0 0;
	}

	@media (max-width: 600px) {
		.image-wrap {
			width: 90px;
			height: 90px;
		}

		#research-card {
			gap: 1rem;
		}
	}
</style>
