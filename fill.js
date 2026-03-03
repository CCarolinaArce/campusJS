const array = [1, 2, 3, 4, 5];
const array2 = new Array(6, 7, 8, 9, 10);

// console.log(array); // [1, 2, 3, 4, 5]
// console.log(array2); // [6, 7, 8, 9, 10]
const spreadOperator = [...array, ...array2];

console.log(spreadOperator); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]S
console.log(array.fill(0)); // [0, 0, 0, 0, 0]

const array3 = new Array(10).fill('Hello');

console.log(array3)

const animal = { tipo: 'perro', nombre: 'Firulais' };
const animal3 = { color: 'marrón' };
const animal2 = { ...animal, ...animal3 };

Object.preventExtensions(animal);
console.log(animal2); // false

const estudiantes = [
    'iker', 
    'yainner',
    'maria',
    'juan',
    'pedro'
]

console.log(estudiantes.indexOf('juan', 3)); // 2
