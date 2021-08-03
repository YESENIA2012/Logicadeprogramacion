//Hacer un algoritmo que encuentre la desviación típica de un grupo de ddatos positivos
var lea = require("prompt-sync")()

var vecesAcalcular = parseFloat(lea('Ingrese la cantidad de veces que se quiere halar la Desviación Típica= '))

var contadorVeces = 1

while (contadorVeces <= vecesAcalcular) {
    var varianza = parseFloat(lea('Ingrese el valor de la varianza en números positivos= '))
    var nPoblación = parseFloat(lea('Ingrese la cantidad de la pobñación estudiada= '))
    var desviacionTipica = varianza / nPoblación
    desviacionTipica = Math.sqrt(desviacionTipica)
    console.log("La desviación típica del grupo de datos dados= ", desviacionTipica)
}
contadorVeces = contadorVeces + 1

