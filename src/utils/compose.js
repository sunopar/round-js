/**
 *
 * @param {Array} functions
 */
const compose = (...functions) => {
  const nonFunctionTypeLength = functions.filter(item => typeof item !== 'function').length;
  if (nonFunctionTypeLength > 0) {
    throw new Error("compose's params must be functions");
  }
  if (functions.length === 0) {
    return arg => arg;
  }
  if (functions.length === 1) {
    return functions[0];
  }
  return functions.reduce((a, b) => (...args) => a(b(...args)));
};
export default compose;
