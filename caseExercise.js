var lea = require("prompt-sync")();

var nombreEmpleado = lea("ingrese el nombre del empleado: ");

while (nombreEmpleado != "x") {
  var salarioMensual = parseInt(
    lea("Ingrese el salario mensual del empleado: ")
  );
  var categoria = lea("Ingrese la categoria del empleado: ");
  var unidadesProducidas = parseInt(
    lea("Unidades producidas por el empleado: ")
  );

  totalDevengado = salarioMensual;

  switch (categoria) {
    case "1":
      if (unidadesProducidas > 50) {
        totalDevengado = totalDevengado + 0.05 * salarioMensual;
      }
      break;
    case "2":
      if (unidadesProducidas > 50) {
        totalDevengado = totalDevengado + 0.07 * salarioMensual;
      }
      break;
    case "3":
      if (unidadesProducidas > 50) {
        totalDevengado = totalDevengado + 0.1 * salarioMensual;
      }
      break;
    case "4":
      if (unidadesProducidas > 50) {
        totalDevengado = totalDevengado + 0.15 * salarioMensual;
      }
      break;
  }
  console.log(nombreEmpleado, "Devengo: ", totalDevengado);
  var nombreEmpleado = lea("ingrese el nombre del empleado: ");
}
