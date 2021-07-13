var lea = require("prompt-sync")();

var N_cantidad_veces = parseInt(lea("Cantidad de veces a repetir: "));
var cont_N_cantidad = 1;

while (cont_N_cantidad <= N_cantidad_veces) {
  console.log("Hola mensaje:", cont_N_cantidad);
  cont_N_cantidad = cont_N_cantidad + 1;
}
