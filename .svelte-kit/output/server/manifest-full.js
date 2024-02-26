export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.lbSsFGs6.js","app":"_app/immutable/entry/app.o_cztPyg.js","imports":["_app/immutable/entry/start.lbSsFGs6.js","_app/immutable/chunks/entry.JoLE3aA1.js","_app/immutable/chunks/scheduler.UCdB1JrU.js","_app/immutable/entry/app.o_cztPyg.js","_app/immutable/chunks/scheduler.UCdB1JrU.js","_app/immutable/chunks/index.cx4D9pPH.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/birthdays",
				pattern: /^\/birthdays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
