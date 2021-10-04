//Algoritmo para sumar elementos pares de un vector
let lea = require("prompt-sync")();

var vector = [];
var sumaElementos = 0;
var cantidadElementos = parseInt(
  lea("Introduzca la cantidad de elementos del vector: ")
);

for (contador = 0; contador < cantidadElementos; contador++) {
  let numero = parseInt(lea("Introduzca el elemento para el vector: "));
  vector[contador] = numero;
}

for (contador = 0; contador < vector.length; contador++) {
  var elementoVector = vector[contador];

  if (elementoVector % 2 === 0) {
    sumaElementos = sumaElementos + elementoVector;
  }
}
console.log("La suma de los elementos pares = ", sumaElementos);
