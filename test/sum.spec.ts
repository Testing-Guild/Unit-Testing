import { assert } from "chai";
import { sum } from "../sum";
import { it } from "mocha";
describe("sum", () => {
  it("should return the sum of positive integers", () => {
    assert.equal(sum(2, 3), 5);
  });
  it("should return the sum of a positive integer and zero", () => {
    assert.equal(sum(20, 0), 20, "The sum of 20 and 0 should be 20");
  });

  it("should return the sum of two negative integers", () => {
    assert.equal(sum(-2, -3), -5, "The sum of -2 and -3 should be -5");
  });
  it("should not overflow for very large numbers", () => {
    assert.doesNotThrow(() => sum(Number.MAX_SAFE_INTEGER, 1));
  });

  it("should not underflow for very small numbers", () => {
    assert.doesNotThrow(() => sum(Number.MIN_SAFE_INTEGER, -1));
  });

  it("should return NaN for sum with NaN", () => {
    assert.equal(isNaN(sum(2, NaN)), true);
  });

  it("should return Infinity for sum with positive Infinity", () => {
    assert.equal(sum(2, Infinity), Infinity);
  });
  it("should return the first argument for sum with zero", () => {
    assert.equal(sum(10, 0), 10);
  });

  it("should return the first argument for sum with negative zero", () => {
    assert.equal(sum(10, -0), 10);
  });
});
