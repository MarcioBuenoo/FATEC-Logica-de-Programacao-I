nome = prompt("Entre com um nome:")
i = 0;
while ( i < nome.length ) {
    if( i % 2 == 0){
        console.log(nome[i]);
    } 
    i = i + 1;
}
console.log("Fim");