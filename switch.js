var lea = require("prompt-sync")();

var Estrato = lea("Estrato socioeconómico: ");

switch (Estrato) {
  case "1":
    console.log("Entro: ", Estrato);
    break;
  case "2":
  case "3":
    console.log("Entro: ", Estrato);
    break;
  case "4":
    console.log("Entro: ", Estrato);
    break;
  case "5":
  case "6":
    console.log("Entro: ", Estrato);
    break;
}
