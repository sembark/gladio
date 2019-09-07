webpackHotUpdate("static/development/pages/styles/foundation/colors.js",{

/***/ "./pages/styles/foundation/colors.mdx":
/*!********************************************!*\
  !*** ./pages/styles/foundation/colors.mdx ***!
  \********************************************/
/*! exports provided: meta, Palette, ColorPalette, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return ColorPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _components_StylesLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/StylesLayout */ "./components/StylesLayout.jsx");
/* harmony import */ var _tourepedia_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tourepedia/ui */ "./node_modules/@tourepedia/ui/es/index.js");



var _jsxFileName = "/Users/sudhir/Documents/workspace/tourepedia/tp-ui/www/pages/styles/foundation/colors.mdx";

/* @jsx mdx */


/* @jsx mdx */



var meta = {
  title: "Color System",
  description: "Color System"
};
function Palette(_ref) {
  var value = _ref.value,
      shade = _ref.shade;
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "inline-block w-20 my-4 text-gray-700 text-sm text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "uppercase text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, value), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "w-8 h-8 shadow rounded-full my-2 mx-auto",
    style: {
      backgroundColor: value
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), shade ? Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, shade) : null);
}
function ColorPalette() {
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "flex flex-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_tourepedia_ui__WEBPACK_IMPORTED_MODULE_6__["theme"].colors).map(function (name) {
    var value = _tourepedia_ui__WEBPACK_IMPORTED_MODULE_6__["theme"].colors[name];
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
      key: name,
      className: "w-24 text-center border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h4", {
      className: "capitalize py-3 border-b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, name), !value ? null : typeof value === "string" ? Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(Palette, {
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }) : typeof value === "object" ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(value).map(function (shade) {
      return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(Palette, {
        value: value[shade],
        key: shade,
        shade: shade,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }) : null);
  }));
}

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  };
};

var layoutProps = {
  meta: meta,
  Palette: Palette,
  ColorPalette: ColorPalette
};
var MDXLayout = _components_StylesLayout__WEBPACK_IMPORTED_MODULE_5__["default"];
function MDXContent(_ref2) {
  var components = _ref2.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(ColorPalette, {
    mdxType: "ColorPalette",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=colors.js.ae6bf728a29f28731923.hot-update.js.map