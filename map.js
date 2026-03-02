 const arreglo = [ 5, 10, 15, 20, 25 ];

 function cuadrado(numero) {
        return numero * numero;
 }

numeroCuadrado = arreglo.map(cuadrado) // la funcion map recibe una función como argumento y la aplica a cada elemento del arreglo, devolviendo un nuevo arreglo con los resultados... A dicha funcion no se le pasan los argumentos porque la función map se encarga de pasarle cada elemento del arreglo como argumento a la función que se le pasa como argumento... Es decir, la función map se encarga de iterar sobre el arreglo y aplicar la función cuadrado a cada elemento del arreglo, devolviendo un nuevo arreglo con los resultados...

console.log(numeroCuadrado);

