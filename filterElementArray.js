let lea = require("prompt-sync")();
var vector = [1, 2, 3, 4, 5];
var contador = 0;
var encontrado = 0;
var elementoBorrar = parseInt(lea("Ingrese el elemento que se desea borrar: "));
var posicionBorrar = contador;
var vectorNuevo = [];
while (contador < vector.length && encontrado == false) {
  if (elementoBorrar == vector[contador]) {
    encontrado = true;
    posicionBorrar = contador;
    console.log("El elemento a borrar esta en la posición: ", posicionBorrar);
  }
  vectorNuevo[contador] = vector[contador - 1];
  contador = contador + 1;
}

if (encontrado == false) {
  console.log("El elemnento no esta dentro del vector");
}
contador2 = contador;

while (contador2 < vector.length) {
  vectorNuevo[contador2] = vector[contador2];
  contador2 = contador2 + 1;
}
console.log(vectorNuevo);
