function sumaPares(vector) {
  let sumaElementos = 0;
  for (contador = 0; contador < vector.length; contador++) {
    let elementoVector = vector[contador];

    if (elementoVector % 2 === 0) {
      sumaElementos = sumaElementos + elementoVector;
    }
  }
  return sumaElementos;
}
module.exports = sumaPares;
