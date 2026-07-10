<script>
    import { base } from '$app/paths';
</script>

<div class="sticky-nav">
    <nav>
        <a class="nav-item" id="about-nav" href="{base}/">ABOUT</a>
        <a class="nav-item" id="research-nav" href="{base}/research">RESEARCH</a>
        <a class="nav-item" id="publications-nav" href="{base}/publications">PUBLICATIONS</a>
        <a class="nav-item" id="projects-nav" href="{base}/project-grid">OTHER</a>
        <a class="nav-item" id="cv-nav" href="{ base }/JoePalmo.CV.2025.pdf" target="_blank">CV</a>
    </nav>
</div>

<style>

    :global(.current-section) {
        color: var(--black) !important;
        font-family: GTAmerica-Bold;
        text-shadow: 0 0 5px var(--light-green);
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

    .nav-item {
        padding-left: 1vw;
        padding-right: 1vw;
        color: var(--medium-gray);
        cursor: pointer;
    }

    @media (max-width: 800px) {
        .sticky-nav {
            font-size: clamp(0.55rem, 2.8vw, 0.85rem);
            left: 0;
            right: 0;
            transform: none;
            width: 100%;
            max-width: 100%;
            padding: 0;
            box-sizing: border-box;
            justify-content: center;
        }

        nav {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            max-width: 100%;
            padding: 0 8px;
            box-sizing: border-box;
        }

        .nav-item {
            padding-left: 0.35vw;
            padding-right: 0.35vw;
            flex-shrink: 0;
        }

        :global(.current-section-mobile) {
            color: var(--black) !important;
            font-family: GTAmerica-Bold;
            text-shadow: 0 0 5px var(--light-green);
        }
    }
    .nav-item:hover {
            color: var(--black) !important;
            text-shadow: 0 0 5px var(--light-green);
        }
</style>