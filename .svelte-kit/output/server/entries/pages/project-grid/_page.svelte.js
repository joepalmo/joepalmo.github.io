import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/ssr.js";
/* empty css                                                   */import { b as base } from "../../../chunks/paths.js";
import { C as Clouds } from "../../../chunks/Clouds.js";
const Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".project-card.svelte-tb29nu.svelte-tb29nu{position:relative;display:block;width:100%;max-width:150px;margin:10px;overflow:hidden;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);text-decoration:none;color:inherit}.project-logo.svelte-tb29nu.svelte-tb29nu{width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease}.project-title.svelte-tb29nu.svelte-tb29nu{position:absolute;bottom:0;left:0;right:0;background:rgba(0, 0, 0, 0.7);color:white;text-align:center;padding:10px;opacity:0;transition:opacity 0.3s ease}.project-card.svelte-tb29nu:hover .project-logo.svelte-tb29nu{transform:scale(1.1)}.project-card.svelte-tb29nu:hover .project-title.svelte-tb29nu{opacity:1}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Untitled Project" } = $$props;
  let { logo = "/img/default.jpg" } = $$props;
  let { link = "#" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", link, 0)} class="project-card svelte-tb29nu"><img${add_attribute("src", base + logo, 0)}${add_attribute("alt", title, 0)} class="project-logo svelte-tb29nu"> <div class="project-title svelte-tb29nu"><h2>${escape(title)}</h2></div> </a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-grid.svelte-1e2xk3h{display:flex;flex-wrap:wrap;justify-content:left;padding:20px}#body.svelte-1e2xk3h{width:40vw;min-width:500px;margin:auto;margin-top:15vh;font-size:1.0em;line-height:1.2rem;padding:10px 10px 50px 10px}canvas{pointer-events:none}a:hover{color:var(--black) !important;text-shadow:0 0 5px rgba(0,255,0,.18)}@media(max-width: 600px){#body.svelte-1e2xk3h{width:90vw;min-width:auto;margin-top:15vh;font-size:1em;line-height:1.5rem;padding:10px 5px 30px 5px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      title: "py-tofspec",
      logo: "/img/tofspec_logo.svg",
      link: "/projects/py-tofspec"
    },
    {
      title: "Sensing the Dynamic Universe",
      // link: '/projects_old'
      logo: "/img/SDU_logo.png",
      link: "/projects/sensing-the-dynamic-universe"
    },
    {
      title: "NOAA HMS Viewer",
      logo: "/img/noaa_hms.png",
      link: "/projects/noaa-hms-viewer"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Clouds, "Clouds").$$render($$result, { particleBackground: false }, {}, {})} <div id="body" class="svelte-1e2xk3h"><div class="projects-grid svelte-1e2xk3h">${each(projects, (project) => {
    return `${validate_component(Project, "Project").$$render(
      $$result,
      {
        title: project.title,
        logo: project.logo,
        link: project.link
      },
      {},
      {}
    )}`;
  })}</div> </div>`;
});
export {
  Page as default
};
