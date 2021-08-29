var lea = require("prompt-sync")();

var numeroAños = parseInt(lea("Ingrese la cantidad de años: "));
var añoActual = parseInt(lea("Ingrese el año actual: "));
var añoNacimiento = parseInt(lea("Ingrese su año de nacimiento: "));

function encontrarAños(numeroAños, añoActual, añoNacimiento) {
  cantidadAños = añoActual - añoNacimiento;

  añosFuturo = cantidadAños + numeroAños;

  meses = añosFuturo * 12;

  dias = añosFuturo * 365;

  return `${añosFuturo}, ${meses}, ${dias}`;
}

añoMesesDias = encontrarAños(numeroAños, añoActual, añoNacimiento);

console.log(
  "dentro de  ",
  numeroAños,
  "tendrá",
  añosFuturo,
  "años",
  meses,
  "meses",
  dias,
  "dias"
);
