import assert from "assert";
import { sum } from "../sum.mjs";
describe("sum", () => {
  it("should return the sum of positive integers", () => {
    const result = sum(2, 3);
    assert.equal(result, 5);
  });

  it("should throw an error for non-numeric second argument", () => {
    try {
      sum(1, "two");
      assert.fail("Expected a number for the second argument");
    } catch (error) {
      assert.equal(error.name, assert.AssertionError.name);
      assert.equal(error.message, "Expected a number for the second argument");
    }
  });
  it("should return the sum of a positive integer and zero", () => {
    assert.equal(sum(20, 0), 20, "The sum of 20 and 0 should be 20");
  });

  it("should return the sum of two negative integers", () => {
    assert.equal(sum(-2, -3), -5, "The sum of -2 and -3 should be -5");
  });
});
