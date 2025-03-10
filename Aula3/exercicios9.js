senha = "abc";
entrada = "";
i = 0;
while( senha != entrada && i < 3 ){
    entrada = prompt("Entre com a senha:");
    if( senha == entrada){
        console.log("Acesso Liberado");
    }
    else{
        console.log("Senha incorreta");
    }
    i = i + 1;
}
if( i == 3 ){
    console.log("Excedeu o número de tentaticas");
}