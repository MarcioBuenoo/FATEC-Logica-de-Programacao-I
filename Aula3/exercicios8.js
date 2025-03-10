senha = "abc";
entrada = "";
while( senha != entrada ){
    entrada = prompt("Entre com a senha:");
    if( senha == entrada){
        console.log("Acesso Liberda");
    }
    else{
        console.log("Senha incorreta");
    }
}