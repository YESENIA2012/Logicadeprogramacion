var expect = require("chai").expect;
const sinon = require("sinon");
const lea = require("prompt-async");
const mainfunction = require("../introducingElementsTwoDimensionalArray");

describe("Add elements", function () {
  let randomNumbers = [];
  before(function () {
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
  });
  after(function () {
    lea.start.restore();
    lea.get.restore();
  });
  beforeEach(function () {
    randomNumbers = [];
  });

  it("should insert random numbers into a 2 * 3 matrix", async function () {
    const matrix = [
      [, , ,],
      [, , ,],
    ];
    const resultado = await mainfunction.introducirElementosMatrix(matrix);

    expect(randomNumbers[0]).to.eql(resultado[0][0]);
    expect(resultado).to.have.lengthOf(2);
    expect(randomNumbers[3]).to.eql(resultado[1][0]);
    expect(resultado[0]).to.have.lengthOf(3);
    expect(randomNumbers[1]).to.eql(resultado[0][1]);
    expect(resultado[1]).to.have.lengthOf(3);
  });

  it("should insert random numbers into a 3 * 3 matrix", async function () {
    const matrix = [
      [, ,],
      [, ,],
      [, ,],
    ];
    const resultado = await mainfunction.introducirElementosMatrix(matrix);

    expect(resultado).to.have.lengthOf(3);
    expect(randomNumbers[0]).to.eql(resultado[0][0]);
    expect(randomNumbers[3]).to.eql(resultado[1][1]);
    expect(resultado[0]).to.have.lengthOf(2);
    expect(randomNumbers[1]).to.eql(resultado[0][1]);
    expect(resultado[1]).to.have.lengthOf(2);
  });
});
