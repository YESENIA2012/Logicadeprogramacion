var expect = require("chai").expect;
//Los dos puntos y el / es para que el se salga del directorio
const mainfunction = require("../changeVectorElementZero");

describe("Should return the elements equal to the position one in zero", function () {
  it("Should return an array with four zeros", function () {
    const vector = [1, 1, 1, 3, 4, 1, 5, 6, 1];
    const result = mainfunction(vector);
    const expectedResult = [1, 0, 0, 3, 4, 0, 5, 6, 0];
    //la función equal revisa y compara que los dos vectores sean iguales
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(9);
  });
  it("Should return an empty array and a length of zero", function () {
    const vector = [];
    const result = mainfunction(vector);
    const expectedResult = [];
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(0);
  });
  it("Should return the elements equal to the position one in zero and a length of seven", function () {
    const vector = [2, 3, 4, 2, 6, 100, 2];
    const result = mainfunction(vector);
    const expectedResult = [2, 3, 4, 0, 6, 100, 0];
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(7);
  });
  it("Should return a vector with all elements at zero", function () {
    const vector = [0, 0, 0, 0, 0];
    const result = mainfunction(vector);
    const expectedResult = [0, 0, 0, 0, 0];
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(5);
  });
});
