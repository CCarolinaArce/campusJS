const mensjae = document.getElementById('mensaje')
const contenedor = document.querySelector('#contenedor')

let contador = 3

const texto = document.querySelector('#texto')
const form = document.querySelector('#frmAgregarElements')

document.getElementById('btnAgregarAntesInicio').addEventListener('click', () => {
    const df = new FormData(form)
    console.log(df.get('elemento'), df.get('texto'))
    switch(df.get('elemento')) {
        case 'T':
            contenedor.insertAdjacentText('beforebegin', df.get('texto'))
            break
        case 'H':
            contenedor.insertAdjacentHTML('beforebegin', df.get('texto'))
            break
        case 'E':
            contenedor.insertAdjacentElement('beforebegin', nuevoItem(++contador))
            break
    }
})
document.getElementById('btnAgergarDespuesInicio').addEventListener('click', () => {
})

