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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tab: function() { return /* binding */ Tab; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Tabs = (param)=>{\n    let { children } = param;\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(children[0].props.label);\n    const handleClick = (e, newActiveTab)=>{\n        e.preventDefault();\n        setActiveTab(newActiveTab);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl w-full px-2  bg-[#e8eaeb] \",\n        \"data-aos\": \"fade-up\",\n        \"data-aos-duration\": \"800\",\n        \"data-aos-delay\": \"100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-2xl py-2  bg-[#e8eaeb]   md:max-w-full [&_button]:max-w-fit inline-flex flex-nowrap  gap-4 md:px-4 overflow-x-scroll hide-scroll-bar \",\n                children: children.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(activeTab === child.props.label ? \" bg-pink-950 text-slate-50 rounded-full\" : \"max-w-max rounded-full bg-pink-950/5 \", \"  flex-shrink-0 inline-flex text-gray-700 text-sm font-medium p-2 max-w-max rounded-full \"),\n                        onClick: (e)=>handleClick(e, child.props.label),\n                        children: child.props.label\n                    }, child.props.label, false, {\n                        fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-4\",\n                children: children.map((child)=>{\n                    if (child.props.label === activeTab) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: child.props.children\n                        }, child.props.label, false, {\n                            fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 32\n                        }, undefined);\n                    }\n                    return null;\n                })\n            }, void 0, false, {\n                fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Tabs, \"f0ubdKYUaCPZJDIT/JMACRMEHzQ=\");\n_c = Tabs;\nconst Tab = (param)=>{\n    let { label, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        label: label,\n        className: \"hidden\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspaces/Colossal/src/components/tab patisserie/TabPatisserie.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Tab;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RhYiBwYXRpc3NlcmllL1RhYlBhdGlzc2VyaWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDRSxRQUFRLENBQUMsRUFBRSxDQUFDRyxLQUFLLENBQUNDLEtBQUs7SUFFbEUsTUFBTUMsY0FBYyxDQUFDQyxHQUFHQztRQUNwQkQsRUFBRUUsY0FBYztRQUNoQk4sYUFBYUs7SUFDakI7SUFFQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTtRQUNYQyxZQUFTO1FBQ1RDLHFCQUFrQjtRQUNsQkMsa0JBQWU7OzBCQUVmLDhEQUFDSjtnQkFBSUMsV0FBVTswQkFDVlYsU0FBU2MsR0FBRyxDQUFDQyxDQUFBQSxzQkFDViw4REFBQ0M7d0JBRUdOLFdBQVcsR0FDTixPQURTVCxjQUFjYyxNQUFNWixLQUFLLENBQUNDLEtBQUssR0FBRyw0Q0FBNEMseUNBQ3ZGO3dCQUNMYSxTQUFTWCxDQUFBQSxJQUFLRCxZQUFZQyxHQUFHUyxNQUFNWixLQUFLLENBQUNDLEtBQUs7a0NBRTdDVyxNQUFNWixLQUFLLENBQUNDLEtBQUs7dUJBTGJXLE1BQU1aLEtBQUssQ0FBQ0MsS0FBSzs7Ozs7Ozs7OzswQkFTbEMsOERBQUNLO2dCQUFJQyxXQUFVOzBCQUNWVixTQUFTYyxHQUFHLENBQUNDLENBQUFBO29CQUNWLElBQUlBLE1BQU1aLEtBQUssQ0FBQ0MsS0FBSyxLQUFLSCxXQUFXO3dCQUNqQyxxQkFBTyw4REFBQ1E7c0NBQTZCTSxNQUFNWixLQUFLLENBQUNILFFBQVE7MkJBQXhDZSxNQUFNWixLQUFLLENBQUNDLEtBQUs7Ozs7O29CQUN0QztvQkFDQSxPQUFPO2dCQUNYOzs7Ozs7Ozs7Ozs7QUFJaEI7R0FwQ01MO0tBQUFBO0FBc0NOLE1BQU1tQixNQUFNO1FBQUMsRUFBRWQsS0FBSyxFQUFFSixRQUFRLEVBQUU7SUFDNUIscUJBQ0ksOERBQUNTO1FBQUlMLE9BQU9BO1FBQU9NLFdBQVU7a0JBQ3hCVjs7Ozs7O0FBR2I7TUFOTWtCO0FBT2UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFiIHBhdGlzc2VyaWUvVGFiUGF0aXNzZXJpZS5qc3g/NDM0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRhYnMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKGNoaWxkcmVuWzBdLnByb3BzLmxhYmVsKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIG5ld0FjdGl2ZVRhYikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEFjdGl2ZVRhYihuZXdBY3RpdmVUYWIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCB3LWZ1bGwgcHgtMiAgYmctWyNlOGVhZWJdIFwiXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCI4MDBcIlxuICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgcHktMiAgYmctWyNlOGVhZWJdICAgbWQ6bWF4LXctZnVsbCBbJl9idXR0b25dOm1heC13LWZpdCBpbmxpbmUtZmxleCBmbGV4LW5vd3JhcCAgZ2FwLTQgbWQ6cHgtNCBvdmVyZmxvdy14LXNjcm9sbCBoaWRlLXNjcm9sbC1iYXIgXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGQucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZVRhYiA9PT0gY2hpbGQucHJvcHMubGFiZWwgPyAnIGJnLXBpbmstOTUwIHRleHQtc2xhdGUtNTAgcm91bmRlZC1mdWxsJyA6ICdtYXgtdy1tYXggcm91bmRlZC1mdWxsIGJnLXBpbmstOTUwLzUgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIGZsZXgtc2hyaW5rLTAgaW5saW5lLWZsZXggdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHAtMiBtYXgtdy1tYXggcm91bmRlZC1mdWxsIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUsIGNoaWxkLnByb3BzLmxhYmVsKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5sYWJlbCA9PT0gYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NoaWxkLnByb3BzLmxhYmVsfT57Y2hpbGQucHJvcHMuY2hpbGRyZW59PC9kaXY+O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBUYWIgPSAoeyBsYWJlbCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgbGFiZWw9e2xhYmVsfSBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgeyBUYWJzLCBUYWIgfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhYnMiLCJjaGlsZHJlbiIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInByb3BzIiwibGFiZWwiLCJoYW5kbGVDbGljayIsImUiLCJuZXdBY3RpdmVUYWIiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtYW9zIiwiZGF0YS1hb3MtZHVyYXRpb24iLCJkYXRhLWFvcy1kZWxheSIsIm1hcCIsImNoaWxkIiwiYnV0dG9uIiwib25DbGljayIsIlRhYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/tab patisserie/TabPatisserie.jsx\n"));

/***/ })

});