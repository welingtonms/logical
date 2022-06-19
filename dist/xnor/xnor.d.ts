export default xnor;
/**
 * Utility function to perform logical XNOR operation.
 *
 * It returns `true` when the provided values/expressions are both _truthy_ or both _falsy_, `false` otherwise.
 *
 * @param {any} condition1 - first value or expression to be evaluated.
 * @param {any} condition2 - second value or expression to be evaluated.
 * @example
 * xnor(true, true); // false
 * xnor(true, false); // true
 * xnor(false, true); // true
 * xnor(false, false); // false
 */
declare function xnor(condition1: any, condition2: any): boolean;
