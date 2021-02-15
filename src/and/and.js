/**
 * Utility function to perform logical AND operation.
 * 
 * It returns `true` when all provided values/expressions are _truthy_, `false` otherwise.
 * 
 * @param {any} condition - initial value or expression to be evaluated.
 * @param  {...any} conditions - sequence of values or expressions to be evaluated.
 * @example
 * and(true, true); // true
 * and(true, false); // false
 * and(false, true); // false
 * and(false, false); // false
 */
function and(condition, ...conditions) {
  let res = Boolean(condition)
  
  for (let i = 0; i < conditions.length && res; i++) {
    res = res && Boolean(conditions[i])
  }

  return res
}

export default and
