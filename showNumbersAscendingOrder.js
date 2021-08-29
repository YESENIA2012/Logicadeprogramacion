var lea = require("prompt-sync")();

var num1 = parseInt(lea("Ingrese un número: "));
var num2 = parseInt(lea("Ingrese un número: "));
var num3 = parseInt(lea("Ingrese un número: "));
var menor = 0;
var medio = 0;
var mayor = 0;

function orden(num1, num2, num3, menor, medio, mayor) {
  if (num1 < num2 && num1 < num3) {
    menor = num1;
    if (num2 < num3) {
      medio = num2;
      mayor = num3;
    } else {
      medio = num3;
      mayor = num2;
    }
  } else if (num2 < num3) {
    menor = num2;
    if (num1 < num3) {
      medio = num1;
      mayor = num3;
    }
  } else {
    menor = num3;
    if (num1 < num2) {
      medio = num1;
      mayor = num2;
    } else {
      medio = num2;
      mayor = num1;
    }
    if (num1 == num2 && num1 != num3) {
      if (num1 < num3) {
        menor = num1;
        medio = num2;
        mayor = num3;
      } else if (num3 < num1) {
        menor = num3;
        medio = num2;
        mayor = num1;
      }
    } else if (num2 == num3 && num2 != num1) {
      if (num2 < num1) {
        menor = num2;
        medio = num3;
        mayor = num1;
      } else if (num1 < num2) {
        menor = num1;
        medio = num3;
        mayor = num2;
      }
    } else if (num3 == num1 && num3 != num2) {
      if (num3 < num2) {
        menor = num3;
        medio = num1;
        mayor = num2;
      } else if (num2 < num3) {
        menor = num2;
        medio = num1;
        mayor = num3;
      }
    }
  }
  return `${menor}, ${medio}, ${mayor}`;
}
ordenNumeros = orden(num1, num2, num3);

console.log("El orden de los números= ", ordenNumeros);
