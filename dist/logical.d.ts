export default Logical;
/**
 * Returns current value for this chained logical operation.
 */
export type LogicalValue = () => boolean;
/**
 * Applies AND to the current value and the provided values/expressions.
 */
export type LogicalAnd = (...conditions: any[]) => Logical;
/**
 * Applies OR to the current value and the provided values/expressions.
 */
export type LogicalOr = (...conditions: any[]) => Logical;
/**
 * Applies NAND to the current value and the provided values/expressions.
 */
export type LogicalNand = (...conditions: any[]) => Logical;
/**
 * Applies NOR to the current value and the provided values/expressions.
 */
export type LogicalNor = (...conditions: any[]) => Logical;
/**
 * Applies NOT to the current value
 */
export type LogicalNot = () => Logical;
/**
 * Applies XNOR to the current value and the provided value/expression.
 */
export type LogicalXnor = (condition2: any) => Logical;
/**
 * Applies XOR to the current value and the provided value/expression.
 */
export type LogicalXor = (condition2: any) => Logical;
/**
 * The complete Triforce, or one or more components of the Triforce.
 */
export type Logical = {
    /**
     * - current value.
     */
    value: LogicalValue;
    /**
     * - performs AND operation.
     */
    and: LogicalAnd;
    /**
     * - performs OR operation.
     */
    or: LogicalOr;
    /**
     * - performs NAND operation.
     */
    nand: LogicalNand;
    /**
     * - performs NOR operation.
     */
    nor: LogicalNor;
    /**
     * - performs NOT operation.
     */
    not: LogicalNot;
    /**
     * - performs XNOR operation.
     */
    xnor: LogicalXnor;
    /**
     * - performs XOR operation.
     */
    xor: LogicalXor;
};
/**
 * @param {*} initialValue
 * @returns {Logical}
 */
declare function Logical(initialValue: any): Logical;
