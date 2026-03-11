const btnEjemplo = document.getElementById('btnEjemplo')
const container = document.querySelector('.container')


const eventoPersonalizado = new CustomEvent('user:data-message', {
    detail: {
        de: 'Campus',
        mensaje: 'Hola campers!',
        sede: 'Guate'
    }, 
    bubbles: true,
    composed: true,
    cancelable: true
})

const evento = new Event('cargar-pagina')


btnEjemplo.addEventListener('click', () => {
    btnEjemplo.dispatchEvent(eventoPersonalizado)
})

container.addEventListener('user:data-message', event => {
    console.log(event)
})



