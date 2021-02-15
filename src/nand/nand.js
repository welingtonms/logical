import not from '../not'
import and from '../and'

/**
 * Utility function to perform logical NAND operation.
 * 
 * It returns `true` if the result of AND between all provided values/expressions is _falsy_, `false` otherwise.
 * 
 * @param {any} condition - initial value or expression to be evaluated.
 * @param  {...any} conditions - sequence of values or expressions to be evaluated.
 * @example
 * nand(true, true); // false
 * nand(true, false); // true
 * nand(false, true); // true
 * nand(false, false); // true
 */
function nand(condition, ...conditions) {
  return not(and(condition, ...conditions))
}

export default nand
