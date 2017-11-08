"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * @param {Array} functions
 */
var compose = function compose() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  var nonFunctionTypeLength = functions.filter(function (item) {
    return typeof item !== 'function';
  }).length;
  if (nonFunctionTypeLength > 0) {
    throw new Error("compose's params must be functions");
  }
  if (functions.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (functions.length === 1) {
    return functions[0];
  }
  return functions.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
};
exports["default"] = compose;