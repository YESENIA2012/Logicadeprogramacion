var lea = require("prompt-sync")();

var num1 = parseInt(lea("Ingrese un número: "));
var num2 = parseInt(lea("Ingrese un número: "));
var num3 = parseInt(lea("Ingrese un número: "));

function findAscendenOrderWhenTwoNumbersAreEqual(num1, num2, num3) {
  let menor = null;
  let medio = null;
  let mayor = null;

  // num1 = 10, num2 = 10, num3 = 2
  // num1 = 10, num2 = 10, num3 = 20
  if (num1 == num2) {
    if (num3 < num2) {
      menor = num3;
      mayor = num1;
      medio = num2;
    } else {
      menor = num1;
      medio = num2;
      mayor = num3;
    }
    return `${menor}, ${medio}, ${mayor}`;
  }

  // num1 = 2, num2 = 10, num3= 10
  // num1 = 20, num2 = 10, num3= 10
  if (num2 == num3) {
    if (num1 < num2) {
      menor = num1;
      medio = num2;
      mayor = num3;
    } else {
      mayor = num1;
      medio = num2;
      menor = num3;
    }
    return `${menor}, ${medio}, ${mayor}`;
  }

  // num1 = 10, num2 = 2, num3 = 10
  // num1 = 10, num2 = 20, num3 = 10
  if (num1 == num3) {
    if (num2 < num1) {
      menor = num2;
      medio = num1;
      mayor = num3;
    } else {
      mayor = num2;
      medio = num1;
      menor = num3;
    }
    return `${menor}, ${medio}, ${mayor}`;
  }

  return null;
}

function findNumbersInAscendingOrder(num1, num2, num3) {
  let menor = null;
  let medio = null;
  let mayor = null;

  if (num1 != num2 && num1 != num3) {
    // greater number is num1
    // num1 = 80, num2= 10, num3= 5
    // num1 = 80, num2= 5, num3 = 10

    if (num1 > num2 && num1 > num3) {
      mayor = num1;

      if (num2 > num3) {
        medio = num2;
        menor = num3;
      } else {
        menor = num2;
        medio = num3;
      }
    }
    // greater number is num2
    // num1 = 10, num2 = 80, num3 = 5
    // num1= 5, num2= 80, num3 = 10
    else if (num2 > num1 && num2 > num3) {
      mayor = num2;
      if (num1 > num3) {
        medio = num1;
        menor = num3;
      } else {
        menor = num1;
        medio = num3;
      }
    }
    // latest number is the greater one
    // num1 = 10, num2 =5, num3= 80
    // num1 = 5, num2 = 10, num3 = 80
    else if (num3 > num1 && num3 > num2) {
      mayor = num3;
      if (num1 > num2) {
        medio = num1;
        menor = num2;
      } else {
        menor = num1;
        medio = num2;
      }
    }

    return `${menor}, ${medio}, ${mayor}`;
  } else {
    resultado = findAscendenOrderWhenTwoNumbersAreEqual(num1, num2, num3);
    return resultado;
  }
}

ordenNumeros = findNumbersInAscendingOrder(num1, num2, num3);

console.log("El orden de los números= ", ordenNumeros);
