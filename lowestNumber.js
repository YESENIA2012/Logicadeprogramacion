//Hacer un algoritmo que encuentre el número menor de un grupo de números positivos

var lea = require("prompt-sync")();

var cantNumeros = parseInt(lea("Ingrese la cantidad de números a revisar: "));
var contadorNum = 1;
var numeroMenor = 0;

while (contadorNum <= cantNumeros) {
  var numero = parseInt(lea("Ingrese un número: "));

  if (contadorNum == 1) {
    numeroMenor = numero;
  } else if (numero < numeroMenor) {
    numeroMenor = numero;
  }
  contadorNum = contadorNum + 1;
}
console.log("El número menor= ", numeroMenor);
