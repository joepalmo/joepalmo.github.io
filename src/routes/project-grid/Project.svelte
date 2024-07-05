<script>
    export let title = "Untitled Project";
    export let logo = "/img/default.jpg"; // provide a default image path
    export let link = "#"; // link to the detailed project page

    import { base } from '$app/paths';
</script>

<a href="{link}" class="project-card">
    <img src={base + logo} alt="{title}" class="project-logo" />
    <div class="project-title">
        <h2>{title}</h2>
    </div>
</a>

<style>
    .project-card {
        position: relative;
        display: block;
        width: 100%;
        max-width: 150px;
        margin: 10px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: inherit;
    }

    .project-logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .project-title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        text-align: center;
        padding: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .project-card:hover .project-logo {
        transform: scale(1.1);
    }

    .project-card:hover .project-title {
        opacity: 1;
    }
</style>
