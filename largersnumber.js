// Elaborar un algoritmo que encuentre el mayor valor entre un grupo de datos posituvos

var lea = require("prompt-sync")();

var cantNumeros = parseInt(lea("Ingrese la cantidad de números a revisar: "));
var contadorNum = 1;
var numeroMayor = 0;

while (contadorNum <= cantNumeros) {
  var numerosPositivos = parseInt(lea("Ingrese solo números positivo: "));

  if (numerosPositivos > numeroMayor) {
    numeroMayor = numerosPositivos;
  }
  contadorNum = contadorNum + 1;
}
console.log("El número mayor = ", numeroMayor);
