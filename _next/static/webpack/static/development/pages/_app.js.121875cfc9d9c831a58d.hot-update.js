webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/HtmlLive.jsx":
/*!*********************************!*\
  !*** ./components/HtmlLive.jsx ***!
  \*********************************/
/*! exports provided: LiveProvider, LiveEditor, LivePreview, LiveError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveProvider", function() { return LiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveEditor", function() { return LiveEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePreview", function() { return LivePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveError", function() { return LiveError; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/es/index.js");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes */ "./components/themes.js");




var _jsxFileName = "/Users/sudhir/Documents/workspace/tourepedia/tp-ui/www/components/HtmlLive.jsx";




var Code = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext({});
function LiveProvider(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? _themes__WEBPACK_IMPORTED_MODULE_7__["github"] : _ref$theme,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? "html" : _ref$language;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      code = _useState2[0],
      changeCode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      error = _useState4[0],
      handleError = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Code.Provider, {
    value: {
      error: error,
      code: code,
      onChange: changeCode,
      onError: handleError,
      theme: theme,
      language: language
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
}
function LiveEditor(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Code.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (_ref2) {
    var code = _ref2.code,
        language = _ref2.language,
        theme = _ref2.theme,
        disabled = _ref2.disabled,
        onChange = _ref2.onChange;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_6__["Editor"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      code: code,
      language: language,
      disabled: disabled,
      onChange: onChange
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  });
}
function LivePreview(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Code.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, function (_ref3) {
    var onChange = _ref3.onChange,
        context = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["onChange"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_5__["defaultProps"], context, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), function (_ref4) {
      var className = _ref4.className,
          style = _ref4.style,
          tokens = _ref4.tokens,
          getLineProps = _ref4.getLineProps,
          getTokenProps = _ref4.getTokenProps;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pre", {
        className: className + " only-preview",
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, tokens.map(function (line, i) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
          key: i
        }, getLineProps({
          line: line,
          key: i
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), line.map(function (token, key) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
            key: key
          }, getTokenProps({
            token: token,
            key: key
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }));
        }));
      }));
    });
  });
}
function LiveError(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Code.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, function (_ref5) {
    var error = _ref5.error;
    return error ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pre", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), error) : null;
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.121875cfc9d9c831a58d.hot-update.js.map