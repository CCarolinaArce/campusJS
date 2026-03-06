// const archivo = fetch('./../datos.text')

// archivo.then()

function request() {
    return (async () => {

        const arch = await fetch('./../datos.text')
        const contenido = await arch.text()
        console.log(contenido)
    })()
}

console.log(request)

fetch('./../datos.text').then(resp => {
    resp.text().then(res => {
        console.log(res)
    }).catch(err => console.log(err))
})