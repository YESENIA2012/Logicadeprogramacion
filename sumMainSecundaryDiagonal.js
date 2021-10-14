function sumDiagonals(matrix) {
  let sumPrimaryDiagonal = 0;
  let sumSecundaryDiagonal = 0;

  for (contador = 0; contador < matrix.length; contador++) {
    let filaMatrix = matrix[contador];
    for (contador2 = 0; contador2 < filaMatrix.length; contador2++) {
      let columnaMatrix = filaMatrix[contador2];
      if (contador == contador2) {
        sumPrimaryDiagonal = sumPrimaryDiagonal + columnaMatrix;
      }
      if (contador + contador2 == matrix.length - 1) {
        sumSecundaryDiagonal = sumSecundaryDiagonal + columnaMatrix;
      }
    }
  }
  return {
    sumatoriaDiagonalPrincipal: sumaDiagonalPrincipal,
    sumatoriaDiagonalSecundaria: sumaDiagonalSecundaria,
  };
}
module.exports = sumDiagonals;
