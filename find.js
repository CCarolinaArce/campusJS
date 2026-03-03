const personas = [{
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
},
{
    nombre: "Maria",
    edad: 25,
    ciudad: "Barcelona"
},]

const persona = personas.find( pers => pers.ciudad === 'Madrid')
const { nombre, edad } = persona;

console.log(`${nombre}\n ${edad}\n ${persona.ciudad}`); // Juan tiene 30 y vive en Madrid console.log(persona); // { nombre: "Juan", edad: 30, ciudad: "Madrid" }