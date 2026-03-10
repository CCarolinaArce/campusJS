// const btnEditar = document.querySelector('.btn-edit')
// const btnGuardar = document.querySelector('#btnGuardar')

// const editar = () => {
//     console.log('Editando contacto...')
// }

// //btnEditar.onclick = editar
// btnEditar.onclick = () => {
//     console.log('Editando contacto...')
// }

// btnGuardar.addEventListener('click', (e) => {
//     e.preventDefault()
//     leerForm()
// })

// function leerForm() {
//     const formInputs = document.querySelectorAll('form > input')
// formInputs.forEach(element => {
//         console.log(element.value)
//     });
// }

// const cambiarTarjeta = () => {
//     const tarjeta = document.querySelector('.card')
//     tarjeta.style.backgroundColor = cambiarCOLOR()
// }

// const btnEjmplo = document.getElementById('ejemplo')
// btnEjmplo.addEventListener('click', cambiarTarjeta)


// function cambiarCOLOR() {
//     const numeros = '0123456789ABCDEF'
//     let color = '#';

//     for (let i =0; i < 6; i++) {
//         color += numeros[Math.floor(Math.random()*16)]
//         }
//     return color
// }

// const btnEJemplo = document.getElementById('Ejemplo')
// btnEJemplo.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('event')
    
// })

const contactos = [] 

const formContact = document.getElementById('formContact')
const btnGuardar = document.getElementById('btnGuardar')
const textoUrlImage = document.querySelector('input[name="urlImage"]')


btnGuardar.addEventListener('click', (e) => {
    e.preventDefault()

    const data = new FormData(formContact)
    const objData = Object.fromEntries(data)
    if (objData.name !== '' && objData.phone !== '' && objData.email !== '') {
        contactos.push(objData)
        listarContactos()
    }
    else {
        alert('Todos los campos son obligatorios')
    }
    console.log(objData)
})

textoUrlImage.addEventListener('change', (event) => {
    document.querySelector('.preview > img').setAttribute('src', event.target.value)
})

function listarContactos() {
    let tableData = ''
    contactos.forEach(contact => {
        tableData += `<tr>
        <td><img class="contact-img" src="${contact.urlImage}" alt=""></td>
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
        <td></td>
        </tr>`
    });
    document.getElementById('tableData').innerHTML = tableData
    }
