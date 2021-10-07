let lea = require("prompt-sync")();

var vector = [
  [, , , ,],
  [, , , ,],
  [, , , ,],
  [, , , ,],
];

for (contador = 0; contador < vector.length; contador++) {
  let filaMatrix = vector[contador];
  let contador2 = 0;
  console.log("Fila: ", contador);
  while (contador2 < filaMatrix.length) {
    let numeroInsertarColumnas = parseInt(lea("Elemento a insertar: "));
    filaMatrix[contador2] = numeroInsertarColumnas;
    contador2 = contador2 + 1;
  }
}
console.log(vector);

var sumaDiagonalPrincipal = 0;
var sumaDiagonalSecundaria = 0;

for (contador = 0; contador < vector.length; contador++) {
  let filaMatrix = vector[contador];
  for (contador2 = 0; contador2 < filaMatrix.length; contador2++) {
    let columnaMatrix = filaMatrix[contador2];
    if (contador == contador2) {
      sumaDiagonalPrincipal = sumaDiagonalPrincipal + columnaMatrix;
    }
    if (contador + contador2 == vector.length - 1) {
      sumaDiagonalSecundaria = sumaDiagonalSecundaria + columnaMatrix;
    }
  }
}
console.log("La suma de la diagonal principal = ", sumaDiagonalPrincipal);
console.log("La suma de la diagonal Secundaria = ", sumaDiagonalSecundaria);
