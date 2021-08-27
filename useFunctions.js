var lea = require("prompt-sync")();

var numerosOrdenar = parseInt(lea("Ingrese cantidad de números: "));
var numeroMenor = 0;
var numeroMedio = 0;
var numeroMayor = 0;
var contador = 1;

function encontrarMenor(contador, num, numeroMenor) {
  if (contador == 1) {
    numeroMenor = num;
  } else if (num < numeroMenor) {
    numeroMenor = num;
  }
  return numeroMenor;
}

function encontrarMayor(num, numeroMenor, numeroMayor) {
  if (num > numeroMenor) {
    numeroMayor = num;
  } else if (numeroMayor > num) {
    numeroMayor = numeroMayor;
  } else {
    numeroMayor = num;
  }
  return numeroMayor;
}

function mostrarNumeros(numeroMenor, numeroMedio, numeroMayor) {
  console.log("El número menor es: ", numeroMenor);
  console.log("El número medio= ", numeroMedio);
  console.log("El número mayor= ", numeroMayor);
}

while (contador <= numerosOrdenar) {
  var num = parseInt(lea("Ingrese un número: "));

  numeroMenor = encontrarMenor(contador, num, numeroMenor);

  numeroMayor = encontrarMayor(num, numeroMenor, numeroMayor);

  contador = contador + 1;
}

mostrarNumeros(numeroMenor, numeroMedio, numeroMayor);
