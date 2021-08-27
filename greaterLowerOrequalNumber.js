//Hacer un algoritmo que dado dos valores numéricos A y B, escriba un mensaje diciendo si A en mayor, menos o igual a B
var A = parseInt(lea("Ingrese un número: "));
var B = parseInt(lea("Ingrese un número: "));

if (A > B) {
  console.log("A es mayor que B");
} else if (A == B) {
  console.log("A es igual que B");
} else if (A < B) {
  console.log("A es menor que B");
}
