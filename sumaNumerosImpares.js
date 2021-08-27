//Hacer un algoritmo que encuentre la suma de los números impares comparados entre 1 y N

var lea = require("prompt-sync")();

var cantidadVeces = 10;
var contadorVeces = 1;
var sumaNumerosImpares = 0;

while (contadorVeces <= cantidadVeces) {
  var numerosImpares = parseInt(lea("Ingrese solo números impares: "));
  sumaNumerosImpares = sumaNumerosImpares + numerosImpares;
  contadorVeces = contadorVeces + 1;
}
console.log("La suma de los números impares= ", sumaNumerosImpares);
