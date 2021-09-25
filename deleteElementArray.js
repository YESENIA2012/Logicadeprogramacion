/* 
Hacer un algoritmo que excluya (no incluir) un número dado por el usuario y devuelva el arreglo sin el elemento excluido

PREGUNTA 1: qué es lo primero que se hacer en este algoritmo
RESPUESTA: Sacar cada elemento del arreglo

PREGUNTA 2: Qué seria lo siguiente que tendría que hacer
RESPUESTA: Comparar si el elemento es diferente al elemento que quiero excluir del vector

PREGUNTA 3: Qué es lo siguiente que debo hacer:
RESPUESTA: Crear el nuevo vector e insertar los elemntos que entren a la condición

PREGUNTA 4: Porqué se esta insertando un indice vacio, cuándo no entra a la condición
RESPUESTO: Por que la longitud del vector es mas grande que la longitud del vectorNuevo

PREGUNTA 5: Cómo hago yo para saber en que posición en el nuevo vector debo insertar el elemento

*/

let lea = require("prompt-sync")();
var vector = [1, 2, 3, 4, 5];
var elementoBorrar = parseInt(lea("Ingrese el elemento que se desea borrar: "));

/* 
contador = 0
vectorNuevoLongitud = 0
vector[vectorNuevoLongitud] = 1

contador = 1
vectorNuevoLongitud = 1
vector[vectorNuevoLongitud] = 2

contador = 2
vectorNuevoLongitud = 2
vector[vectorNuevoLongitud] = 4

contador = 3
vectorNuevoLongitud = 3
vector[vectorNuevoLongitud] = 5

*/
function filterArraySolutionOne(vector) {
  var contador = 0;
  const vectorNuevo = [];
  while (contador < vector.length) {
    const elementoVector = vector[contador];

    if (elementoVector != elementoBorrar) {
      const vectorNuevoLongitud = vectorNuevo.length;
      vectorNuevo[vectorNuevoLongitud] = elementoVector;
    }
    contador = contador + 1;
  }
  console.log("Solution One: ", vectorNuevo);
}

function filterArraySolutionTwo(vector) {
  var contador = 0;
  var contador2 = 0;
  const vectorNuevo = [];
  while (contador < vector.length) {
    const elementoVector = vector[contador];

    if (elementoVector != elementoBorrar) {
      vectorNuevo[contador2] = elementoVector;
      contador2 = contador2 + 1;
    }
    contador = contador + 1;
  }
  console.log("Solution Two: ", vectorNuevo);
}

filterArraySolutionOne(vector);
filterArraySolutionTwo(vector);
