import not from '../not'
import or from '../or'

/**
 * Utility function to perform logical NOR operation.
 * 
 * It returns `true` if the result of OR between all provided values/expressions is _falsy_, `false` otherwise.
 * 
 * @param {any} condition - initial value or expression to be evaluated.
 * @param  {...any} conditions - sequence of values or expressions to be evaluated.
 * @example
 * nor(true, true); // false
 * nor(true, false); // true
 * nor(false, true); // true
 * nor(false, false); // true
 */
function nor(condition, ...conditions) {
  return not(or(condition, ...conditions))
}

export default nor
