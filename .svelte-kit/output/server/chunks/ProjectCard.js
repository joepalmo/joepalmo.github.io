import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "./ssr.js";
import { b as base } from "./paths.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "#research-card.svelte-htqtfz.svelte-htqtfz{border:1px solid #ddd;padding:10px;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);margin-bottom:16px}.header.svelte-htqtfz.svelte-htqtfz{display:flex;align-items:center}.logo.svelte-htqtfz.svelte-htqtfz{margin-right:10%;border-radius:50%}.title-and-toggle.svelte-htqtfz.svelte-htqtfz{flex:1}#title.svelte-htqtfz.svelte-htqtfz{font-size:1.5em;color:#333;margin:0}#research-card.svelte-htqtfz p.svelte-htqtfz{font-size:1em;line-height:1.5;color:#666;margin:8px 0}#research-card.svelte-htqtfz a.svelte-htqtfz{display:inline-block;margin-top:8px;color:#1e90ff;text-decoration:none}#research-card.svelte-htqtfz a.svelte-htqtfz:hover{text-decoration:underline}#research-card.svelte-htqtfz img.svelte-htqtfz{width:20%;height:auto;margin-top:16px;border-radius:8px}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Untitled Project" } = $$props;
  let { background = "No background provided." } = $$props;
  let { links = {} } = $$props;
  let { logo = "/img/default.jpg" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  $$result.css.add(css);
  return `<div id="research-card" class="svelte-htqtfz"><div class="header svelte-htqtfz"><img${add_attribute("src", base + logo, 0)} alt="${"Logo for " + escape(title, true)}" class="logo svelte-htqtfz"> <div class="title-and-toggle svelte-htqtfz"><h2 id="title" class="svelte-htqtfz">${escape(title)}</h2></div></div> <p id="background" class="svelte-htqtfz"><b></b> <br> <span><!-- HTML_TAG_START -->${background}<!-- HTML_TAG_END --></span></p> ${Object.keys(links).length > 0 ? `<div class="links">${each(Object.entries(links), ([name, link], index) => {
    return `<span><a${add_attribute("href", link, 0)} class="svelte-htqtfz">${escape(name)}</a></span> ${index < Object.keys(links).length - 1 ? `<span class="separator" data-svelte-h="svelte-jiury6">|   </span>` : ``}`;
  })}</div>` : ``} </div>`;
});
export {
  ProjectCard as P
};
