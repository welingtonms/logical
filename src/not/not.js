/**
 * Utility function to perform logical NOT operation.
 * 
 * It returns `true` when the provided value/expression is _falsy_, `false` otherwise.
 * 
 * @param {any} condition - value or expression to be evaluated.
 * @example
 * not(true); // false
 * not(false); // true
 */
function not(condition) {
  return !Boolean(condition)
}

export default not
