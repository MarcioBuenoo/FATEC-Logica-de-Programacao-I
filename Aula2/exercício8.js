temperatura = prompt("Entre com sua Temperatura:");
temperatura = parseFloat(temperatura);
if (temperatura <= 35) {
  console.log("Hipotermia");
} else if ((temperatura >= 35, 1 && temperatura <= 37.7)) {
  console.log("Normal");
} else if (temperatura >= 37.8 && temperatura <= 39.5) {
  console.log("Febre");
} else if (temperatura >= 39.6 && temperatura <= 41) {
  console.log("Febre Alta");
} else if (temperatura >= 41) {
  console.log("Hipertemia");
}
