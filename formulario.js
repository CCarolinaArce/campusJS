const formulario = new FormData()

formulario.append('nombre', 'Pepe')
formulario.append('apellido', 'Pardo')
formulario.append('email', 'pepe@gmail.com')
formulario.append('identificacion', '100')

formulario.delete('identificacion')
console.log(formulario.has('identificacion'))
console.log(formulario.has('email'))

const formHtml = document.getElementById('persona')
const formPersona = new FormData(formHtml)

console.log(formPersona.get('name'))
formPersona.append('email', 'maria@gmail.com')


const btnSend = document.getElementById('send')

btnSend.addEventListener('click', (event) => {
    event.preventDefault()
    const formHtml = document.getElementById('persona')
    const formPersona = new FormData(formHtml)

    for (let [llave, valor] in formPersona) {
        console.log(llave + ':' + valor)
    }
})