<script>
    import { base } from '$app/paths';
</script>

<div class="sticky-nav">
    <nav>
        <a class="nav-item" id="about-nav" href="{base}/">ABOUT</a>
        <a class="nav-item" id="research-nav" href="{base}/research">RESEARCH</a>
        <a class="nav-item" id="research-nav" href="{base}/project-grid">PROJECTS</a>
        <a class="nav-item" id="cv-nav" href="{ base }/JoePalmo.CV.2025.pdf" target="_blank">CV</a>
    </nav>
</div>

<style>

    :global(.current-section) {
        color: var(--black) !important;
        font-family: GTAmerica-Bold;
        text-shadow: 0 0 5px var(--light-green);
    }

    @media (max-width: 800px) {
        :global(.current-section-mobile) {
        display:block !important;
        color: var(--black) !important;
        font-family: GTAmerica-Bold;
        text-shadow: 0 0 5px var(--light-green);
    }
    }
    a {
        text-decoration: none !important;
        color: var(--black);
    }

    .sticky-nav {
        display: flex;
        position: fixed;
        top: 9vh;
        font-size: 1.2em;
        left: 50%;
        transform: translate(-50%, 0);
    }

    @media (max-width: 800px) {
        .nav-item {
            display: inline-block;
            font-size: 0.8em;
        }
    }
    .nav-item {
        padding-left: 1vw;
        padding-right: 1vw;
        color: var(--medium-gray);
        cursor: pointer;
    }
    .nav-item:hover {
            color: var(--black) !important;
            text-shadow: 0 0 5px var(--light-green);
        }
</style>