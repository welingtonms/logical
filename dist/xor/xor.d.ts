export default xor;
/**
 * Utility function to perform logical XOR operation.
 *
 * It returns `true` when the provided values/expressions are not _truthy_ or _falsy_ at the same time, `false` otherwise.
 *
 * @param {any} condition1 - first value or expression to be evaluated.
 * @param {any} condition2 - second value or expression to be evaluated.
 * @example
 * xor(true, true); // false
 * xor(true, false); // true
 * xor(false, true); // true
 * xor(false, false); // false
 */
declare function xor(condition1: any, condition2: any): boolean;
