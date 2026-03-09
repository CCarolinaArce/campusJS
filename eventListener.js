const mensaje = document.getElementById("mensaje");
const contenedor = document.querySelector('#contenedor');

let contador = 3

document.getElementById('btnAgregarAntes').addEventListener('click', () => {
    contenedor.before(nuevoItem(++contador))
})
document.getElementById('btnAgregarDespues').addEventListener('click', () => {
    ++contador
    newLemento = nuevoItem(++contador)
    contenedor.append(nuevoItem(++contador))
})

document.getElementById('btnReemplazarHijos').addEventListener('click', () => {
    const elemento1 = nuevoItem(++contador)
    const elemento2 = nuevoItem(++contador)
    const elemento3 = nuevoItem(++contador)
    const elemento4 = nuevoItem(++contador)

    contenedor.replaceChildren(elemento1,  elemento2, elemento3, elemento4)
})
    
document.getElementById('btnReemplazarElemento').addEventListener('click', () => {
    const elementId = Number(prompt('Id del elemento a reemplazar'))
    const elementToReplace = document.querySelector(`#item${elementId}`)
    elementToReplace.replaceWith(nuevoItem(++contador))
})

document.getElementById('btnRemover').addEventListener('click', () => {
    const elementId = Number(prompt('Id del elemento a reemplazar'))
    const elementToRemove = document.querySelector(`#item${elementId}`)
    elementToRemove.remove(nuevoItem(++contador))
})

contenedor.insertAdjacentElement('beforeBegin', nuevoItem(++contador))
contenedor.insertAdjacentElement('afterBegin', nuevoItem(++contador))

function nuevoItem(id) {
    return 
}