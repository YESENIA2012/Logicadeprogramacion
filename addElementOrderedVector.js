let lea = require("prompt-sync")();
var vector = [10, 21, 53, 74, 91, 100];
var valorInsertar = parseInt(lea("Ingrese la variable a insertar: "));
var contador = 0;

function ingresarElemtOrdenado(vector, valorInsertar, contador) {
  while (contador < vector.length && valorInsertar > vector[contador]) {
    contador = contador + 1;
    var valorAnterior = vector[contador];
  }
  console.log(
    "La posición donde se debe infresar el elemento es en el indice= ",
    contador
  );
  vector[contador] = valorInsertar;
  tamañoVector = vector.length + 1;
  contador2 = contador + 1;

  while (contador2 <= tamañoVector) {
    elemento = vector[contador2];
    if (valorAnterior >= valorInsertar) {
      vector[contador2] = valorAnterior;
    }
    valorAnterior = elemento;
    valorInsertar = valorAnterior;
    contador2 = contador2 + 1;
  }
  return vector;
}

nuevoVector = ingresarElemtOrdenado(vector, valorInsertar, contador);
console.log(nuevoVector);
