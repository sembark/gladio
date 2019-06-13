webpackHotUpdate("static/development/pages/styles.js",{

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/*! exports provided: SidebarLink, SidebarLinkList, SidebarHeading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLink", function() { return SidebarLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkList", function() { return SidebarLinkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHeading", function() { return SidebarHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/Link.jsx");
var _jsxFileName = "/Users/sudhir/Documents/workspace/tourepedia/tp-ui/www/components/Sidebar.jsx";


var SideBarLinkListScope = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext("");
var SideBarScope = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext("");
function SidebarLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarLinkListScope.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (scope) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "".concat(scope).concat(href),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "text-primary-600 hover:text-primary-800 hover:underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, children)));
  });
}
function SidebarLinkList(_ref2) {
  var children = _ref2.children,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === void 0 ? "" : _ref2$scope;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarScope.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (rootScope) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarLinkListScope.Provider, {
      value: "".concat(rootScope).concat(scope),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "my-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, children));
  });
}
function SidebarHeading(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mt-8 text-base",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, children);
}
function SideBar(_ref4) {
  var children = _ref4.children,
      _ref4$scope = _ref4.scope,
      scope = _ref4$scope === void 0 ? "" : _ref4$scope;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarScope.Provider, {
    value: scope,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "py-4 px-5 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children));
}

/***/ })

})
//# sourceMappingURL=styles.js.45de8495fefbcc5c8ded.hot-update.js.map