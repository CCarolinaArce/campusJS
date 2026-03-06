const elemento = document.getElementById('titulo')

elemento.innerHTML= 'hola'
elemento.style = 'color: red'

const articulo = document.getElementsByClassName('articulo')

for (let i = 0; i < articulo.length; i++) {
    articulo[i].innerHTML = `Articulo numero ${i + 1}`
}

console.log(elemento.innerText)


listaDatos()

const tabla = document.querySelector('table')
tabla.style = 'background-color: yellow';

const articulos = document.querySelectorAll('articke > p')
for (let i = 0; i < articulos.length; i++) {
    articulo[0].innterHTML = `Articulo numer ${ i + 1}`
}


const inputs = document.querySelectorAll('[value]')
inputs.forEach( elem => {
    console.log(`${elem.getAttribute('name')}`)
    elem.setAttribute('name', 'Maria')
    elem.setAttribute('lastName', 'Moreno')
})


//revisar errores en los casos.
const inputs2 = document.querySelector('[value]')
inputs.forEach(elem => {
    switch(elem.getAttribute('name')) {
        case 'name':
            elem.setAttribute('CCAROLINA')
        case 'lastname':
            elem.setAttribute('lastname')
        case 'email':
            elem.setAttribute('ccarolina@gmial.com')
    }
})

const inputs3 = document.querySelector('form > input')

inputs3.toggleAttribute('disabled')

