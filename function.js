// function sumar(a, b) {
//     return a + b;
// }

// console.log(sumar(5, 10));

// const restar = function(a, b) {
//     return a - b;
// }

// console.log(restar(10, 5));

// const multiplicar = (a, b) => {
//     return a * b;
// }

// console.log(multiplicar(5, 10));

// const dividir = (a, b) => a / b;

// console.log(dividir(10, 5));

const cuadrado = numero => numero * numero;

console.log(cuadrado(5));

const login = (username, clave) => {
    const user = api.getUser(username);
    if (user.clave === clave) {
        console.log("Login exitoso");
        return true;
    } else {
        console.log("Login fallido");
        return false;
    }
}


