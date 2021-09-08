var lea = require("prompt-sync")();

var cantidadElementos = parseInt(
  lea("Ingrese la cantidad de elementos del vector: ")
);
var vector = [];
var contador2 = 0;

function leerELementos(cantidadElementos, vector) {
  for (contador = 0; contador < cantidadElementos; contador++) {
    var numero = parseInt(lea("Ingrese el número: "));
    vector[contador] = numero;
  }
  return vector;
}

function encontrarElementoMayor(cantidadElementos, vector) {
  let elementoMayor = 0;
  let posiciónMayor = 0;
  while (contador2 < vector.length) {
    let elementoVector = vector[contador2];

    if (elementoVector > elementoMayor) {
      elementoMayor = elementoVector;
      posiciónMayor = contador2;
    }
    contador2 = contador2 + 1;
  }
  return posiciónMayor;
}

elementos = leerELementos(cantidadElementos, vector);
console.log(elementos);

posicionElementoMayor = encontrarElementoMayor(cantidadElementos, vector);

console.log("La posición del elemento mayor = ", posicionElementoMayor);
