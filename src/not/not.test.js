import not from "./not";

describe("not", () => {
  test('truth table', () => {
    expect(not(true)).toBe(false)
    expect(not(false)).toBe(true)
  })
});
