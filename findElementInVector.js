var lea = require("prompt-sync")();
var cantidadElementos = parseInt(
  lea("Ingrese la cantidad de elementos del vector: ")
);
var vector = [];

for (contador = 0; contador < cantidadElementos; contador++) {
  var numero = parseInt(lea("Ingrese el número: "));
  vector[contador] = numero;
}

var valorBuscado = parseInt(lea("Ingrese el elemento a buscar: "));

function encontrarValorBuscado(cantidadElementos, vector, valorBuscado) {
  let contador2 = 0;
  while (contador2 < vector.length) {
    let elementoVector = vector[contador2];

    if (elementoVector == valorBuscado) {
      var posiciónElemento = contador2;
    }
    contador2 = contador2 + 1;
  }
  return posiciónElemento;
}

elementoBuscado = encontrarValorBuscado(
  cantidadElementos,
  vector,
  valorBuscado
);

console.log("El elemento buscado está em la posición: ", elementoBuscado);
