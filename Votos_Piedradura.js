//Elaborar un algoritmo que muestre número de votos por cada uno y el total de votantes

var lea = require("prompt-sync")();

console.log("Si vota por el número 1 el voto es para Pedro");
console.log("Si vota por el número 2 el voto es para Pablo");
console.log("Si vota por el número 3 el voto es para Bilma");
console.log("Si vota por el número 4 el voto es para el voto en Blanco");

var numero_de_cedula = lea("Número de cédula del votante: ");
var cont_votos_Pedro = 0;
var cont_votos_Pablo = 0;
var cont_votos_Bilma = 0;
var cont_votos_Blanco = 0;

while (numero_de_cedula > 0) {
  var voto = lea("Cantidato por el que va a votar: ");

  if (voto == 1) {
    cont_votos_Pedro = cont_votos_Pedro + 1;
  } else if (voto == 2) {
    cont_votos_Pablo = cont_votos_Pablo + 1;
  } else if (voto == 3) {
    cont_votos_Bilma = cont_votos_Bilma + 1;
  } else {
    cont_votos_Blanco = cont_votos_Blanco + 1;
  }
  var numero_de_cedula = lea("Número de cédula del votante: ");
}
var Total_votos =
  cont_votos_Pedro + cont_votos_Pablo + cont_votos_Bilma + cont_votos_Blanco;
console.log("Total de votos para Pedro = ", cont_votos_Pedro);
console.log("Total de votos para Pablo = ", cont_votos_Pablo);
console.log("Total de votos para Bilma = ", cont_votos_Bilma);
console.log("Total de votos en Blanco= ", cont_votos_Blanco);
console.log("Número total de votantes= ", Total_votos);
