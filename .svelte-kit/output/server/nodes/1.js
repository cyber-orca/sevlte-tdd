

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.mj9A7eI6.js","_app/immutable/chunks/scheduler.UCdB1JrU.js","_app/immutable/chunks/index.cx4D9pPH.js","_app/immutable/chunks/entry.JoLE3aA1.js"];
export const stylesheets = [];
export const fonts = [];
