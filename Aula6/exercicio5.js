function inverte(entrada){
    aux = "";
    i = 0;
    while( i < entrada.length ){
        aux = entrada[i] + aux;
        i = i + 1;
    }
    return aux;
}

r = inverte("Pedro");
console.log("Invertido:", r);

r = inverte("Mariana");
console.log("Invertido:", r);
