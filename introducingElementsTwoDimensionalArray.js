const lea = require("prompt-async");

async function introducirElementosMatrix(matrix) {
  lea.start();
  var matrixCopia = [];

  for (contador = 0; contador < matrix.length; contador++) {
    var contador2 = 0;
    matrixCopia[contador] = [];
    var filaMatriz = matrix[contador];

    while (contador2 < filaMatriz.length) {
      var numeroInsertarColumnas = await lea.get("numero");
      matrixCopia[contador][contador2] = parseInt(
        numeroInsertarColumnas.numero
      );
      contador2 = contador2 + 1;
    }
  }
  return matrixCopia;
}

module.exports = { introducirElementosMatrix };
