var expect = require("chai").expect;
//Los dos puntos y el / es para que el se salga del directorio
const mainfunction = require("../changeVectorElementZero");

describe("Convert Numbers Into Zeros", function () {
  it("should return an array with four zeros", function () {
    const vector = [1, 1, 1, 3, 4, 1, 5, 6, 1];
    const result = mainfunction(vector);
    const expectedResult = [1, 0, 0, 3, 4, 0, 5, 6, 0];
    //la función equal revisa y compara que los dos vectores sean iguales
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(9);
  });
  it("should return an empty array and a length of zero", function () {
    const vector = [];
    const result = mainfunction(vector);
    const expectedResult = [];
    //la función equal revisa y compara que los dos vectores sean iguales
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(0);
    // pasarle un arreglo y que todos los elementos sean 0
  });
  it("Convert Numbers two Into Zeros and a length of seven", function () {
    const vector = [2, 3, 4, 2, 6, 100, 2];
    const result = mainfunction(vector);
    const expectedResult = [2, 3, 4, 0, 6, 100, 0];
    //la función equal revisa y compara que los dos vectores sean iguales
    expect(result).to.eql(expectedResult);
    expect(result).to.have.lengthOf(7);
    // pasarle un arreglo y que todos los elementos sean 0
  });
});
