let lea = require("prompt-sync")();
var vector = [10, 21, 53, 74, 91, 100];
var valorInsertar = parseInt(lea("Ingrese la variable a insertar: "));
var encontrado = false;
var indiceMinimo = 0;
var indiceMaximo = vector.length - 1;

function busquedaBinaria(vector, valorInsertar) {
  while (indiceMinimo <= indiceMaximo && encontrado == false) {
    var mitadVector = Math.floor((indiceMinimo + indiceMaximo) / 2);
    if (valorInsertar == vector[mitadVector]) {
      encontrado = true;
    } else if (valorInsertar < vector[mitadVector]) {
      indiceMaximo = mitadVector - 1;
    } else {
      indiceMinimo = mitadVector + 1;
    }
  }
  return encontrado;
}

function ingresarElemtOrdenado(vector, valorInsertar) {
  var contador = 0;
  var posicionContador = contador;
  var valorAnterior = vector[contador];
  while (
    contador < vector.length &&
    valorInsertar > vector[contador] &&
    encontrado == false
  ) {
    contador = contador + 1;
    var valorAnterior = vector[contador];
    posicionContador = contador;
  }
  console.log(posicionContador);

  console.log(
    "La posición donde se debe ingresar el elemento es en el indice= ",
    contador
  );
  tamañoVector = vector.length + 1;
  vector[contador] = valorInsertar;

  if (posicionContador == vector.length) {
    vector[contador + 1] = valorInsertar;
  } else {
    contador2 = contador + 1;
    while (contador2 < tamañoVector) {
      elemento = vector[contador2];
      vector[contador2] = valorAnterior;
      valorAnterior = elemento;

      contador2 = contador2 + 1;
    }
  }
  return vector;
}

posicionElemento = busquedaBinaria(vector, valorInsertar);

if (encontrado == true) {
  console.log("El elemento ya esta dentro del vector");
} else {
  nuevoVector = ingresarElemtOrdenado(vector, valorInsertar);
  console.log(nuevoVector);
}
