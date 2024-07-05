import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                */import { C as Clouds } from "../../chunks/Clouds.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#body.svelte-ezllqm.svelte-ezllqm{width:40vw;min-width:500px;margin:auto;margin-top:15vh;font-size:1.05em;line-height:2rem;padding:10px 10px 50px 10px}canvas{pointer-events:none}a:hover{color:var(--black) !important;text-shadow:0 0 5px rgba(0,255,0,.18)}a.svelte-ezllqm.svelte-ezllqm{text-decoration:none !important;color:var(--black)}#email-link.svelte-ezllqm.svelte-ezllqm:hover{text-decoration:none !important;text-shadow:0 0 5px var(--light-green);transform:scale(1.2)}.social-links.svelte-ezllqm.svelte-ezllqm{margin-top:20px;display:flex;justify-content:center}.social-links.svelte-ezllqm a.svelte-ezllqm{margin:0 10px;font-size:1.5em;color:var(--black);transition:color 0.3s ease, transform 0.3s ease}.social-links.svelte-ezllqm a.svelte-ezllqm:hover{color:var(--light-green);transform:scale(1.2)}@media(max-width: 600px){#body.svelte-ezllqm.svelte-ezllqm{width:90vw;min-width:auto;margin-top:15vh;font-size:1em;line-height:1.5rem;padding:10px 5px 30px 5px}.about-blurb.svelte-ezllqm.svelte-ezllqm,.social-links.svelte-ezllqm.svelte-ezllqm{text-align:center;font-size:1em;padding:0 10px}.social-links.svelte-ezllqm a.svelte-ezllqm{font-size:1.2em;margin:0 5px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Clouds, "Clouds").$$render($$result, { particleBackground: true }, {}, {})} <div id="body" class="svelte-ezllqm" data-svelte-h="svelte-dw9xg4"><script src="https://cdn.jsdelivr.net/npm/p5@1.8.0/lib/p5.js"><\/script> <div class="about-blurb svelte-ezllqm">Hello! I&#39;m a PhD candidate studying atmospheric chemistry and climate science at MIT. I&#39;m interested in modeling, data science / visualization, scientific computing, and science communication. <br> <br>
        I&#39;ve previously worked as a data scientist in the climate-tech startup space, a research fellow at the Harvard-Smithsonian Center for Astrophysics, and an intern at NASA. Before that, I studied physics and astronomy at Amherst College. <br> <br>
        My email is <a id="email-link" href="mailto: joepalmo7@gmail.com" class="svelte-ezllqm">joepalmo7@gmail.com</a>. I use he/him pronouns.</div> <br> <div class="social-links svelte-ezllqm"><a href="https://github.com/joepalmo" target="_blank" aria-label="GitHub" class="svelte-ezllqm"><i class="fab fa-github"></i></a> <a href="https://linkedin.com/in/joe-palmo-7039b5178" target="_blank" aria-label="LinkedIn" class="svelte-ezllqm"><i class="fab fa-linkedin"></i></a> <a href="https://scholar.google.com/citations?user=SiPb7lQAAAAJ" target="_blank" aria-label="Google Scholar" class="svelte-ezllqm"><i class="fas fa-graduation-cap"></i></a></div> </div>`;
});
export {
  Page as default
};
