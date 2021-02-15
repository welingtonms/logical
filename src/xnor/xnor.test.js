import xnor from "./xnor";

describe("xnor", () => {
  test('truth table', () => {
    expect(xnor(true, true)).toBe(true)
    expect(xnor(true, false)).toBe(false)
    expect(xnor(false, true)).toBe(false)
    expect(xnor(false, false)).toBe(true)
  })
});
