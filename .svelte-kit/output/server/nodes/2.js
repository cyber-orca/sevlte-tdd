

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.tnoCqaR3.js","_app/immutable/chunks/scheduler.UCdB1JrU.js","_app/immutable/chunks/index.cx4D9pPH.js"];
export const stylesheets = [];
export const fonts = [];
