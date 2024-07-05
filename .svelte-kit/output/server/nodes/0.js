import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.3be73c11.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f57c96d8.js","_app/immutable/chunks/paths.d9708b12.js"];
export const stylesheets = ["_app/immutable/assets/0.c6b67cc0.css","_app/immutable/assets/index.c6fe65fb.css"];
export const fonts = [];
