i = 0;
menor = Infinity;
while ( i < 5 ){
    nro = prompt("Entre com um número");
    nro = parseInt(nro);
    if( nro < menor ){
        menor = nro;
    }
    i = i + 1;
}
console.log("Menor", menor);
