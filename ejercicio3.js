const persona = [];

const menu = ["Crear persona", "Actualizar persona", "Listar personas", "Eliminar personas", "Mostrar Vacios"]

console.log(mostrarMenu(menu));

while (true){
    const opc = mostrarMenu(menu);
        switch(opc){
        case "0":
        console.log("Saliendo del programa...");
        break;
        case "1": 
            crearPersona();
            break;
        case "2":
            actualizarPersona();
            break;
        case "3":
            listarPersonas();
            break;
        case "4":
            eliminarPersona();
            break;
        default:
        console.log("Opcion no valida");
        }

        if(opc === "0"){
        break;
        }
}

function mostrarMenu(opciones){

    const menu = opciones.reduce((acum, opc, ind) => {return acum + (ind + 1) + ". " + opc + "\n"}, "") + "0. Salir";
    return prompt(menu);
}

function crearPersona(){
    const nombre = prompt("Ingrese el nombre de la persona: ");
    const apellido = prompt("Ingrese el apellido de la persona: ");
    const edad = prompt("Ingrese la edad de la persona: ");
    const genero = prompt("Ingrese el genero de la persona: ");
    persona.push(nombre, apellido, edad, genero);
}

function actualizarPersona( identificacion){
    const persona = persona.findIndex((per) => per.identificacion === identificacion);
    if (persona > -1){


} else {
    console.log("Persona no encontrada.")
}
}
