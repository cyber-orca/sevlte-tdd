

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.EvkBGyml.js","_app/immutable/chunks/scheduler.UCdB1JrU.js","_app/immutable/chunks/index.cx4D9pPH.js"];
export const stylesheets = [];
export const fonts = [];
