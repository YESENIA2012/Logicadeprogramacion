var lea = require("prompt-sync")();

var cantidadMultiplos = parseInt(lea("Ingrese los multiplos a conocer: "));

var contador = 1;
var multiplo = 0;

var numero = parseInt(lea("Ingrese el número a multiplicar: "));

function encontrarMultiplo(numero, contador, multiplo) {
  multiplo = numero * contador;
  return multiplo;
}

while (contador <= cantidadMultiplos) {
  multiploNumero = encontrarMultiplo(numero, contador, multiplo);

  console.log("Los primeros 40 múltiplos de", numero + "son: ", multiploNumero);
  contador = contador + 1;
}
