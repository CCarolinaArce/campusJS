function tareaNoBloqueante( callback ) {
    console.log('Iniciar tarea no bloquante')
    setTimeout(function() {
        console.log('Tarea no bloqueante terminada')
            callback()

    }, 2000);
}

console.log('Inicia el programa...')

tareaNoBloqueante(function() {
    console.log('COntinuamos ocn el resto de las tareas despues de la tarea no bloqueante')
})


console.log('fin del programa...')

