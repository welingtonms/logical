import nand from "./nand";

describe("nand", () => {
  test('truth table', () => {
    expect(nand(true, true)).toBe(false)
    expect(nand(true, false)).toBe(true)
    expect(nand(false, true)).toBe(true)
    expect(nand(false, false)).toBe(true)
  })
});
