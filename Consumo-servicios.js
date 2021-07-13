// Hacer un algoritmo que me de a conocer el total a pagar por servicios públicos
var lea = require("prompt-sync")();
var N_usuarios = parseInt(lea("Ingrese la cantidad de usuarios: "));
var cont_N_usua = 1;
var suma_pagos_estrato_1 = 0;
var suma_pagos_estrato_2y3 = 0;
var suma_pagos_estrato_4 = 0;
var suma_de_pagos_estrato_5y6 = 0;
var contador_total_recaudo = 1;

function mostrarMensajeDeConsumo(
  Pago_de_luz,
  pago_anterior_de_luz,
  Pago_de_agua,
  pago_anterior_agua
) {
  if (Pago_de_luz > pago_anterior_de_luz) {
    console.log(`CONSUMO DE LUZ SUBIO`);
  } else {
    if (Pago_de_luz < pago_anterior_de_luz) {
      console.log(`CONSUMO DE LUZ BAJO`);
    } else {
      if (Pago_de_luz == pago_anterior_de_luz) {
        console.log(`CONSUMO DE LUZ SE MANTUVO`);
      }
    }
  }
  if (Pago_de_agua > pago_anterior_agua) {
    console.log("CONSUMO DE AGUA SUBIO");
  } else {
    if (Pago_de_agua < pago_anterior_agua) {
      console.log("CONSUMO DE AGUA BAJO");
    } else {
      if (Pago_de_agua == pago_anterior_agua) {
        console.log("CONSUMO DE AGUA SE MANTUVO");
        console.log("---------------------------");
      }
    }
  }
}

while (cont_N_usua <= N_usuarios) {
  var cod_instalacion = lea("Código de instalación: ");
  var Nombres_y_apell = lea("Nombres y Apellidos del usuarios: ");
  var consumo_de_luz = parseInt(lea("Consumo en kw/h de energía: "));
  var consumo_m3_agua = parseInt(lea("Consumo en m3 de agua: "));
  var pago_anterior_de_luz = parseInt(lea("Consumo anterior de luz: "));
  var pago_anterior_agua = parseInt(lea("Consumo anterior de agua: "));
  var Estrato = parseInt(lea("Estrato socioeconómico: "));

  if (Estrato <= 1) {
    var Pago_de_luz = consumo_de_luz * 1000;
    var Pago_de_agua = consumo_m3_agua * 1200;
    var Descuento_del_estrato_1 = (Pago_de_luz + Pago_de_agua) * 0.5;
    var Total_pagar_estrato_1 =
      Pago_de_luz + Pago_de_agua - Descuento_del_estrato_1;

    var suma_pagos_estrato_1 = suma_pagos_estrato_1 + Total_pagar_estrato_1;

    console.log(`------------------------------`);
    console.log(`Nonbres y Apellidos: ${Nombres_y_apell}`);
    console.log(`Código de instalación: ${cod_instalacion}`);
    console.log(`Total a pagar por consumo= ${Total_pagar_estrato_1}`);
    console.log("________________________________");

    mostrarMensajeDeConsumo(
      Pago_de_luz,
      pago_anterior_de_luz,
      Pago_de_agua,
      pago_anterior_agua
    );
  } else if (Estrato > 1 && Estrato < 4) {
    var Pago_de_luz = consumo_de_luz * 1000;
    var Pago_de_agua = consumo_m3_agua * 1200;
    var Descuento_del_estrato_2y3 = (Pago_de_luz + Pago_de_agua) * 0.3;
    var Total_pagar_estrato_2y3 =
      Pago_de_luz + Pago_de_agua - Descuento_del_estrato_2y3;

    var suma_pagos_estrato_2y3 =
      suma_pagos_estrato_2y3 + Total_pagar_estrato_2y3;

    console.log(`------------------------------`);
    console.log(`Nonbres y Apellidos: ${Nombres_y_apell}`);
    console.log(`Código de instalación: ${cod_instalacion}`);
    console.log(`Total a pagar por consumo= ${Total_pagar_estrato_2y3}`);
    console.log("________________________________");

    mostrarMensajeDeConsumo(
      Pago_de_luz,
      pago_anterior_de_luz,
      Pago_de_agua,
      pago_anterior_agua
    );
  } else if (Estrato == 4) {
    var Pago_de_luz = consumo_de_luz * 1000;
    var Pago_de_agua = consumo_m3_agua * 1200;
    var Total_pagar_estrato_4 = Pago_de_luz + Pago_de_agua;
    var suma_pagos_estrato_4 = suma_pagos_estrato_4 + Total_pagar_estrato_4;

    console.log(`------------------------------`);
    console.log(`Nonbres y Apellidos: ${Nombres_y_apell}`);
    console.log(`Código de instalación: ${cod_instalacion}`);
    console.log(`Total a pagar por consumo= ${Total_pagar_estrato_4}`);
    console.log("________________________________");

    mostrarMensajeDeConsumo(
      Pago_de_luz,
      pago_anterior_de_luz,
      Pago_de_agua,
      pago_anterior_agua
    );
  } else {
    if (Estrato > 4 && Estrato <= 6) {
      var Pago_de_luz = consumo_de_luz * 1000;
      var Pago_de_agua = consumo_m3_agua * 1200;
      var Recargo = (Pago_de_luz + Pago_de_agua) * 0.2;
      var Total_pagar = Pago_de_luz + Pago_de_agua + Recargo;
      var suma_de_pagos_estrato_5y6 = suma_de_pagos_estrato_5y6 + Total_pagar;

      console.log(`------------------------------`);
      console.log(`Nonbres y Apellidos: ${Nombres_y_apell}`);
      console.log(`Código de instalación: ${cod_instalacion}`);
      console.log(`Total a pagar por consumo= ${Total_pagar}`);
      console.log("________________________________");

      mostrarMensajeDeConsumo(
        Pago_de_luz,
        pago_anterior_de_luz,
        Pago_de_agua,
        pago_anterior_agua
      );
    }
  }
  var TOTAL_RECAUDO =
    suma_pagos_estrato_1 +
    suma_pagos_estrato_2y3 +
    suma_pagos_estrato_4 +
    suma_de_pagos_estrato_5y6;

  console.log(
    "Total recaudado de agua y nergia por las empresas públicas",
    TOTAL_RECAUDO
  );
  console.log("--------------------------------");
  console.log("Total recaudado por estrato 1= ", suma_pagos_estrato_1);
  console.log("----------------------------------");
  console.log("Total recaudado por estrato 2 y 3= ", suma_pagos_estrato_2y3);
  console.log("----------------------------------");
  console.log("Total recaudado por estrato 4= ", suma_pagos_estrato_4);
  console.log("----------------------------------");
  console.log("Total recaudado por estrato 5 y 6= ", suma_de_pagos_estrato_5y6);
  console.log("----------------------------------");
  cont_N_usua = cont_N_usua + 1;
}
