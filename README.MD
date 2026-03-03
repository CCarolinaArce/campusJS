PROYECTO DEL REVIEW:

Debera llevar las siguientes elementos y funciones del menu.

1. Agregar Persona
2. Actualizar Persona
3. Enlistar Personas
4. Ordenar Personas (Alfabeticamente)
5. Eliminar Persona
6. Salir

TEMAS A REPASAR:

new set()
get()
sort()
find()
has()

//Ordenar las personas por su nombre, de forma ascendente, utilizando el metodo sort() de los arrays, y mostrar la lista de personas ordenada por nombre
function ordenarPersonas(){
const personasOrdenadas = persona.sort((a, b) => b-a);
personasOrdenadas.forEach(persona => {
const {identificacion, nombre, apellido, edad, genero} = persona;
console.log('Identificacion: ' + identificacion);
console.log('Nombre: ' + nombre);
console.log('Apellido: ' + apellido);
console.log('Edad: ' + edad);
console.log('Genero: ' + genero);
});
}