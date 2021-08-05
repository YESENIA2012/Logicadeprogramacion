// Hacer un algoritmo que dado N numero de clientes se solicite la cantidad de sobres,
// el ancho y el alto. Determinar cuantos sobres deben producirse y cuantos estan dispnibles en inventario.
// Sabiendo que se tienen en inventario, 300 sobres de 10X15 y 200 sobres de 20X15.

var lea = require("prompt-sync")();

var contador_clientes = 1;
var sobres_grandes_ancho = 20;
var sobres_grandes_alto = 15;
var sobres_grandes_cantidad = 200;

var sobres_pequeños_ancho = 10;
var sobres_pequeños_alto = 15;
var sobres_pequeños_cantidad = 300;

var N_numero_de_clientes = parseInt(lea("Ingrese la cantidad de clientes: "));

while (contador_clientes <= N_numero_de_clientes) {
  var cant_sobres = parseInt(lea("Ingrese la cantidad de sobres pedidos: "));
  var ancho_sobre_persona = parseInt(
    lea("Ingrese el ancho del sobre que requiere: ")
  );
  var alto_sobre_persona = parseInt(
    lea("Ingrese el alto del sobre que requiere: ")
  );

  if (
    sobres_grandes_cantidad > 0 &&
    ancho_sobre_persona <= sobres_grandes_ancho &&
    alto_sobre_persona <= sobres_grandes_alto
  ) {
    if (cant_sobres <= sobres_grandes_cantidad) {
      var sobres_a_producir = 0
      console.log("La cantidad de sobres a producir= ", sobres_a_producir);
  } else {
      if (cant_sobres > sobres_grandes_cantidad) {
          sobres_a_producir = cant_sobres - sobres_grandes_cantidad
      }
      console.log("La cantidad de sobres a producir= ", sobres_a_producir);
  }
  
  if (sobres_grandes_cantidad > 0) {
      sobres_grandes_cantidad = sobres_grandes_cantidad - cant_sobres;
    }
    if (sobres_grandes_cantidad <= 0) {
      sobres_grandes_cantidad = 0;
      console.log("La cantidad de sobres disponibles= ", sobres_grandes_cantidad);
    }
  
  } else if (
    sobres_pequeños_cantidad > 0 &&
    ancho_sobre_persona <= sobres_pequeños_ancho &&
    alto_sobre_persona <= sobres_pequeños_alto
  ) {
    if (cant_sobres <= sobres_pequeños_cantidad) {
        var sobres_a_producir = 0
        console.log("La cantidad de sobres a producir= ", sobres_a_producir); 
    } else {
        if (cant_sobres > sobres_pequeños_cantidad) {
            sobres_a_producir = cant_sobres - sobres_pequeños_cantidad
            console.log("La cantidad de sobres a producir= ", sobres_a_producir); 
        }
    }
    
    if (sobres_pequeños_cantidad > 0) {
        sobres_pequeños_cantidad = sobres_pequeños_cantidad - cant_sobres;
        
      }
      if (sobres_pequeños_cantidad <= 0) {
        sobres_pequeños_cantidad = 0;
        console.log("La cantidad de sobres disponibles= ", sobres_pequeños_cantidad);
      }
    
    
  } else {
    console.log("La cantidad de sobres disponibles es = 0");
    console.log("La cantidad de sobres a producir es = ", cant_sobres);
  }
  contador_clientes = contador_clientes + 1;
}
