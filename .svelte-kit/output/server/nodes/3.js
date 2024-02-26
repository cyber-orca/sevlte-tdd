import * as server from '../entries/pages/birthdays/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/birthdays/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/birthdays/+page.server.js";
export const imports = ["_app/immutable/nodes/3.r4nr3f0k.js","_app/immutable/chunks/scheduler.UCdB1JrU.js","_app/immutable/chunks/index.cx4D9pPH.js"];
export const stylesheets = ["_app/immutable/assets/3.u7UUgcXl.css"];
export const fonts = [];
