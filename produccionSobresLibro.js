var lea = require("prompt-sync")();

var NSP = 0;
var NSAF = 0;
var SD1510 = 300;
var SD2015 = 200;
var LA = parseInt(lea("Ingrese el largo del sobre: "));

while (LA > 0) {
  var AN = parseInt(lea("Ingrese el ancho del sobre: "));
  NSP = NSP + 1;
  if (LA <= 15 && AN <= 10) {
    if (SD1510 > 0) {
      SD1510 = SD1510 - 1;
    } else {
      if (SD2015 > 0) {
        SD2015 = SD2015 - 1;
      } else {
        NSAF = NSAF + 1;
      }
    }
  } else {
    if (LA <= 20 && AN <= 15) {
      if (SD2015 > 0) {
        SD2015 = SD2015 - 1;
      } else {
        NSAF = NSAF + 1;
      }
    }
  }
  var LA = parseInt(lea("Ingrese el largo del sobre: "));
}
console.log("Sobres pedidos = ", NSP, "y", "Sobres a fabricar = ", NSAF);
