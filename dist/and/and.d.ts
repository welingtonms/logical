export default and;
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
declare function and(condition: any, ...conditions: any[]): boolean;
