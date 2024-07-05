export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["JoePalmo.CV.2022.pdf","favicon.png","fonts/GT-America-Black.otf","fonts/GT-America-Bold.otf","fonts/GT-America-Condensed-Bold.otf","fonts/GT-America-Medium.otf","fonts/GT-America-Regular-Italic.otf","fonts/GT-America-Regular.otf","fonts/IBMPlexMono-Light.ttf","fonts/IBMPlexMono-Regular.ttf","img/O3Fire.png","img/SDU_logo.png","img/default.jpg","img/noaa_hms.png","img/tofspec_logo.svg","js/sketch.js"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".otf":"font/otf",".ttf":"font/ttf",".jpg":"image/jpeg",".svg":"image/svg+xml",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.3ad248a4.js","app":"_app/immutable/entry/app.20cc7197.js","imports":["_app/immutable/entry/start.3ad248a4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.4bf6ba9f.js","_app/immutable/chunks/paths.d9708b12.js","_app/immutable/entry/app.20cc7197.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.f57c96d8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/project-grid",
				pattern: /^\/project-grid\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/noaa-hms-viewer",
				pattern: /^\/projects\/noaa-hms-viewer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/py-tofspec",
				pattern: /^\/projects\/py-tofspec\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/sensing-the-dynamic-universe",
				pattern: /^\/projects\/sensing-the-dynamic-universe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
