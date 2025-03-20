function somatorio(entrada){
    soma = 0;
    i = 0;
    while( i < entrada.length ){
        soma = soma + entrada[i];
        i = i + 1;
    }
    return soma;
}

numeros = [8,3,4,7,5];
s = somatorio(numeros);
console.log("Somatório:", s);

numeros = [5,4,3];
s = somatorio(numeros);
console.log("Somatório:", s);
