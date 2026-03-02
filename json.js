
let persona = '{"nombre": "Yainner", "edad": 30, "ciudad": "Madrid","hobbies": ["hacer bici", "musica", "viajar"]}';;

persona.hobbies = '["correr", "leer", "cocinar"]';
persona.ciudad = "Barcelona";

console.log(persona);

const funcionExpresiva = (llave, valor) => {
    return (typeof valor === 'string') ? valor.toUpperCase() : valor;
}

const personaObj = JSON.parse(persona, funcionExpresiva); 

console.log(personaObj);

//Deestructuración de objetos
const { nombre, edad, ciudad, hobbies } = personaObj;

const moto = {
    marca: "Honda",
    modelo: "CBR500R",
    año: 2020,
    encender: function() {
        console.log(`La moto ${this.marca} ${this.modelo} está encendida`);
    },
    apagar() {
        console.log("La moto está apagada");
    }
}

console.log(moto.marca);
console.log(moto.apagar());
console.log(moto.año);
moto.encender();

const { marca, modelo, año, encender, apagar } = moto;

const person = {
    nombre: "Yainner",
    edad: 33,
    ciudad: "Madrid",
    hobbies: ["hacer bici", "musica", "viajar"]
}

const direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Madrid",
    pais: "España"
}

const personaCompleta = { ...person, ...direccion };

console.log(personaCompleta);
console.log(person);
console.log(direccion);


arr0 = "Hola Mundo";
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr3 = [...arr1, ...arr2, arr0];

console.log(arr3);