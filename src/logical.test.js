import logical from './logical'
import and from "./and";
import nand from "./nand";
import nor from "./nor";
import not from "./not";
import or from "./or";
import xnor from "./xnor";
import xor from "./xor";

describe.only('logical', () => {
  describe('starting with false', () => {

    it('evaluates AND operation correctly', () => {
      expect(logical(false).and(true).value()).toBe(and(false, true))
      expect(logical(false).and(false).value()).toBe(and(false, false))
    })

    it('evaluates OR operation correctly', () => {
      expect(logical(false).or(true).value()).toBe(or(false, true))
      expect(logical(false).or(false).value()).toBe(or(false, false))
    })

    it('evaluates NAND operation correctly', () => {
      expect(logical(false).nand(true).value()).toBe(nand(false, true))
      expect(logical(false).nand(false).value()).toBe(nand(false, false))
    })

    it('evaluates NOR operation correctly', () => {
      expect(logical(false).nor(true).value()).toBe(nor(false, true))
      expect(logical(false).nor(false).value()).toBe(nor(false, false))
    })

    it('evaluates NOT operation correctly', () => {
      expect(logical(false).not().value()).toBe(not(false))
    })

    it('evaluates XNOR operation correctly', () => {
      expect(logical(false).xnor(true).value()).toBe(xnor(false, true))
      expect(logical(false).xnor(false).value()).toBe(xnor(false, false))
    })

    it('evaluates XOR operation correctly', () => {
      expect(logical(false).xor(true).value()).toBe(xor(false, true))
      expect(logical(false).xor(false).value()).toBe(xor(false, false))
    })
  })

  describe('starting with true', () => {

    it('evaluates AND operation correctly', () => {
      expect(logical(true).and(true).value()).toBe(and(true, true))
      expect(logical(true).and(false).value()).toBe(and(true, false))
    })

    it('evaluates OR operation correctly', () => {
      expect(logical(true).or(true).value()).toBe(or(true, true))
      expect(logical(true).or(false).value()).toBe(or(true, false))
    })

    it('evaluates NAND operation correctly', () => {
      expect(logical(true).nand(true).value()).toBe(nand(true, true))
      expect(logical(true).nand(false).value()).toBe(nand(true, false))
    })

    it('evaluates NOR operation correctly', () => {
      expect(logical(true).nor(true).value()).toBe(nor(true, true))
      expect(logical(true).nor(false).value()).toBe(nor(true, false))
    })

    it('evaluates NOT operation correctly', () => {
      expect(logical(true).not().value()).toBe(not(true))
    })

    it('evaluates XNOR operation correctly', () => {
      expect(logical(true).xnor(true).value()).toBe(xnor(true, true))
      expect(logical(true).xnor(false).value()).toBe(xnor(true, false))
    })

    it('evaluates XOR operation correctly', () => {
      expect(logical(true).xor(true).value()).toBe(xor(true, true))
      expect(logical(true).xor(false).value()).toBe(xor(true, false))
    })
  })
})
