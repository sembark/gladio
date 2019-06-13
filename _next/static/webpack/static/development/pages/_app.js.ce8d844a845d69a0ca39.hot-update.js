webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/CodeBlock.jsx":
/*!**********************************!*\
  !*** ./components/CodeBlock.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeBlock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/es/index.js");
/* harmony import */ var prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer/themes/dracula */ "./node_modules/prism-react-renderer/themes/dracula.js");
/* harmony import */ var prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes */ "./components/themes.js");
/* harmony import */ var _tourepedia_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tourepedia/ui */ "./node_modules/@tourepedia/ui/es/index.js");
/* harmony import */ var _HtmlLive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HtmlLive */ "./components/HtmlLive.jsx");
/* harmony import */ var _code_block_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code-block.css */ "./components/code-block.css");
/* harmony import */ var _code_block_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_code_block_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/sudhir/Documents/workspace/tourepedia/tp-ui/www/components/CodeBlock.jsx";








function CodeBlock(_ref) {
  var live = _ref.live,
      noInline = _ref.noInline,
      className = _ref.className,
      children = _ref.children,
      language = _ref.language;
  language = language || className.replace(/language-/, "");

  if (live) {
    var Live = react_live__WEBPACK_IMPORTED_MODULE_3__;

    if (language === "html") {
      Live = _HtmlLive__WEBPACK_IMPORTED_MODULE_8__;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "react-live",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Live.LiveProvider, {
      code: children,
      language: language,
      noInline: noInline,
      theme: prism_react_renderer_themes_dracula__WEBPACK_IMPORTED_MODULE_5___default.a,
      scope: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, react__WEBPACK_IMPORTED_MODULE_2___default.a, _tourepedia_ui__WEBPACK_IMPORTED_MODULE_7__),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Live.LiveEditor, {
      className: "editor",
      tabIndex: "-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Live.LiveError, {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Live.LivePreview, {
      className: "preview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["defaultProps"], {
    theme: _themes__WEBPACK_IMPORTED_MODULE_6__["github"],
    code: children,
    language: language,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
      className: className + " only-preview",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, tokens.map(function (line, i) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: i
      }, getLineProps({
        line: line,
        key: i
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), line.map(function (token, key) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: key
        }, getTokenProps({
          token: token,
          key: key
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }));
      }));
    }));
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
false

})
//# sourceMappingURL=_app.js.ce8d844a845d69a0ca39.hot-update.js.map