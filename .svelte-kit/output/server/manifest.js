export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.png","10.png","11.png","12.png","13.png","14.png","15.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8a162bf2.js","app":"_app/immutable/entry/app.c5d2818f.js","imports":["_app/immutable/entry/start.8a162bf2.js","_app/immutable/chunks/index.b7ecb65b.js","_app/immutable/chunks/singletons.c1f9d9f6.js","_app/immutable/entry/app.c5d2818f.js","_app/immutable/chunks/index.b7ecb65b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
