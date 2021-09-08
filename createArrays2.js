var lea = require("prompt-sync")();

var cantidadElementosVectorA = parseInt(
  lea("Cantidad de elemetos para el vector A: ")
);
var cantidadElementosVectorB = parseInt(
  lea("Cantidad de elemetos para el vector B: ")
);
var vectorA = [];
var vectorB = [];
var vectorC = [];
var contador = 0;

for (contador = 0; contador < cantidadElementosVectorA; contador++) {
  var numero = parseInt(lea("Introduzca el elemento para el vector A: "));
  vectorA[contador] = numero;
}
for (contador = 0; contador < cantidadElementosVectorB; contador++) {
  var numero = parseInt(lea("Introduzca el elemento para el vector B: "));
  vectorB[contador] = numero;
}
for (contador = 0; contador < vectorA.length; contador++) {
  vectorC[contador] = vectorA[contador];
}

for (contador = 0; contador < vectorB.length; contador++) {
  let elementosVectorB = vectorB[contador];
  let contador2 = 0;
  var elementosIguales = true;

  while (contador2 < vectorA.length && elementosIguales == true) {
    var elementosVectorA = vectorA[contador2];

    if (elementosVectorB === elementosVectorA) {
      elementosIguales = false;
    }
    contador2 = contador2 + 1;
  }
  if (elementosVectorB != elementosVectorA) {
    elementosIguales = true;
    let longitud = vectorC.length;
    vectorC[longitud] = elementosVectorB;
  }
  contador2 = 0;
  elementosIguales = true;
}

console.log("los elementos del vector C= ", vectorC);
