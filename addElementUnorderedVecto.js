let lea = require("prompt-sync")();

var vector = [7, 0, 1, 10, 9, 5];
var tamañoVector = vector.length - 1;
var elementoInsertar = parseInt(lea("Ingrese el elemento a insertar: "));

function insertarElemenVectorDesorden(vector, tamañoVector, elementoInsertar) {
  tamañoVector = tamañoVector + 1;
  vector[tamañoVector] = elementoInsertar;
  return vector;
}

nuevoVector = insertarElemenVectorDesorden(
  vector,
  tamañoVector,
  elementoInsertar
);

console.log("El vector= ", nuevoVector);
