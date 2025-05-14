<script>
    export let title = "Untitled Project";
    export let background = "No background provided.";
    export let description = "No description provided.";
    export let links = {}; // modify the prop to accept an array of links
    export let togglemessage = "Click to hide details";
    export let imagedata = "/img/default.jpg"; // provide a default image path

    import { base } from '$app/paths';

    let showDetails = true;

    function toggleDetails() {
        showDetails = !showDetails;
        togglemessage = showDetails ? "Click to hide details" : "Click to show details";
    }
</script>

<div id="research-card">
    <div class="header">
        <h2 id="title">{title}</h2>
        <p id="toggle-switch" on:click={toggleDetails}>{togglemessage}</p>
    </div>
    <hr /> 
    {#if showDetails}
        <div id="details">
            <!-- <p id="background"><b>Background: </b> <br> <span>{@html background}</span></p> -->
            <p id="description"><b></b> <br> <span>{@html description}</span></p>
        </div>
        <hr /> 
    {/if}
    {#if Object.keys(links).length > 0}
    <div class="links">
        {#each Object.entries(links) as [name, link], index}
            <span><a href={link}>{name}</a></span>
            {#if index < Object.keys(links).length - 1}
                <span class="separator">   |   </span>
            {/if}
        {/each}
    </div>
    <hr /> 
    {/if}
    <img src={base + imagedata} alt="Image for {title}" />
    <hr />
</div>

<style>
    #research-card {
        border: 1px solid #ddd;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 16px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #research-card h2 {
        font-size: 1.5em;
        color: #333;
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

    #research-card h2 {
        line-height: 1.4;
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
        width: 100%;
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
</style>


