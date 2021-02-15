/**
 * Utility function to perform logical OR operation.
 * 
 * It returns `true` when at least one of the provided values/expressions is _truthy_, `false` otherwise.
 * 
 * @param {any} condition - initial value or expression to be evaluated.
 * @param  {...any} conditions - sequence of values or expressions to be evaluated.
 * @example
 * or(true, true); // true
 * or(true, false); // true
 * or(false, true); // true
 * or(false, false); // false
 */
function or(condition, ...conditions) {
  let res = Boolean(condition)
  
  for (let i = 0; i < conditions.length && !res; i++) {
    res = res || Boolean(conditions[i])
  }

  return res
}

export default or
