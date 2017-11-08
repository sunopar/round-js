(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['round-js'] = factory());
}(this, (function () { 'use strict';

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

var enlargeDigits = function enlargeDigits(times) {
  return function (number) {
    return +(String(number) + "e" + String(times));
  };
};
var toFixed = function toFixed(precision) {
  return function (number) {
    return number.toFixed(precision);
  };
};
/**
 * @param {Number} number
 * @param {Number} precision
 */
var round = function round(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (Number.isNaN(+number)) {
    throw new Error("number's type must be Number");
  }
  if (Number.isNaN(+precision)) {
    throw new Error("precision's type must be Number");
  }
  return compose(toFixed(precision), enlargeDigits(-precision), Math.round, enlargeDigits(precision))(number);
};

return round;

})));
