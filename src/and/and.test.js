import and from "./and";

describe("and", () => {
  describe("returns true", () => {
    it("when true is provided as arg", () => {
      expect(and(true)).toBe(true);
    });

    it("when {} is provided as arg", () => {
      expect(and({})).toBe(true);
    });

    it("when [] is provided as arg", () => {
      expect(and([])).toBe(true);
    });

    it("when 42 is provided as arg", () => {
      expect(and(42)).toBe(true);
    });

    it('when "0" is provided as arg', () => {
      expect(and("0")).toBe(true);
    });

    it('when "false" is provided as arg', () => {
      expect(and("false")).toBe(true);
    });

    it("when new Date() is provided as arg", () => {
      expect(and(new Date())).toBe(true);
    });

    it("when -42 is provided as arg", () => {
      expect(and(-42)).toBe(true);
    });

    it("when 12n is provided as arg", () => {
      expect(and(12n)).toBe(true);
    });

    it("when 3.14 is provided as arg", () => {
      expect(and(3.14)).toBe(true);
    });

    it("when -3.14 is provided as arg", () => {
      expect(and(-3.14)).toBe(true);
    });

    it("when Infinity is provided as arg", () => {
      expect(and(Infinity)).toBe(true);
    });

    it("when -Infinity is provided as arg", () => {
      expect(and(-Infinity)).toBe(true);
    });
  });

  describe("returns false", () => {
    test("when false is provided as args", () => {
      expect(and(false)).toBe(false);
    });

    test("when null is provided as args", () => {
      expect(and(null)).toBe(false);
    });

    test("when undefined is provided as args", () => {
      expect(and(undefined)).toBe(false);
    });

    test("when 0 is provided as args", () => {
      expect(and(0)).toBe(false);
    });

    test("when -0 is provided as args", () => {
      expect(and(-0)).toBe(false);
    });

    test("when 0n is provided as args", () => {
      expect(and(0n)).toBe(false);
    });

    test("when NaN is provided as args", () => {
      expect(and(NaN)).toBe(false);
    });

    test('when "" is provided as args', () => {
      expect(and("")).toBe(false);
    });
  });

  test('truth table', () => {
    expect(and(true, true)).toBe(true)
    expect(and(true, false)).toBe(false)
    expect(and(false, true)).toBe(false)
    expect(and(false, false)).toBe(false)
  })
});
