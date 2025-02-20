n1 = prompt("Entre com um número:");
n1 = parseInt(n1);
n2 = prompt("Entre com um número");
n2 = parseInt(n2);
n3 = prompt("Entre com um número");
n3 = parseInt(n3);
if ( n1 > n2 && n1 > n3 ) {
    console.log("Maior", n1 );
} else if ( n2 > n1 && n2 > n3 ) {
    console.log("Maior", n2 );
} else if ( n3 > n1 && n3 > n2 ) {
    console.log("Maior", n3);
}