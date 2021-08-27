//Realice un algoritmo que, dada la información necesaria,
//informe las coordenadas de la ambulancia más cercana al punto de emergencia.
var lea = require("prompt-sync")();

var ambulanciaServicio = parseInt(lea("Cuántas ambulancias hay en servicio: "));
var lat1 = parseFloat(lea("Ingrese la latitud de la Emergencia: "));
var lon1 = parseFloat(lea("Ingrese la longitud de la Emergencia: "));
var contadorAmbulancias = 1;
var distanciaMenor = 0;
var latitudCercana = 0;
var longitudCercana = 0;

while (contadorAmbulancias <= ambulanciaServicio) {
  var lat2 = parseFloat(lea("Ingrese la latitud de la Ambulancia: "));
  var lon2 = parseFloat(lea("Ingrese la longitud de la Ambulancia: "));

  const R = 6371e3; // metres
  const rad1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const rad2 = (lat2 * Math.PI) / 180;
  const r3 = ((lat2 - lat1) * Math.PI) / 180;
  const r4 = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(r3 / 2) * Math.sin(r3 / 2) +
    Math.cos(rad1) * Math.cos(rad2) * Math.sin(r4 / 2) * Math.sin(r4 / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distancia = R * c; // in metres

  if (contadorAmbulancias == 1) {
    distanciaMenor = distancia;
    latitudCercana = lat2;
    longitudCercana = lon2;
  } else if (distancia < distanciaMenor) {
    distanciaMenor = distancia;
    latitudCercana = lat2;
    longitudCercana = lon2;
  }

  contadorAmbulancias = contadorAmbulancias + 1;
}
console.log("la distancia menor= ", distanciaMenor);
console.log(
  "Las coordenadas de la ambulancia mas cercana son: Latitud: ",
  latitudCercana + "Longitud: ",
  longitudCercana
);
