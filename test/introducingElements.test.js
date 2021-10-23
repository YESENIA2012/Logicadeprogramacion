var expect = require("chai").expect;
const sinon = require("sinon");
const lea = require("prompt-async");
const mainfunction = require("../introducingElementsTwoDimensionalArray");
// const functionUnderTest = require("../introducingElementUnderTest");

describe("Add elements", function () {
  let randomNumbers = [];

  it("should show an array of length two", async function () {
    sinon.stub(lea, "start").callsFake(function fakeFn() {
      return null;
    });
    sinon.stub(lea, "get").callsFake(function fakeFn() {
      const randomNumber = parseInt(Math.random() * 100);
      const tamañoMatrix = randomNumbers.length;
      randomNumbers[tamañoMatrix] = randomNumber;
      randomNumberObject = { numero: randomNumber };
      return randomNumberObject;
    });
    const matrix = [
      [, , ,],
      [, , ,],
    ];
    const resultado = await mainfunction.introducirElementosMatrix(matrix);
    console.log(randomNumbers);
    console.log(resultado);

    expect(randomNumbers[0]).to.eql(resultado[0][0]);
    expect(resultado).to.have.lengthOf(2);
  });
});
