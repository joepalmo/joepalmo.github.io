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
    background: "Wildfires are likely to become more frequent and intense as global warming continues. They also emit compounds into the atmosphere that negatively impact air quality, health, and climate.  Among their emissions are precursors that react to produce ozone (O<sub>3</sub>), namely nitrogen oxides (NO<sub>x</sub>) and volatile organic compounds (VOCs). Ozone exposure is harmful to human health, it is the third most important anthropogenic greenhouse gas behind carbon dioxide and methane, and it is detrimental to crop and ecosystem productivity. Understanding ozone formation in fire plumes is essential for assessing the global impact of fires on ozone, and the effectiveness of surrounding policy, especially as wildfires become more pervasive.",
    description: "To capture the total ozone production that may be attributed to a smoke plume, we must bridge the gap between near-field fire plume chemistry and the remote atmosphere. Recent airborne observational campaigns provide rich datasets that make it possible to study the interactions between biomass burning plumes and urban pollution in high temporal resolution as they evolve. We evaluate the performance of GEOS-Chem, a global three-dimensional chemical transport model, against the dataset we compiled, and show that GEOS-Chem does not accurately reproduce the fast-moving chemistry that occurs within wildfire smoke plumes and therefore misrepresents the resulting ozone production. Informed by the discrepancies between GEOS-Chem and the observations, we test chemical trends observed in our dataset with a custom-built zero-dimensional chemical box model.",
    links: {},
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