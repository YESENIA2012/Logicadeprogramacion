//Se tiene una serie de N números, se quiere saber si dentro hay un número con valor 0
var lea = require("prompt-sync")();

var N_numeros_enteros = parseInt(lea("Ingrese la cantidad de veces: "));
var conta_N_numeros = 1;
var buscador_numero = false;

while (conta_N_numeros <= N_numeros_enteros && buscador_numero == false) {
  let numero = parseInt(lea("Ingrese el número: "));

  if (numero == 0) {
    buscador_numero = true;
    encontrado = true;
  } else {
    conta_N_numeros = conta_N_numeros + 1;
  }
}

if (buscador_numero == true) {
  console.log("Si hay un número 0 entre ellos");
} else {
  console.log("No hay un número 0 entre ellos");
}
