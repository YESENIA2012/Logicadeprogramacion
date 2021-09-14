var lea = require("prompt-sync")();

var cantidadElementos = parseInt(
  lea("Ingrese la cantidad de elementos del vector: ")
);
var vector = [];

for (contador = 0; contador < cantidadElementos; contador++) {
  let numero = parseInt(lea("Ingrese el número: "));
  vector[contador] = numero;
}

function ordenarElementos(vector) {
  for (contador = 0; contador < vector.length; contador++) {
    for (contador2 = contador + 1; contador2 < vector.length; contador2++) {
      if (vector[contador] > vector[contador2]) {
        let elementoMayor = vector[contador];
        vector[contador] = vector[contador2];
        vector[contador2] = elementoMayor;
      }
    }
  }
  return vector;
}

ordenElementos = ordenarElementos(vector);

console.log("el vector es: ", vector);
