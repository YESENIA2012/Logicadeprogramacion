function convertDuplicatedNumbersIntoZeros(vector) {
  const copiaVector = vector.map((number) => {
    return number;
  });
  var contador = 1;
  var contador2 = 0;
  var primerElemento = copiaVector[0];

  while (contador < copiaVector.length) {
    elementoVector = copiaVector[contador];

    if (elementoVector == primerElemento) {
      copiaVector[contador] = 0;
      contador2 = contador2 + 1;
    }
    contador = contador + 1;
  }
  return copiaVector;
}
//convertDuplicatedNumbersIntoZeros(vector);
//Para hacer pública la función
module.exports = convertDuplicatedNumbersIntoZeros;
