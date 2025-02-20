peso = prompt("Entre com seu peso:");
  peso = parseFloat(peso);
altura = prompt("Entre com sua altura");
  altura = altura * altura;
    altura = parseFloat(altura);
IMC = peso / altura;
  IMC = parseFloat(IMC);
if ((IMC <= 18, 5)) {
  console.log("abaixo do peso");
} else if ((IMC >= 18, 6 && IMC <= 24.9)) {
  console.log("Peso ideal (parabéns)");
} else if (IMC >= 25 && IMC <= 29.9) {
  console.log("Levemente acima do peso");
} else if (IMC >= 30 && IMC <= 34.9) {
  console.log("Obesidade grau I");
} else if (IMC >= 35 && IMC <= 39.9) {
  console.log("Obesidade grau II (severa)");
} else if (IMC >= 40) {
  console.log("Obesidade Morbida");
}
