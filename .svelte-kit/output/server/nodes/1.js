

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0143a251.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f57c96d8.js","_app/immutable/chunks/singletons.4bf6ba9f.js","_app/immutable/chunks/paths.d9708b12.js"];
export const stylesheets = [];
export const fonts = [];
