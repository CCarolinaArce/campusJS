//OBJETO 1
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


//OBJETO 2
const casa = {
    color: "blanco",
    habitaciones: 3,
    jardin: true,
    estacionamiento: false,
    abrirPuerta() {
        console.log("La puerta está abierta");
    },
    cerrarPuerta() {
        console.log("La puerta está cerrada");
    }

}

console.log(casa.color);
console.log(casa.habitaciones);
console.log(casa.estacionamiento);
console.log(casa.jardin);
console.log(casa.cerrarPuerta());
console.log(casa.abrirPuerta());
