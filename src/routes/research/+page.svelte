<script>
    import index from '../index.svelte';
    import {onMount} from 'svelte'
    import { base } from '$app/paths';
    import Project from './Project.svelte';
    import Clouds from '../Clouds.svelte';

    const particleBackground = false;

    // project data
    const projects = [
    {
    title: 'Using airborne observations to evaluate wildfire ozone production in GEOS-Chem',
    description: "Ozone is a pollutant that negatively impacts human health and a greenhouse gas that contributes to warming the global atmosphere. Wildfires are increasing in frequency and scale, but the impact they have on tropospheric ozone remains uncertain. Quantifying this impact requires understanding the chemistry within wildfire smoke plumes as they age and evolve and defining how well our global models represent that chemistry. This study compiles numerous aircraft observations to capture smoke evolution and identify key factors influencing ozone production. We show that fire-ozone production increases as plumes age, and that smoke mixing with anthropogenic emissions may drive even larger enhancements. We expose some limitations that a global atmospheric chemistry model has in representing the observed effects. Finally, we quantify the global impact of fires on ozone concentrations and human exposure within this global model.",
    links: {"preprint": "https://egusphere.copernicus.org/preprints/2025/egusphere-2025-1969/"},
    imagedata: "/img/O3Fire.png"
    },
    // Add more projects as needed
    ];
</script>

<Clouds particleBackground={false} />
<div id="body">
    <!-- Add the GIF at the top -->
    <div class="gif-container">
        <img src="https://svante.mit.edu/~jpalmo/gifs/co_globe.gif" alt="rotating globe with air pollution data">
    </div>
    <div class="research-blurb">  </div>
    <hr>
    {#each projects as project}
        <Project title={project.title} background={project.background} description={project.description} links={project.links} imagedata={project.imagedata} />
    {/each}
    <!-- <Project title="Patterns of tropospheric ozone change" background="Our aim is to diagnose the time-varying fingerprints of ozone change over the past few decades. We will use model output and observations to quantify the ozone production from synoptic-scale plume events that are not captured by current model resolution." link="" imagedata="" /> -->
</div>

<style>
    #body {
        width: 40vw;
        min-width: 500px;
        margin: auto;
        margin-top: 15vh;
        font-size: 1.0em;
        line-height: 1.2rem;
        padding: 10px 10px 50px 10px;
    }
    :global(canvas) {
        pointer-events: none;
    }

    :global(a:hover) {
        color: var(--black) !important;
        text-shadow: 0 0 5px rgba(0,255,0,.18);
    }

    a {
        text-decoration: none !important;
        color: var(--black);
    }

    .gif-container {
        text-align: center;
    }

    .gif-container img {
        max-width: 100%;
        height: auto;
        border-radius: 2px;
    }

    /* Responsive styles */
    @media (max-width: 600px) {
        #body {
            width: 90vw;
            min-width: auto;
            margin-top: 15vh;
            font-size: 1em;
            line-height: 1.5rem;
            padding: 10px 5px 30px 5px;
        }

        .about-blurb, .social-links {
            text-align: center;
            font-size: 1em;
            padding: 0 10px;
        }

        .social-links a {
            font-size: 1.2em;
            margin: 0 5px;
        }
    }
</style>