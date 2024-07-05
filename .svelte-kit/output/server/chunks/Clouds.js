import { c as create_ssr_component, e as escape } from "./ssr.js";
import { b as base } from "./paths.js";
const Clouds_svelte_svelte_type_style_lang = "";
const css = {
  code: "#clouds.svelte-58sefz{top:0;position:relative;width:0vw;height:0vw;pointer-events:none}",
  map: null
};
const Clouds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { particleBackground = true } = $$props;
  if ($$props.particleBackground === void 0 && $$bindings.particleBackground && particleBackground !== void 0)
    $$bindings.particleBackground(particleBackground);
  $$result.css.add(css);
  {
    {
      if (typeof window !== "undefined") {
        window.particleBackground = particleBackground;
      }
    }
  }
  return `  <div id="clouds" class="svelte-58sefz" data-svelte-h="svelte-1w6wufn"><script src="${escape(base, true) + "/js/sketch.js"}"><\/script> </div>`;
});
export {
  Clouds as C
};
