let lea = require("prompt-sync")();
var vector = [1, 2, 1, 3, 4, 1, 5, 6, 1];
var contador = 1;
var primerElemento = vector[0];
console.log(primerElemento);

while (contador < vector.length) {
  elementoVector = vector[contador];
  var contador2 = 1;

  if (elementoVector == primerElemento) {
    vector[contador] = 0;
    contador2 = contador2 + 1;
  }
  contador = contador + 1;
}
console.log(vector);
console.log("Se modificaron", contador2, "posiciones del vector");
