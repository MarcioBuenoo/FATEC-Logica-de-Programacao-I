n1 = prompt("Entre com um número:");
n1 = parseInt(n1);
n2 = prompt("Entre com um número:");
n2 = parseInt(n2);
resto = n1 % n2;
resto = parseInt(resto);
if (resto == 0) {
    console.log(n1, " é multiplo de ", n2);
} else {
    console.log(n1, " não é multiplo de ", n2);
}