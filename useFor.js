//Algoritmo que muestre por estudiante, la información de cada materia, número de créditos cursados,
//promedio de créditos y el promedio de créditos ponderados de todos los estudiantes
var lea = require("prompt-sync")();

var codigoEstudiante = lea("Ingrese el código del estudiante: ");
var numeroTotalEstudiantes = 0;
var sumaPromedioCreditos = 0;

while (codigoEstudiante > 0) {
  var nombreEstudiante = lea("Ingrese el nombre del estudiante: ");
  var numeroMateriasCursadas = parseInt(
    lea("Ingrese el número de materias cursadas: ")
  );
  var numeroCreditosCursados = 0;
  var sumaCreditos = 0;

  console.log(
    "Código del estudiante: ",
    codigoEstudiante + "Nombre del estudiante: ",
    nombreEstudiante + "Cantidad de materias cursadas= ",
    numeroMateriasCursadas
  );
  for (let contador = 1; contador <= numeroMateriasCursadas; contador++) {
    var codigoMateria = lea("Ingrese el código de la materia: ");
    var nombreMateria = lea("Ingrese el nombre de la materia: ");
    var numeroCreditosMateria = parseInt(
      lea("Ingrese el número de créditos de la materia: ")
    );
    var calificacion = parseInt(lea("Ingrese la calificación: "));

    numeroCreditosCursados = numeroCreditosCursados + numeroCreditosMateria;
    sumaCreditos = sumaCreditos + numeroCreditosMateria * calificacion;

    console.log("------------------------------------------------------");
    console.log(
      "Código de la materia= ",
      codigoMateria + "Nombre de la materia: ",
      nombreMateria + "Calificación= ",
      calificacion
    );
  }
  promedioCreditos = sumaCreditos /= numeroCreditosCursados;
  numeroTotalEstudiantes = numeroTotalEstudiantes + 1;
  sumaPromedioCreditos = sumaPromedioCreditos + promedioCreditos;

  console.log("Créditos cursados= ", numeroCreditosCursados);
  console.log("Promedio de créditos= ", promedioCreditos);
  console.log("------------------------------------------------");
  var codigoEstudiante = parseInt(lea("Ingrese el código del estudiante: "));
}
promedioCreditosPonderado = sumaPromedioCreditos /= numeroTotalEstudiantes;

console.log("Promedio del grupo= ", promedioCreditosPonderado);
