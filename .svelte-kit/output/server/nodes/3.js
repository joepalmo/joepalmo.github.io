

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project-grid/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.81529b62.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f57c96d8.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.d9708b12.js","_app/immutable/chunks/Clouds.44fbe3b2.js"];
export const stylesheets = ["_app/immutable/assets/3.4abfbc37.css","_app/immutable/assets/index.c6fe65fb.css","_app/immutable/assets/Clouds.54ef1c16.css"];
export const fonts = [];
