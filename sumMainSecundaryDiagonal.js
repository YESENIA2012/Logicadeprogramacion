function sumDiagonals(matrix) {
  let sumaDiagonalPrincipal = 0;
  let sumaDiagonalSecundaria = 0;

  for (contador = 0; contador < matrix.length; contador++) {
    let filaMatrix = matrix[contador];
    for (contador2 = 0; contador2 < filaMatrix.length; contador2++) {
      let columnaMatrix = filaMatrix[contador2];
      if (contador == contador2) {
        sumaDiagonalPrincipal = sumaDiagonalPrincipal + columnaMatrix;
      }
      if (contador + contador2 == matrix.length - 1) {
        sumaDiagonalSecundaria = sumaDiagonalSecundaria + columnaMatrix;
      }
    }
  }
  return {
    sumatoriaDiagonalPrincipal: sumaDiagonalPrincipal,
    sumatoriaDiagonalSecundaria: sumaDiagonalSecundaria,
  };
}
module.exports = sumDiagonals;
