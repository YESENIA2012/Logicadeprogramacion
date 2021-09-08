const lea = require("prompt-sync")();
var cantidadElementos = parseInt(
  lea("Ingrese la cantidad de elementos del vector: ")
);
var vector = [];
var posiciónElemento = 0;

for (contador = 0; contador < cantidadElementos; contador++) {
  let numero = parseInt(lea("Ingrese el número: "));
  vector[contador] = numero;
}

const valorBuscado = parseInt(lea("Ingrese el elemento a buscar: "));

function encontrarValorBuscado(cantidadElementos, vector, valorBuscado) {
  let contador2 = 0;
  while (contador2 < vector.length) {
    let elementoVector = vector[contador2];

    if (elementoVector == valorBuscado) {
      posiciónElemento = contador2;
    } else {
      posiciónElemento = null;
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
if (posiciónElemento != null) {
  console.log("El elemento buscado está em la posición: ", elementoBuscado);
} else {
  console.log("El valor: ", valorBuscado, "no se encuentra en el vector");
}
