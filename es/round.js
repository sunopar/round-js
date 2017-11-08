import compose from './utils/compose';

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
export default round;