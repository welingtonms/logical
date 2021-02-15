import xor from "./xor";

describe("xor", () => {
  test('truth table', () => {
    expect(xor(true, true)).toBe(false)
    expect(xor(true, false)).toBe(true)
    expect(xor(false, true)).toBe(true)
    expect(xor(false, false)).toBe(false)
  })
});
