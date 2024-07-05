<script>
    import index from '../index.svelte';
    import {onMount} from 'svelte'
    import { base } from '$app/paths';
    import Project from './Project.svelte';
    import Clouds from '../Clouds.svelte';

    const particleBackground = false;

    //projects data
    const projects = [
        {
        title: 'py-tofspec',
        logo: '/img/tofspec_logo.svg',
        link: '/projects/py-tofspec'
        // link: '/projects_old'
        },
        {
        title: 'Sensing the Dynamic Universe',
        logo: '/img/SDU_logo.png',
        link: '/projects/sensing-the-dynamic-universe'

        },
        {
        title: 'NOAA HMS Viewer',
        logo: '/img/noaa_hms.png',
        link: '/projects/noaa-hms-viewer'
        },
        // Add more projects as needed
    ];
</script>

<Clouds particleBackground={false} />
<div id="body">
    <div class="projects-grid">
        {#each projects as project}
            <Project title={project.title} logo={project.logo} link={project.link} />
        {/each}
    </div>
</div>

<style>
    .projects-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        padding: 20px;
    }
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
