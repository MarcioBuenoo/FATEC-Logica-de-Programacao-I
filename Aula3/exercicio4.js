nro1 = prompt("Entre com um número menor inteiro:");
    nro1 = parseInt(nro1);
nro2 = prompt("Entre com um número maior inteiro:");
    nro2 = parseInt(nro2);
soma = 0;
    soma = parseInt(soma);
if( nro1 <= nro2) {
    while( nro1 <= nro2 ) {
        soma = soma + nro1
        nro1 = nro1 + 1;
    }
} else {
    while( nro2 <= nro1 ) {
        soma = soma + nro2
        nro2 = nro2 + 1;
    }
}
console.log("Soma dos valores é: " + soma);