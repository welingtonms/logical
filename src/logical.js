import and from "./and";
import nand from "./nand";
import nor from "./nor";
import not from "./not";
import or from "./or";
import xnor from "./xnor";
import xor from "./xor";

/**
 * @param {*} initialValue
 * @returns {Logical}
 */
function Logical(initialValue) {
  let value = Boolean(initialValue);

  return {
    /**
     * Returns current value for this chained logical operation
     * @returns {boolean}
     */
    value() {
      return value;
    },
    /**
     * Applies AND to the current value and the provided values/expressions.
     * @param  {...any} conditions 
     * @returns {boolean}
     */
    and(...conditions) {
      value = and(value, ...conditions);
      return this;
    },
    /**
     * Applies OR to the current value and the provided values/expressions.
     * @param  {...any} conditions 
     */
    or(...conditions) {
      value = or(value, ...conditions);
      return this;
    },
    /**
     * Applies NAND to the current value and the provided values/expressions.
     * @param  {...any} conditions 
     */
    nand(...conditions) {
      value = nand(value, ...conditions);
      return this;
    },
    /**
     * Applies NOR to the current value and the provided values/expressions.
     * @param  {...any} conditions 
     */
    nor(...conditions) {
      value = nor(value, ...conditions);
      return this;
    },
    /**
     * Applies NOT to the current value
     */
    not() {
      value = not(value);

      return this;
    },
    /**
     * Applies XNOR to the current value and the provided value/expression.
     * @param {*} condition2 
     */
    xnor(condition2) {
      value = xnor(value, condition2);
      return this;
    },
    /**
     * Applies XOR to the current value and the provided value/expression.
     * @param {*} condition2 
     */
    xor(condition2) {
      value = xor(value, condition2);
      return this;
    },
  };
}

/**
 * Returns current value for this chained logical operation.
 * @callback LogicalValue
 * @returns {boolean} current value for this logical operation.
 */

/**
 * Applies AND to the current value and the provided values/expressions.
 * @callback LogicalAnd
 * @param  {...any} conditions 
 * @returns {Logical}
 */

/**
 * Applies OR to the current value and the provided values/expressions.
 * @callback LogicalOr
 * @param  {...any} conditions 
 * @returns {Logical}
 */

/**
 * Applies NAND to the current value and the provided values/expressions.
 * @callback LogicalNand
 * @param  {...any} conditions 
 * @returns {Logical}
 */

/**
 * Applies NOR to the current value and the provided values/expressions.
 * @callback LogicalNor
 * @param  {...any} conditions 
 * @returns {Logical}
 */

/**
 * Applies NOT to the current value
 * @callback LogicalNot
 * @returns {Logical}
 */

/**
 * Applies XNOR to the current value and the provided value/expression.
 * @callback LogicalXnor
 * @param {*} condition2 
 * @returns {Logical}
 */

/**
 * Applies XOR to the current value and the provided value/expression.
 * @callback LogicalXor
 * @param {*} condition2 
 * @returns {Logical}
 */

/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} Logical
 * @property {LogicalValue} value - current value.
 * @property {LogicalAnd} and - performs AND operation.
 * @property {LogicalOr} or - performs OR operation.
 * @property {LogicalNand} nand - performs NAND operation.
 * @property {LogicalNor} nor - performs NOR operation.
 * @property {LogicalNot} not - performs NOT operation.
 * @property {LogicalXnor} xnor - performs XNOR operation.
 * @property {LogicalXor} xor - performs XOR operation.
 */

export default Logical;
