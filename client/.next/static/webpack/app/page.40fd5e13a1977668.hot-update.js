"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ArticleForm.js":
/*!***********************************!*\
  !*** ./components/ArticleForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apis_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/apis */ \"(app-pages-browser)/./apis/apis.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import {  getCreatedArticle } from '../apis/apis';\n\nconst ArticleForm = (param)=>{\n    let { setLoad, setShow } = param;\n    _s();\n    const [createArticle, setCreateArticle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            console.log(\"....\", createArticle);\n            const response = await // axios.post(\"http://localhost:4545/api/blog\", createArticle);\n            console.log(\"tr\", response);\n            const { status, result, message } = response;\n            if (status == \"Success\") {\n                setCreateArticle({});\n                setShow(false);\n                setLoad(true);\n            }\n        } catch (err) {\n            console.log(\"create article error >>\", err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"ms-5\",\n            style: {\n                width: \"40%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Create a New Article\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3 form-floating \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            id: \"floatingTitle\",\n                            placeholder: \"title\",\n                            value: createArticle.title,\n                            onChange: (e)=>setCreateArticle({\n                                    ...createArticle,\n                                    title: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"floatingTitle\",\n                            children: \"title\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3 form-floating\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"form-control\",\n                            placeholder: \"description\",\n                            id: \"floatingDescription\",\n                            value: createArticle.description,\n                            style: {\n                                height: \"155px\"\n                            },\n                            onChange: (e)=>setCreateArticle({\n                                    ...createArticle,\n                                    description: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"floatingDescription\",\n                            children: \"description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3 form-floating\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"category\",\n                            id: \"floatingCategory\",\n                            value: createArticle.category,\n                            onChange: (e)=>setCreateArticle({\n                                    ...createArticle,\n                                    category: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"floatingCategory\",\n                            children: \" category \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"btn btn-primary me-3\",\n                            onClick: handleSubmit,\n                            children: \" Add \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"btn btn-secondary\",\n                            onClick: ()=>setShow(false),\n                            children: \"Cancle\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hipra\\\\Desktop\\\\dhara\\\\project\\\\next\\\\blog-app\\\\client\\\\components\\\\ArticleForm.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ArticleForm, \"nlGX1kNn+8xAU1ZOaSohYYarNPU=\");\n_c = ArticleForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleForm);\nvar _c;\n$RefreshReg$(_c, \"ArticleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXJ0aWNsZUZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNkO0FBQzFCLHFEQUFxRDtBQUNKO0FBR2pELE1BQU1JLGNBQWM7UUFBQyxFQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBQzs7SUFDckMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUVwRCxNQUFNUSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRkMsUUFBUUMsR0FBRyxDQUFDLFFBQU9OO1lBQ25CLE1BQU1PLFdBQVcsTUFDakIsK0RBQStEO1lBQy9ERixRQUFRQyxHQUFHLENBQUMsTUFBTUM7WUFDbEIsTUFBTSxFQUFDQyxNQUFNLEVBQUVDLE1BQU0sRUFBQ0MsT0FBTyxFQUFDLEdBQUdIO1lBQ2pDLElBQUdDLFVBQVUsV0FBVTtnQkFDbkJQLGlCQUFpQixDQUFDO2dCQUNsQkYsUUFBUTtnQkFDUkQsUUFBUTtZQUNaO1FBQ0YsRUFBRSxPQUFPYSxLQUFLO1lBQ1ZOLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJLO1FBQzNDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTtZQUFPRSxPQUFPO2dCQUFFQyxPQUFPO1lBQU07OzhCQUMzQyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0w7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFDQ0MsTUFBSzs0QkFDTE4sV0FBVTs0QkFDVk8sSUFBRzs0QkFDSEMsYUFBWTs0QkFDWkMsT0FBT3RCLGNBQWN1QixLQUFLOzRCQUMxQkMsVUFBVSxDQUFDckIsSUFBTUYsaUJBQWlCO29DQUFDLEdBQUdELGFBQWE7b0NBQUN1QixPQUFPcEIsRUFBRXNCLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBQTs7Ozs7O3NDQUUzRSw4REFBQ0k7NEJBQU1DLFNBQVE7c0NBQWdCOzs7Ozs7Ozs7Ozs7OEJBRWpDLDhEQUFDZjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNlOzRCQUNDZixXQUFVOzRCQUNWUSxhQUFZOzRCQUNaRCxJQUFHOzRCQUNIRSxPQUFPdEIsY0FBYzZCLFdBQVc7NEJBQ2hDZCxPQUFPO2dDQUFDZSxRQUFROzRCQUFPOzRCQUN2Qk4sVUFBVSxDQUFDckIsSUFBTUYsaUJBQWlCO29DQUFDLEdBQUdELGFBQWE7b0NBQUU2QixhQUFhMUIsRUFBRXNCLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBQTs7Ozs7O3NDQUVsRiw4REFBQ0k7NEJBQU1DLFNBQVE7c0NBQXNCOzs7Ozs7Ozs7Ozs7OEJBR3ZDLDhEQUFDZjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUNDQyxNQUFLOzRCQUNMTixXQUFVOzRCQUNWUSxhQUFZOzRCQUNaRCxJQUFHOzRCQUNIRSxPQUFPdEIsY0FBYytCLFFBQVE7NEJBQzdCUCxVQUFVLENBQUNyQixJQUFNRixpQkFBaUI7b0NBQUMsR0FBR0QsYUFBYTtvQ0FBRStCLFVBQVU1QixFQUFFc0IsTUFBTSxDQUFDSCxLQUFLO2dDQUFBOzs7Ozs7c0NBRS9FLDhEQUFDSTs0QkFBTUMsU0FBUTtzQ0FBbUI7Ozs7Ozs7Ozs7Ozs4QkFHcEMsOERBQUNmO29CQUFJQyxXQUFVOztzQ0FDZiw4REFBQ21COzRCQUFPYixNQUFLOzRCQUFTTixXQUFVOzRCQUF1Qm9CLFNBQVMvQjtzQ0FBYzs7Ozs7O3NDQUM5RSw4REFBQzhCOzRCQUFPYixNQUFLOzRCQUFTTixXQUFVOzRCQUFvQm9CLFNBQVMsSUFBTWxDLFFBQVE7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNGO0dBcEVNRjtLQUFBQTtBQXNFTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVGb3JtLmpzP2MzNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7ICBnZXRDcmVhdGVkQXJ0aWNsZSB9IGZyb20gJy4uL2FwaXMvYXBpcyc7XHJcbmltcG9ydCB7IGdldENyZWF0ZWRBcnRpY2xlIH0gZnJvbSAnLi4vYXBpcy9hcGlzJztcclxuXHJcblxyXG5jb25zdCBBcnRpY2xlRm9ybSA9ICh7c2V0TG9hZCwgc2V0U2hvd30pID0+IHtcclxuICBjb25zdCBbY3JlYXRlQXJ0aWNsZSwgc2V0Q3JlYXRlQXJ0aWNsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnLi4uLicsY3JlYXRlQXJ0aWNsZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXRcclxuICAgICAgLy8gYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDU0NS9hcGkvYmxvZ1wiLCBjcmVhdGVBcnRpY2xlKTtcclxuICAgICAgY29uc29sZS5sb2coJ3RyJywgcmVzcG9uc2UpO1xyXG4gICAgICBjb25zdCB7c3RhdHVzLCByZXN1bHQsbWVzc2FnZX0gPSByZXNwb25zZTtcclxuICAgICAgaWYoc3RhdHVzID09IFwiU3VjY2Vzc1wiKXtcclxuICAgICAgICAgIHNldENyZWF0ZUFydGljbGUoe30pO1xyXG4gICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIGFydGljbGUgZXJyb3IgPj4nLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07ICAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz4gICAgIFxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtcy01XCIgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIgfX0gPlxyXG4gICAgICAgIDxoND5DcmVhdGUgYSBOZXcgQXJ0aWNsZTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tZmxvYXRpbmcgXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImZsb2F0aW5nVGl0bGVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZUFydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlQXJ0aWNsZSh7Li4uY3JlYXRlQXJ0aWNsZSx0aXRsZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsb2F0aW5nVGl0bGVcIj50aXRsZTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tZmxvYXRpbmdcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgaWQ9XCJmbG9hdGluZ0Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZUFydGljbGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTU1cHgnfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDcmVhdGVBcnRpY2xlKHsuLi5jcmVhdGVBcnRpY2xlLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsb2F0aW5nRGVzY3JpcHRpb25cIj5kZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmb3JtLWZsb2F0aW5nXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgaWQ9XCJmbG9hdGluZ0NhdGVnb3J5XCJcclxuICAgICAgICAgICAgdmFsdWU9e2NyZWF0ZUFydGljbGUuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3JlYXRlQXJ0aWNsZSh7Li4uY3JlYXRlQXJ0aWNsZSwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbG9hdGluZ0NhdGVnb3J5XCI+IGNhdGVnb3J5IDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTNcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PiBBZGQgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnknIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfT5DYW5jbGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRm9ybVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiZ2V0Q3JlYXRlZEFydGljbGUiLCJBcnRpY2xlRm9ybSIsInNldExvYWQiLCJzZXRTaG93IiwiY3JlYXRlQXJ0aWNsZSIsInNldENyZWF0ZUFydGljbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXN1bHQiLCJtZXNzYWdlIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsInN0eWxlIiwid2lkdGgiLCJoNCIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInRpdGxlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImh0bWxGb3IiLCJ0ZXh0YXJlYSIsImRlc2NyaXB0aW9uIiwiaGVpZ2h0IiwiY2F0ZWdvcnkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ArticleForm.js\n"));

/***/ })

});