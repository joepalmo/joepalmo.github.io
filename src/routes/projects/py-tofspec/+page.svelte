<script>
    import index from '../../index.svelte';
    import {onMount} from 'svelte'
    import { base } from '$app/paths';
    import ProjectCard from '../ProjectCard.svelte';
    import Clouds from '../../Clouds.svelte';

    const particleBackground = false;

    // project data
    const projects = [
        {
        title: 'py-tofspec',
        logo: '/img/tofspec_logo.svg',
        background: 'python package for processing and analyzing time-of-flight mass spectrometry data',
        links: {'Github': 'https://github.com/Meredith-Lab/py-tofspec', 'Documentation': 'https://meredith-lab.github.io/py-tofspec/'},
        },
        // Add more projects as needed
    ];
</script>

<Clouds particleBackground={false} />
<div id="body">
    <div class="project-blurb"> </div>
    
    <div>
        {#each projects as project}
            <ProjectCard title={project.title} logo={project.logo} background={project.background} links={project.links} />
        {/each}
    </div>
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