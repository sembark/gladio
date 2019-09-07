webpackHotUpdate("static/development/pages/components/paginate.js",{

/***/ "./pages/components/paginate.mdx":
/*!***************************************!*\
  !*** ./pages/components/paginate.mdx ***!
  \***************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _components_ComponentsLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentsLayout */ "./components/ComponentsLayout.jsx");


var _jsxFileName = "/Users/sudhir/Documents/workspace/tourepedia/tp-ui/www/pages/components/paginate.mdx";

/* @jsx mdx */


/* @jsx mdx */


var meta = {
  title: "Paginate",
  description: "Pagination component",
  name: "@tourepedia/paginate",
  usage: "import Paginate from \"@tourepedia/paginate\"\nfunction App () {\n  return <Paginate\n    from={1}\n    to={10}\n    total={20}\n    currentPage={1}\n    lastPage={2}\n    isFetching={false}\n    onChange={page => {}}\n  />\n}"
};

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  };
};

var layoutProps = {
  meta: meta
};
var MDXLayout = _components_ComponentsLayout__WEBPACK_IMPORTED_MODULE_4__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Playground"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx",
    "metastring": "live=true",
    "live": "true"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), "function () {\n  const perPage = 10\n  const total = 25\n  const lastPage = Math.ceil(total / perPage)\n  const [isFetching, changeIsFetching] = useState(false)\n  const [current, changeCurrent] = useState({\n    currentPage: 1,\n    from: Math.min(1, total),\n    to: Math.min(perPage, total)\n  })\n  function onPageChange(currentPage) {\n    changeIsFetching(true)\n    setTimeout(() => {\n      const from = Math.min((currentPage - 1 ) * perPage + 1, total)\n      const to = Math.min(from + perPage, total)\n      changeCurrent({\n        currentPage,\n        from,\n        to\n      })\n      changeIsFetching(false)\n    }, 1000)\n  }\n  const { currentPage, from, to} = current\n  return <Paginate\n    lastPage={lastPage}\n    total={total}\n    from={from}\n    to={to}\n    currentPage={currentPage}\n    isFetching={isFetching}\n    onChange={page => {\n      onPageChange(page)\n    }}\n  />\n}\n")));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=paginate.js.baf98d864303e1b7f24b.hot-update.js.map