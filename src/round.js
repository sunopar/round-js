import compose from './utils/compose';

const enlargeDigits = times => number => +`${number}e${times}`;
const toFixed = precision => number => number.toFixed(precision);
/**
 * return to the nearest whole number
 * @param {Number} number
 * @param {Number} precision
 */
const round = (number, precision = 2) => {
  if (Number.isNaN(+number)) {
    throw new Error("number's type must be Number");
  }
  if (Number.isNaN(+precision)) {
    throw new Error("precision's type must be Number");
  }
  return compose(
    toFixed(precision),
    enlargeDigits(-precision),
    Math.round,
    enlargeDigits(precision),
  )(number);
};
export default round;
