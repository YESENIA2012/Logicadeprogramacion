var lea = require("prompt-sync")();

var vector = [
  [, , ,],
  [, ,],
  [, ,],
];

for (contador = 0; contador < vector.length; contador++) {
  var filaMatrix = vector[contador];
  var contador2 = 0;
  console.log("Fila: ", contador);
  while (contador2 < filaMatrix.length) {
    var numeroInsertarColumnas = parseInt(lea("Elemento a insertar: "));
    filaMatrix[contador2] = numeroInsertarColumnas;
    contador2 = contador2 + 1;
  }
}
console.log(vector);
