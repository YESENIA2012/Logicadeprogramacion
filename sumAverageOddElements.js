var lea = require("prompt-sync")();

var cantidadElementos = parseInt(
  lea("Ingrese la cantidad de elementos del vector:: ")
);
var sumatoria = 0;
var contadorNumImpares = 0;
var arregloNumeros = [];
var promedio = 0;
for (var contador = 0; contador < cantidadElementos; contador++) {
  var numero = parseInt(lea("Ingrese el número: "));
  arregloNumeros[contador] = numero;
  if (contador % 2 === 1) {
    sumatoria = sumatoria + arregloNumeros[contador];
    contadorNumImpares = contadorNumImpares + 1;
  }
}
promedio = sumatoria / contadorNumImpares;
console.log("La suma= ", sumatoria, "y el promedio = ", promedio);
