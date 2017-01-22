"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyframes = exports.css = undefined;

var _ComponentStyle = require("styled-components/lib/models/ComponentStyle");

var _ComponentStyle2 = _interopRequireDefault(_ComponentStyle);

var _generateAlphabeticName = require("styled-components/lib/utils/generateAlphabeticName");

var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

var _css = require("styled-components/lib/constructors/css");

var _css2 = _interopRequireDefault(_css);

var _keyframes = require("styled-components/lib/constructors/keyframes");

var _keyframes2 = _interopRequireDefault(_keyframes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentStyleClass = (0, _ComponentStyle2.default)(_generateAlphabeticName2.default);

var generateCSSClass = function generateCSSClass(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var instance = new ComponentStyleClass(_css2.default.apply(undefined, [strings].concat(interpolations)));

  var className = function className(props) {
    return instance.generateAndInjectStyles(props || {});
  };

  className.toString = className;

  return className;
};

exports.default = generateCSSClass;
exports.css = _css2.default;
exports.keyframes = _keyframes2.default;