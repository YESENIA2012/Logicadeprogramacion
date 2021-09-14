var lea = require("prompt-sync")();

var frutas = lea("Ingrese que fruta desea: ");

switch (frutas) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  default:
    console.log(
      "Lo lamentamos, por el momento no disponemos de " + frutas + "."
    );
}
