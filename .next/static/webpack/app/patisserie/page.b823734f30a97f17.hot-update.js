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

/***/ "(app-pages-browser)/./src/components/gallery/Crepres.jsx":
/*!********************************************!*\
  !*** ./src/components/gallery/Crepres.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Crepres; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_images_crepesAuchocolat_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/images/crepesAuchocolat.jpeg */ \"(app-pages-browser)/./public/assets/images/crepesAuchocolat.jpeg\");\n\n\n\n\nconst crepes = [\n    {\n        id: 1,\n        imageUrl: {\n            image1: _public_assets_images_crepesAuchocolat_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        },\n        alt: \"Crepes au chocolat\"\n    }\n];\nfunction Crepres() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: crepes.map((crepe)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ima\", {\n                src: crepe.imageUrl,\n                width: 500,\n                height: 500,\n                alt: crepe.alt,\n                className: \"w-full max-w-sm rounded-md h-56 sm:h-40 object-cover\"\n            }, crepe.id, false, {\n                fileName: \"/workspace/Colossal/src/components/gallery/Crepres.jsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, this))\n    }, void 0, false, {\n        fileName: \"/workspace/Colossal/src/components/gallery/Crepres.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_c = Crepres;\nvar _c;\n$RefreshReg$(_c, \"Crepres\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvQ3JlcHJlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSztBQUMwQztBQUd4RSxNQUFNRyxTQUFTO0lBQ1g7UUFDSUMsSUFBSTtRQUNKQyxVQUFVO1lBQUNILE1BQU1BLHFGQUFBQTtRQUFBO1FBQ2pCSSxLQUFLO0lBQ1Q7Q0FNSDtBQUVjLFNBQVNDO0lBQ3BCLHFCQUNJLDhEQUFDQztrQkFFT0wsT0FBT00sR0FBRyxDQUFDLENBQUNDLHNCQUNSLDhEQUFDQztnQkFFR0MsS0FBS0YsTUFBTUwsUUFBUTtnQkFDbkJRLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JSLEtBQUtJLE1BQU1KLEdBQUc7Z0JBQ2RTLFdBQVU7ZUFMTEwsTUFBTU4sRUFBRTs7Ozs7Ozs7OztBQVVyQztLQWhCd0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvQ3JlcHJlcy5qc3g/NTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvY3JlcGVzQXVjaG9jb2xhdC5qcGVnJ1xuXG5cbmNvbnN0IGNyZXBlcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpbWFnZVVybDoge2ltYWdlMX0sXG4gICAgICAgIGFsdDogJ0NyZXBlcyBhdSBjaG9jb2xhdCdcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgaWQ6IDIsXG4gICAgLy8gICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9wdXNoeS1tYXB1c2F1cnVzLTM3My5ub3Rpb24uc2l0ZS9pbWFnZS9odHRwcyUzQSUyRiUyRnByb2QtZmlsZXMtc2VjdXJlLnMzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tJTJGMDBmMTVhNmUtODY3My00YTA0LWEzNTAtZjk1ZDNjMmNlMzg0JTJGNWU4MmI4YzMtZDJiYS00NGNlLTg0ZmUtNjE1OTNiMWJiZTEwJTJGM0VCRjYzQTItMjU1MS00RDA4LTg0MEQtOUJGNEUwRTYwQjRDLmpwZWc/dGFibGU9YmxvY2smaWQ9OGUwYmE3MzktZDE1ZC00MDE3LWFjNzItMWNhNWE2MWYzNTUzJnNwYWNlSWQ9MDBmMTVhNmUtODY3My00YTA0LWEzNTAtZjk1ZDNjMmNlMzg0JndpZHRoPTIwMDAmdXNlcklkPSZjYWNoZT12MicsXG4gICAgLy8gICAgIGFsdDogJydcbiAgICAvLyB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVwcmVzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3JlcGVzLm1hcCgoY3JlcGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGltYVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjcmVwZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3JlcGUuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NyZXBlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LXNtIHJvdW5kZWQtbWQgaC01NiBzbTpoLTQwIG9iamVjdC1jb3ZlcidcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJpbWFnZTEiLCJjcmVwZXMiLCJpZCIsImltYWdlVXJsIiwiYWx0IiwiQ3JlcHJlcyIsImRpdiIsIm1hcCIsImNyZXBlIiwiaW1hIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/gallery/Crepres.jsx\n"));

/***/ })

});