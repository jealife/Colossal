"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/patisserie/page",{

/***/ "(app-pages-browser)/./src/components/tab patisserie/TabPatisserie.jsx":
/*!*********************************************************!*\
  !*** ./src/components/tab patisserie/TabPatisserie.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tab: function() { return /* binding */ Tab; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Tabs = (param)=>{\n    let { children } = param;\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(children[0].props.label);\n    const handleClick = (e, newActiveTab)=>{\n        e.preventDefault();\n        setActiveTab(newActiveTab);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl w-full px-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-2xl   md:max-w-full [&_button]:max-w-fit inline-flex flex-nowrap  gap-4 md:px-4 overflow-x-scroll hide-scroll-bar md:[mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]\",\n                children: children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(activeTab === child.props.label ? \" bg-pink-950 text-slate-50 rounded-full\" : \"max-w-max rounded-full bg-pink-950/30 \", \" flex-shrink-0 inline-flex text-gray-700 text-xs font-medium py-1 px-2 max-w-max rounded-full \"),\n                        onClick: (e)=>handleClick(e, child.props.label),\n                        children: child.props.label\n                    }, child.props.label, false, {\n                        fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-4\",\n                children: children.map((child)=>{\n                    if (child.props.label === activeTab) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: child.props.children\n                        }, child.props.label, false, {\n                            fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 32\n                        }, undefined);\n                    }\n                    return null;\n                })\n            }, void 0, false, {\n                fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Tabs, \"f0ubdKYUaCPZJDIT/JMACRMEHzQ=\");\n_c = Tabs;\nconst Tab = (param)=>{\n    let { label, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        label: label,\n        className: \"hidden\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Tab;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RhYiBwYXRpc3NlcmllL1RhYlBhdGlzc2VyaWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDRSxRQUFRLENBQUMsRUFBRSxDQUFDRyxLQUFLLENBQUNDLEtBQUs7SUFFbEUsTUFBTUMsY0FBYyxDQUFDQyxHQUFHQztRQUNwQkQsRUFBRUUsY0FBYztRQUNoQk4sYUFBYUs7SUFDakI7SUFFQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWVixTQUFTVyxHQUFHLENBQUNDLENBQUFBLHNCQUNWLDhEQUFDQzt3QkFFR0gsV0FBVyxHQUNOLE9BRFNULGNBQWNXLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSyxHQUFHLDRDQUE0QywwQ0FDdkY7d0JBQ0xVLFNBQVNSLENBQUFBLElBQUtELFlBQVlDLEdBQUdNLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSztrQ0FFN0NRLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSzt1QkFMYlEsTUFBTVQsS0FBSyxDQUFDQyxLQUFLOzs7Ozs7Ozs7OzBCQVNsQyw4REFBQ0s7Z0JBQUlDLFdBQVU7MEJBQ1ZWLFNBQVNXLEdBQUcsQ0FBQ0MsQ0FBQUE7b0JBQ1YsSUFBSUEsTUFBTVQsS0FBSyxDQUFDQyxLQUFLLEtBQUtILFdBQVc7d0JBQ2pDLHFCQUFPLDhEQUFDUTtzQ0FBNkJHLE1BQU1ULEtBQUssQ0FBQ0gsUUFBUTsyQkFBeENZLE1BQU1ULEtBQUssQ0FBQ0MsS0FBSzs7Ozs7b0JBQ3RDO29CQUNBLE9BQU87Z0JBQ1g7Ozs7Ozs7Ozs7OztBQUloQjtHQWhDTUw7S0FBQUE7QUFrQ04sTUFBTWdCLE1BQU07UUFBQyxFQUFFWCxLQUFLLEVBQUVKLFFBQVEsRUFBRTtJQUM1QixxQkFDSSw4REFBQ1M7UUFBSUwsT0FBT0E7UUFBT00sV0FBVTtrQkFDeEJWOzs7Ozs7QUFHYjtNQU5NZTtBQU9lIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RhYiBwYXRpc3NlcmllL1RhYlBhdGlzc2VyaWUuanN4PzQzNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUYWJzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShjaGlsZHJlblswXS5wcm9wcy5sYWJlbCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBuZXdBY3RpdmVUYWIpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRBY3RpdmVUYWIobmV3QWN0aXZlVGFiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgdy1mdWxsIHB4LTIgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgICBtZDptYXgtdy1mdWxsIFsmX2J1dHRvbl06bWF4LXctZml0IGlubGluZS1mbGV4IGZsZXgtbm93cmFwICBnYXAtNCBtZDpweC00IG92ZXJmbG93LXgtc2Nyb2xsIGhpZGUtc2Nyb2xsLWJhciBtZDpbbWFzay1pbWFnZTpfbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LHRyYW5zcGFyZW50XzAsX2JsYWNrXzUwcHgsX2JsYWNrX2NhbGMoMTAwJS01MHB4KSx0cmFuc3BhcmVudF8xMDAlKV1cIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKGNoaWxkID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZC5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlVGFiID09PSBjaGlsZC5wcm9wcy5sYWJlbCA/ICcgYmctcGluay05NTAgdGV4dC1zbGF0ZS01MCByb3VuZGVkLWZ1bGwnIDogJ21heC13LW1heCByb3VuZGVkLWZ1bGwgYmctcGluay05NTAvMzAgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmxleC1zaHJpbmstMCBpbmxpbmUtZmxleCB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1tZWRpdW0gcHktMSBweC0yIG1heC13LW1heCByb3VuZGVkLWZ1bGwgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSwgY2hpbGQucHJvcHMubGFiZWwpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGQucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLmxhYmVsID09PSBhY3RpdmVUYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17Y2hpbGQucHJvcHMubGFiZWx9PntjaGlsZC5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IFRhYiA9ICh7IGxhYmVsLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBsYWJlbD17bGFiZWx9IGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCB7IFRhYnMsIFRhYiB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFicyIsImNoaWxkcmVuIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwicHJvcHMiLCJsYWJlbCIsImhhbmRsZUNsaWNrIiwiZSIsIm5ld0FjdGl2ZVRhYiIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2hpbGQiLCJidXR0b24iLCJvbkNsaWNrIiwiVGFiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/tab patisserie/TabPatisserie.jsx\n"));

/***/ })

});