/*let lea = require("prompt-sync")();

var matrix = [
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
];

for (contador = 0; contador < matrix.length; contador++) {
  let filaMatrix = matrix[contador];
  let contador2 = 0;
  console.log("Fila: ", contador);
  while (contador2 < filaMatrix.length) {
    let numeroInsertarColumnas = parseInt(lea("Elemento a insertar: "));
    filaMatrix[contador2] = numeroInsertarColumnas;
    contador2 = contador2 + 1;
  }
}
console.log(matrix);
*/
function sumDiagonals(matrix) {
  var sumaDiagonalPrincipal = 0;
  var sumaDiagonalSecundaria = 0;

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
//var diagonales = sumDiagonals(matrix);

//console.log(diagonales);
//console.log("Principal", diagonales.variableDeSumatoria);
//console.log("Secundaria", diagonales.variableDeSumatoriaDiagonalSecundaria);
module.exports = sumDiagonals;
