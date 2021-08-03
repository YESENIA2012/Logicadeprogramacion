//Hacer un algoritmo que encuentre la suma de los números impares comparados entre 1 y N

var lea = require("prompt-sync")()

var cantNumImpares = parseInt(lea('Ingrese la cantidad de números impares a sumar = '))
var numImpares = parseInt(lea('Ingrese solo números impareso = '))

var contadorNumImpares = 1
var sumNumImpares = 1
while (contadorNumImpares <= cantNumImpares) {
    sumNumImpares = sumNumImpares + numImpares + 1 
    contadorNumImpares = contadorNumImpares + 1
}
console.log("La suma de los números impares es = ", sumNumImpares)

