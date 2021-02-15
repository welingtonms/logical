import or from "./or";

describe("or", () => {
  describe("returns true", () => {
    it("when true is provided as arg", () => {
      expect(or(true)).toBe(true);
    });

    it("when {} is provided as arg", () => {
      expect(or({})).toBe(true);
    });

    it("when [] is provided as arg", () => {
      expect(or([])).toBe(true);
    });

    it("when 42 is provided as arg", () => {
      expect(or(42)).toBe(true);
    });

    it('when "0" is provided as arg', () => {
      expect(or("0")).toBe(true);
    });

    it('when "false" is provided as arg', () => {
      expect(or("false")).toBe(true);
    });

    it("when new Date() is provided as arg", () => {
      expect(or(new Date())).toBe(true);
    });

    it("when -42 is provided as arg", () => {
      expect(or(-42)).toBe(true);
    });

    it("when 12n is provided as arg", () => {
      expect(or(12n)).toBe(true);
    });

    it("when 3.14 is provided as arg", () => {
      expect(or(3.14)).toBe(true);
    });

    it("when -3.14 is provided as arg", () => {
      expect(or(-3.14)).toBe(true);
    });

    it("when Infinity is provided as arg", () => {
      expect(or(Infinity)).toBe(true);
    });

    it("when -Infinity is provided as arg", () => {
      expect(or(-Infinity)).toBe(true);
    });
  });

  describe("returns false", () => {
    test("when false is provided as args", () => {
      expect(or(false)).toBe(false);
    });

    test("when null is provided as args", () => {
      expect(or(null)).toBe(false);
    });

    test("when undefined is provided as args", () => {
      expect(or(undefined)).toBe(false);
    });

    test("when 0 is provided as args", () => {
      expect(or(0)).toBe(false);
    });

    test("when -0 is provided as args", () => {
      expect(or(-0)).toBe(false);
    });

    test("when 0n is provided as args", () => {
      expect(or(0n)).toBe(false);
    });

    test("when NaN is provided as args", () => {
      expect(or(NaN)).toBe(false);
    });

    test('when "" is provided as args', () => {
      expect(or("")).toBe(false);
    });
  });

  test('truth table', () => {
    expect(or(true, true)).toBe(true)
    expect(or(true, false)).toBe(true)
    expect(or(false, true)).toBe(true)
    expect(or(false, false)).toBe(false)
  })
});
