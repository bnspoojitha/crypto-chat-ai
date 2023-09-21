"use strict";
(() => {
var exports = {};
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 27179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/search/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/search/route.ts

async function POST(req) {
    const { token, input } = await req.json();
    if (!token || !input) {
        return next_response/* default */.Z.json({
            message: "Missing required data"
        });
    }
    const res = await fetch("http://3.26.157.3:5001/api-chatbot-ai/api/chatbot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            input
        })
    });
    const response = await res.json();
    return next_response/* default */.Z.json(response);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsearch%2Froute&name=app%2Fapi%2Fsearch%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.ts&appDir=%2FUsers%2Fdilumrathnayake%2FDocuments%2FGitHub%2Fchat-ai%2Fsrc%2Fapp&appPaths=%2Fapi%2Fsearch%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/search/route",
        pathname: "/api/search",
        filename: "route",
        bundlePath: "app/api/search/route"
    },
    resolvedPagePath: "/Users/dilumrathnayake/Documents/GitHub/chat-ai/src/app/api/search/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/search/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,335], () => (__webpack_exec__(27179)));
module.exports = __webpack_exports__;

})();