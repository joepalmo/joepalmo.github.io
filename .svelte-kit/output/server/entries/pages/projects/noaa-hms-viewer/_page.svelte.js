import { c as create_ssr_component, v as validate_component, f as each } from "../../../../chunks/ssr.js";
/* empty css                                                      */import { P as ProjectCard } from "../../../../chunks/ProjectCard.js";
import { C as Clouds } from "../../../../chunks/Clouds.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#body.svelte-v1lfnd{width:40vw;min-width:500px;margin:auto;margin-top:15vh;font-size:1.0em;line-height:1.2rem;padding:10px 10px 50px 10px}canvas{pointer-events:none}a:hover{color:var(--black) !important;text-shadow:0 0 5px rgba(0,255,0,.18)}@media(max-width: 600px){#body.svelte-v1lfnd{width:90vw;min-width:auto;margin-top:15vh;font-size:1em;line-height:1.5rem;padding:10px 5px 30px 5px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      title: "NOAA Hazard Mapping System Smoke Visualization Tool",
      logo: "/img/noaa_hms.png",
      background: "Tool for visualizing smoke plumes over the U.S. using NOAA HMS satellite data.",
      links: {
        "Observable": "https://observablehq.com/d/601a7b6ad3644748"
      }
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Clouds, "Clouds").$$render($$result, { particleBackground: false }, {}, {})} <div id="body" class="svelte-v1lfnd"><div class="project-blurb" data-svelte-h="svelte-1vyvstg"></div> <div>${each(projects, (project) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render(
      $$result,
      {
        title: project.title,
        logo: project.logo,
        background: project.background,
        links: project.links
      },
      {},
      {}
    )}`;
  })}</div> </div>`;
});
export {
  Page as default
};
