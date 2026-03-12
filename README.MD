PROYECTO DEL REVIEW:

Debera llevar las siguientes elementos y funciones del menu.

1. Agregar Persona
2. Actualizar Persona
3. Enlistar Personas
4. Ordenar Personas (Alfabeticamente)
5. Eliminar Persona
6. Salir

TEMAS A REPASAR:

funciones staticas: get
new set()
get()
sort()
find()
has()
FormData()
callbacks()
asinc-await
DOM: eventos y selectores del DOM como querySelector y querySelectorAll.
EVENTOS Y 'CLICK' 'ONCLICK'....
Que es e.l burbujeo propiedad .bubble?
Web Components:  customELement y shadowDOM

        -connectedCallback() y
        -disconnectedCallback()
        -adoptedCallback()
        -attributeChangedCallback()

    TEMPLATES: Son plantillas que permite agrupar etiquetas html.


Promises: Que son? Es 1 objeto que representa el resultado (exito o fracaso) eventual de una operacion asincrona, permitiendo manejar tareas como peticiones a APIS o lectura de archivos sin bloquear el hilo principal. Actua como marcador de posicion que se resolvera en el futuro, evitando la complejidad de los callbacks.

Porque las promesas son codigo no bloqueante?

El codigo que se encuentra dentro de 1 bloque .then() es asncronico y no bloqueante. 

Que implica esto? 

Significa que cuando se llega a 1 bloque .then(), el sistema no se bloquea, en su lugar, colosa la funcion en espera hasta que la promesa se cumpla. MIentras tanto, el programa siguen procesando las tareas restantes.

Metodos de promesas: 

.race()
.any()
.all()

Que son tareas bloqueantes y no bloqueantes en JS???

NO BLOQUEANTES o ASINCRONAS: Son tareas que pueden ejecutarse en segundo plano mientras se esta ejecutando el hilo principal.

BLOQUEANTES o SINCRONAS: Son tareas que se ejecutan primero que otras dependiendo el orden de los hilo principal.

"Las tareas
bloqueantes en JavaScript detienen la ejecución del hilo principal (single-thread) hasta completarse, congelando la interfaz o servidor, mientras que las tareas no bloqueantes (asíncronas) permiten que el programa continúe ejecutando código mientras se procesa la tarea en segundo plano, maximizando el rendimiento".

FETCH():

Es 1 metodo/funcion que tiene 1 promesa implicita por lotanto ya no es necesario inicializar la promesa con la clase new = Promise sino que usamos directamente el metodos .then() y .catch()

LAS PROMESAS siempre deberian resolverse utilizando el metodo .then() aunque existen otras formas de resolver 1 promesa utilizando 1  funcion auto-ejecutable como la siguiente:  function request() {
    return (async () => {

        const arch = await fetch('./../datos.text')
        const contenido = await arch.text()
        console.log(contenido)
    })()
}

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


Para que se utiliza el constructor en 1 clase?

REVIEW:  Agregar btn que elimine 1 elemento a traves de su ID. Hacer 1 CRUD De productos con componentes personalizados aplicando todo lo que hemos visto en clase.


Web Components:  customELement y shadowDOM

    Los componenetes personalizado se extienden de la clase padre 'HTMLElement' que contiene los siguientes metodos: 
        -connectedCallback() y
        -disconnectedCallback()
        -adoptedCallback()
        -attributeChangedCallback()