var expect = require("chai").expect;

const mainfunction = require("../addEvenElementsVector");

describe("Add the even numbers of the vector", function () {
  it("should show 12 and a length of 6", function () {
    const vector = [1, 2, 3, 4, 5, 6];
    const result = mainfunction(vector);
    const expectedResult = 12;
    expect(result).to.eql(expectedResult);
  });
  it("should show 12 and a length of 6", function () {
    const vector = [0, 0, 0, 0, 0];
    const result = mainfunction(vector);
    const expectedResult = 0;
    expect(result).to.eql(expectedResult);
  });
});
