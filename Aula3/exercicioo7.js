i = 0;
maior = 0;
while ( i < 5 ){
    nro = prompt("Entre com um número");
    nro = parseInt(nro);
    if( nro > maior ){
        maior = nro;
    }
    i = i + 1;
}
console.log("Maior", maior);
