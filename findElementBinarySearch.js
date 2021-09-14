let lea = require("prompt-sync")();

var vector = [7, 21, 37, 42, 57, 76];
console.log(vector);
var encontrado = false;
var indiceMinimo = 0;
var indiceMaximo = vector.length - 1;
var valorBuscado = parseInt(lea("Ingrese el valor a buscar: "));

function busquedaBinaria(vector, valorBuscado) {
  while (indiceMinimo <= indiceMaximo && encontrado == false) {
    var mitadVector = Math.floor((indiceMinimo + indiceMaximo) / 2);
    if (valorBuscado == vector[mitadVector]) {
      encontrado = true;
    } else if (valorBuscado < vector[mitadVector]) {
      indiceMaximo = mitadVector - 1;
    } else {
      indiceMinimo = mitadVector + 1;
    }
  }
  return mitadVector;
}

posicionElemento = busquedaBinaria(vector, valorBuscado);

if (encontrado == true) {
  console.log(
    "El valor ",
    valorBuscado,
    "esta en la posición: ",
    posicionElemento
  );
} else {
  "El valor", valorBuscado, "no se encuentra dentro del vecto";
}
