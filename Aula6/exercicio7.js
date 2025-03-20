function inverter(entrada){
    i = entrada.length - 1;
    while( i >= 0 ){
        console.log(i, ":", entrada[i]);
        i = i -1;
    }
}

console.log("Lista:");
numeros = [8,3,4,7,5];
inverter(numeros);

console.log("\nLista");
numeros = [5,4,3];
inverter(numeros);