const numeros = [5, 10, 3, 5, 4, 3, 1, 5, 3];
// Utilizando indexOf, calcular el número de apariciones de un número dado.

console.log(numeros.every( n => n < 3)); // false
console.log(numeros.some( n => n < 3)); // true
console.log(numeros.every( n => {return n < 100})); // true