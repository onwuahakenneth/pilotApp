"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navigation-bar/Dropdown-links.tsx":
/*!******************************************************!*\
  !*** ./components/navigation-bar/Dropdown-links.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DropdownLinks\": function() { return /* binding */ DropdownLinks; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./constants/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_MenuContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/MenuContext */ \"./context/MenuContext.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/ezikechris/zFRONTEND/pilotApp/components/navigation-bar/Dropdown-links.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar DropdownLinks = function DropdownLinks(props) {\n  _s();\n\n  var menuOpen = props.menuOpen;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MenuContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      closeMenu = _useContext.closeMenu;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    menuOpen: menuOpen,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkList, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Text, {\n            children: \"About Us\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/services\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Text, {\n            children: \"Services\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DropdownLinks, \"Y1WSdJ8iG35O7lacsLixK33rGR4=\");\n\n_c = DropdownLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownLinks);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Dropdown-links__Container\",\n  componentId: \"sc-1r95nla-0\"\n})([\"position:absolute;top:0px;left:0;width:100%;z-index:9;display:none;transform:translateY(0%);background-color:\", \";transition:transform 0.5s linear;@media screen and (max-width:780px){display:block;transform:translateY(\", \");}\"], _constants__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles.colors.primary500, function (_ref) {\n  var menuOpen = _ref.menuOpen;\n  return menuOpen ? \"8vh\" : \"-100%\";\n});\n_c2 = Container;\nvar LinkList = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Dropdown-links__LinkList\",\n  componentId: \"sc-1r95nla-1\"\n})([\"height:100%;padding:0px 10px;display:flex;flex-direction:column;justify-content:space-around;\"]);\n_c3 = LinkList;\nvar LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Dropdown-links__LinkItem\",\n  componentId: \"sc-1r95nla-2\"\n})([\"padding:20px 0px;margin:10px 0px;width:20%;cursor:pointer;&:hover p{letter-spacing:1px;color:\", \";}\"], _constants__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles.colors.white);\n_c4 = LinkItem;\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p.withConfig({\n  displayName: \"Dropdown-links__Text\",\n  componentId: \"sc-1r95nla-3\"\n})([\"color:\", \";transition:all 0.5s linear;\"], _constants__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles.colors.white);\n_c5 = Text;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"DropdownLinks\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"LinkList\");\n$RefreshReg$(_c4, \"LinkItem\");\n$RefreshReg$(_c5, \"Text\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL0Ryb3Bkb3duLWxpbmtzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTU8sSUFBTU0sYUFBOEIsR0FBRyxTQUFqQ0EsYUFBaUMsQ0FBQ0MsS0FBRCxFQUFXO0VBQUE7O0VBQ3ZELElBQVFDLFFBQVIsR0FBcUJELEtBQXJCLENBQVFDLFFBQVI7O0VBQ0Esa0JBQW9CUCxpREFBVSxDQUFDSSw0REFBRCxDQUE5QjtFQUFBLElBQU9JLFNBQVAsZUFBT0EsU0FBUDs7RUFFQSxvQkFDRSw4REFBQyxTQUFEO0lBQVcsUUFBUSxFQUFFRCxRQUFyQjtJQUFBLHVCQUNFLDhEQUFDLFFBQUQ7TUFBQSx3QkFDRSw4REFBQyxRQUFEO1FBQUEsdUJBQ0UsOERBQUMsa0RBQUQ7VUFBTSxJQUFJLEVBQUUsR0FBWjtVQUFBLHVCQUNFLDhEQUFDLElBQUQ7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBTUUsOERBQUMsUUFBRDtRQUFBLHVCQUNFLDhEQUFDLGtEQUFEO1VBQU0sSUFBSSxFQUFFLFdBQVo7VUFBQSx1QkFDRSw4REFBQyxJQUFEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FORjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFnQkQsQ0FwQk07O0dBQU1GOztLQUFBQTtBQXNCYiwrREFBZUEsYUFBZjtBQUVBLElBQU1JLFNBQVMsR0FBR1Isd0VBQUg7RUFBQTtFQUFBO0FBQUEsME9BUU9DLHNFQVJQLEVBYWE7RUFBQSxJQUFHSyxRQUFILFFBQUdBLFFBQUg7RUFBQSxPQUFtQkEsUUFBUSxHQUFHLEtBQUgsR0FBVyxPQUF0QztBQUFBLENBYmIsQ0FBZjtNQUFNRTtBQWlCTixJQUFNSSxRQUFRLEdBQUdaLHdFQUFIO0VBQUE7RUFBQTtBQUFBLHFHQUFkO01BQU1ZO0FBUU4sSUFBTUMsUUFBUSxHQUFHYix3RUFBSDtFQUFBO0VBQUE7QUFBQSw0R0FRREMsaUVBUkMsQ0FBZDtNQUFNWTtBQVlOLElBQU1FLElBQUksR0FBR2Ysc0VBQUg7RUFBQTtFQUFBO0FBQUEsK0NBQ0NDLGlFQURELENBQVY7TUFBTWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci9Ecm9wZG93bi1saW5rcy50c3g/N2IyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlcyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNZW51Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L01lbnVDb250ZXh0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVudU9wZW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bkxpbmtzOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBtZW51T3BlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHtjbG9zZU1lbnV9ID0gdXNlQ29udGV4dChNZW51Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1lbnVPcGVuPXttZW51T3Blbn0+XG4gICAgICA8TGlua0xpc3Q+XG4gICAgICAgIDxMaW5rSXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICA8VGV4dD5BYm91dCBVczwvVGV4dD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICAgIDxMaW5rSXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9zZXJ2aWNlc1wifT5cbiAgICAgICAgICAgIDxUZXh0PlNlcnZpY2VzPC9UZXh0PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgIDwvTGlua0xpc3Q+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkxpbmtzO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgbWVudU9wZW46IGJvb2xlYW4gfT5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0dsb2JhbFN0eWxlcy5jb2xvcnMucHJpbWFyeTUwMH07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGxpbmVhcjtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkeyh7IG1lbnVPcGVuIH0pID0+IChtZW51T3BlbiA/IFwiOHZoXCIgOiBcIi0xMDAlXCIpfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExpbmtMaXN0ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gO1xuXG5jb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICB3aWR0aDogMjAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiAke0dsb2JhbFN0eWxlcy5jb2xvcnMud2hpdGV9O1xuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIGNvbG9yOiAke0dsb2JhbFN0eWxlcy5jb2xvcnMud2hpdGV9O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInN0eWxlZCIsIkdsb2JhbFN0eWxlcyIsIkxpbmsiLCJNZW51Q29udGV4dCIsIkRyb3Bkb3duTGlua3MiLCJwcm9wcyIsIm1lbnVPcGVuIiwiY2xvc2VNZW51IiwiQ29udGFpbmVyIiwiZGl2IiwiY29sb3JzIiwicHJpbWFyeTUwMCIsIkxpbmtMaXN0IiwiTGlua0l0ZW0iLCJ3aGl0ZSIsIlRleHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigation-bar/Dropdown-links.tsx\n"));

/***/ })

});