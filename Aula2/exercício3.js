n1 = prompt("Entre com um número inteiro:");
n1 = parseInt(n1);
resto = n1 % 2;
resto = parseInt(resto);
if (resto == 0 ) {
    console.log("é par");
} else {
    console.log("é impar");
}