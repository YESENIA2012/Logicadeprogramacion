var lea = require("prompt-sync")();
var vector1 = [5, 2, 7, 4];
var vector2 = [5, 2, 7];
var vector3 = [];
var contador2 = 0;
var contador = 0;
var elementoIgual = true;
var elementoEnVector2 = 0;

for (contador = 0; contador < vector1.length; contador++) {
  vector3[contador] = vector1[contador];
}
console.log("Elementos del vector 3=", vector3);

for (contador = 0; contador < vector2.length; contador++) {
  elementoEnVector2 = vector2[contador];
  console.log("elemento del vector 2: ", elementoEnVector2);

  while (contador2 < vector1.length && elementoIgual == true) {
    elementoEnVector1 = vector1[contador2];
    console.log("elementos vector 1", elementoEnVector1);

    if (elementoEnVector2 === elementoEnVector1) {
      elementoIgual = false;
    }
    contador2 = contador2 + 1;
  }
  if (elementoEnVector2 != elementoEnVector1) {
    elementoIgual = true;
    console.log("elemento diferente", elementoIgual);
    var longitud = vector3.length;
    vector3[longitud] = elementoEnVector2;
  }
  contador2 = 0;
  elementoIgual = true;
}

console.log("vector 3= ", vector3);
