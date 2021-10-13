var expect = require("chai").expect;

const mainfunction = require("../sumMainSecundaryDiagonal");

describe("Sum of main and secundary Diagonals", function () {
  it("should show the sum between the main and secondary diagonal", function () {
    const matrix = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ];

    const result = mainfunction(matrix);
    const result1 = result.sumatoriaDiagonalPrincipal;
    const result2 = result.sumatoriaDiagonalSecundaria;

    const expectedResult = 10;
    const expectedResult2 = 10;
    expect(result1).to.eql(expectedResult);
    expect(result2).to.eql(expectedResult2);
  });
  it("it should show 0 as a result", function () {
    const matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const result = mainfunction(matrix);
    const result1 = result.sumatoriaDiagonalPrincipal;
    const result2 = result.sumatoriaDiagonalSecundaria;

    const expectedResult = 0;
    const expectedResult2 = 0;
    expect(result1).to.eql(expectedResult);
    expect(result2).to.eql(expectedResult2);
  });
});
