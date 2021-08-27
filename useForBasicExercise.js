//Encontrar el factorial de un número N positivo,
var lea = require("prompt-sync")();

var numero = parseInt(lea("Ingrese un número: "));
var factorial = 1;

for (contador = 1; contador <= numero; contador++) {
  factorial = factorial * contador;
}
console.log("El factorial de", numero + "=", factorial);
