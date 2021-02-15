import nor from "./nor";

describe("nor", () => {
  test('truth table', () => {
    expect(nor(true, true)).toBe(false)
    expect(nor(true, false)).toBe(false)
    expect(nor(false, true)).toBe(false)
    expect(nor(false, false)).toBe(true)
  })
});
