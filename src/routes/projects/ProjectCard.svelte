<script>
    export let title = "Untitled Project";
    export let background = "No background provided.";
    export let links = {}; // modify the prop to accept an array of links
    export let logo = "/img/default.jpg"; // provide a default image path

    import { base } from '$app/paths';

    let showDetails = true;

</script>

<div id="research-card">
    <div class="header">
        <img src={base + logo} alt="Logo for {title}" class="logo" />
        <div class="title-and-toggle">
            <h2 id="title">{title}</h2>
        </div>
    </div>
    <p id="background"><b></b> <br> <span>{@html background}</span></p>
    {#if Object.keys(links).length > 0}
        <div class="links">
            {#each Object.entries(links) as [name, link], index}
                <span><a href={link}>{name}</a></span>
                {#if index < Object.keys(links).length - 1}
                    <span class="separator">   |   </span>
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style>
    #research-card {
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 16px;
    }

    .header {
        display: flex;
        align-items: center;
    }

    .logo {

        margin-right: 10%;
        border-radius: 50%;
    }

    .title-and-toggle {
        flex: 1;
    }

    #title {
        font-size: 1.5em;
        color: #333;
        margin: 0;
    }

    #toggle-switch {
        font-size: 1em;
        color: #007bff;
        cursor: pointer;
        margin: 8px 0;
    }

    #toggle-switch:hover {
        text-decoration: underline;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    #details {
        transition: all 0.3s ease-in-out;
    }

    #research-card p {
        font-size: 1em;
        line-height: 1.5;
        color: #666;
        margin: 8px 0;
    }

    #research-card a {
        display: inline-block;
        margin-top: 8px;
        color: #1e90ff;
        text-decoration: none;
    }

    #research-card a:hover {
        text-decoration: underline;
    }

    #research-card img {
        width: 20%;
        height: auto;
        margin-top: 16px;
        border-radius: 8px;
    }

    #research-card hr {
        margin-top: 16px;
        border: none;
        border-top: 1px solid #ddd;
    }

    #research-card sub, #research-card sup {
        font-size: 0.8em;
        line-height: 0;
        vertical-align: baseline;
        position: relative;
    }

    #research-card sub {
        bottom: -0.2em;
    }

    #research-card sup {
        top: -0.2em;
    }

    ul {
        margin: 8px 0;
        padding-left: 16px;
    }

    ul li {
        margin-bottom: 8px;
    }
</style>
