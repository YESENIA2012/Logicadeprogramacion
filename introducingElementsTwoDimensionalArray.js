const lea = require("prompt-async");

var matrix = [
  [, ,],
  [, ,],
  [, ,],
];

async function introducirElementosMatrix(matrix) {
  lea.start();
  for (contador = 0; contador < matrix.length; contador++) {
    var filaMatrix = matrix[contador];
    var contador2 = 0;
    console.log("Fila: ", contador);
    while (contador2 < filaMatrix.length) {
      var numeroInsertarColumnas = await lea.get("numero");
      console.log(numeroInsertarColumnas);

      filaMatrix[contador2] = parseInt(numeroInsertarColumnas.numero);

      contador2 = contador2 + 1;
    }
  }
  //console.log(matrix);
  return matrix;
}

var introducir = introducirElementosMatrix(matrix).then(function (matrix) {
  console.log(matrix);
});
//var introducir = introducirElementosMatrix(matrix);
console.log(introducir);

//module.exports = { introducirElementosMatrix };
