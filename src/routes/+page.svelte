<script>
    import index from './index.svelte';
    import {onMount} from 'svelte'
    import { base } from '$app/paths';
    import Clouds from './Clouds.svelte';
</script>


<Clouds particleBackground={true} />
<div id="body">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.8.0/lib/p5.js"></script>
    <div class="about-blurb">
        Hello! I'm a PhD candidate studying atmospheric chemistry and climate science at MIT. I'm interested in modeling, data science / visualization, scientific computing, and science communication. <br> <br>
        I've previously worked as a data scientist in the climate-tech startup space, a research fellow at the Harvard-Smithsonian Center for Astrophysics, and an intern at NASA. Before that, I studied physics and astronomy at Amherst College. <br> <br>
        My email is <a id="email-link" href = "mailto: joepalmo7@gmail.com">joepalmo7@gmail.com</a>. I use he/him pronouns. 
    </div>
    <br>
    <div class="social-links">
        <a href="https://github.com/joepalmo" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/joe-palmo-7039b5178" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="https://scholar.google.com/citations?user=SiPb7lQAAAAJ" target="_blank" aria-label="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
    </div>
</div>

<style>
    #body {
        width: 40vw;
        min-width: 500px;
        margin: auto;
        margin-top: 15vh;
        font-size: 1.05em;
        line-height: 2rem;
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

    #email-link:hover {
        text-decoration: none !important;
        text-shadow: 0 0 5px var(--light-green);
        transform: scale(1.2);
    }

    .social-links {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .social-links a {
        margin: 0 10px;
        font-size: 1.5em;
        color: var(--black);
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .social-links a:hover {
        color: var(--light-green);
        transform: scale(1.2);
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
