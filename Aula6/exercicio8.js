function matriz(entrada){
    i = 0;
    soma = 0;
    while( i < entrada.length ){
        j = 0;
        while( j < entrada[i].length ){
          soma = soma + entrada[i][j];
          j = j + 1;
        }
        i = i + 1;
    }
    return soma;
}

numeros = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3],
];
s = matriz(numeros);
console.log("Somatório:", s);

numeros = [
  [5, 8, 3, 4],
  [9, 7, 2],
];
s = matriz(numeros);
console.log("Somatório:", s);