import assert from "assert";
import { sum } from "../sum.mjs";
describe("sum", () => {
  it("should return the sum of positive integers", () => {
    const result = sum(2, 3);
    assert.equal(result, 5);
  });

  it("should throw an error for non-numeric second argument", () => {
    assert.throws(
      () => sum(2, "one"),{
        name:'TypeError',
        message:"argument must be a number"
      }
    );
  });
  it("should return the sum of a positive integer and zero", () => {
    assert.equal(sum(20, 0), 20, "The sum of 20 and 0 should be 20");
  });

  it("should return the sum of two negative integers", () => {
    assert.equal(sum(-2, -3), -5, "The sum of -2 and -3 should be -5");
  });
});
