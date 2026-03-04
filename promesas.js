const miPromesa = new Promise((resolve, reject) => {
    const exito = true
    if (exito) {
        console.log('Esperando...!')
        setTimeout(() => {
            resolve('valor que resolvera eventualmente la promesa')
        }, 2000)
    }
    else {
        reject('Hubo 1 error en la operacion')
    }
})

miPromesa.then( res => {
    console.warn('No hubo ningun error')
    console.warn(res)
}).catch( error => {
    console.error('Error en la promesa')
    console.log(error)
}).finally(() => {
    console.warn('Hola soy el finally!')
    console.log('Me ejecuto aun que se resuelva o no la promesa...')
})


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1 completada'), 4000)
})

const promise2 =new Promise((resolve, reject) => {
    setTimeout(() => reject ('Promesa 2 rechazada'), 1000)
})

Promise.race([promise, promise2]).then( res => {
    console.log('La promesa fue exitosa', res)
}).catch( res => {
    console.log('La promesa se rechazo...', res)
} )


//promise.all()

Promise.all([miPromesa, promise, promise2]).then( res  => {
    console.log('Todos los resultados fueron exitosos...', res)
}).catch( error => {
    'Fallo 1 promesa o varias...', error
})

//promise.any()

Promise.any([miPromesa, promise, promise2]).then( res  => {
    console.log('Todos los resultados fueron exitosos...', res)
}).catch( error => {
    'Fallo 1 promesa o varias...', error
})