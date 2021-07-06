// Calcular el número de créditos y el promedio de creditos para N estudiantes, 4 materias

var lea = require("prompt-sync")()

var Canti_estu= parseInt(lea("Ingrese la cantidad de estudiantes a calificar: "))
var Cont_estu= 1

while (Cont_estu <= Canti_estu) {
  var Cod_estu= parseInt(lea("Código del Estudiante: "))
  var NM1= parseFloat(lea("Ingrese nota de la materia 1: "))
  var NCM1= parseFloat(lea("Ingrese número de créditos de la materia 1: "))
  var NM2= parseFloat(lea("Ingrese nota de la materia 2: "))
  var NCM2= parseFloat(lea("Ingrese número de créditos de la materia 2: "))
  var NM3= parseFloat(lea("Ingrese nota de la materia 3: "))
  var NCM3= parseFloat(lea("Ingrese número de créditos de la materia 3: "))
  var NM4= parseFloat(lea("Ingrese nota de la materia 4: "))
  var NCM4= parseFloat(lea("Ingrese número de créditos de la materia 4: "))
  var NUM_CREDI= (NCM1 + NCM2 + NCM3 + NCM4)
  var PROME_CRED= (( NM1 * NCM1 + NM2 * NCM2 + NM3 * NCM3 + NM4*NCM4 ) / NUM_CREDI)
  Cont_estu= (Cont_estu + 1)
  console.log(`------------------------------------`)
  console.log(`Código del Estudiante: ${Cod_estu}`)
  console.log(`El número de créditos cursados= ${NUM_CREDI}`)
  console.log(`El promedio de créditos= ${PROME_CRED}`)
  console.log(`-------------------------------------`)
}

