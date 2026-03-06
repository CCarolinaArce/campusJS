
const mensaje = document.getElementById('mensaje')
const contenedor = document.querySelector('#contenedor');

let div = nuevoItem(4);
contenedor.appendChild(div);// Agrega el nuevo div al contenedor al elemento padre que seria el contenedor, lo que hace que se muestre en la pagina.

let boton = nuevoItem2(5);
contenedor.appendChild(boton);

const item = document.querySelector('#Item2');
const item2 = document.querySelector('#Item3');

function nuevoItem(id){
const div = document.createElement('div');
div.textContent = `Item ${id} en el contenedor`;
div.classList.add('item', 'borde', 'fuente');
div.setAttribute('id', `Item${id}`);
return div;
}
function nuevoItem2(id){
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(`Item ${id} en el contenedor`));
    button.classList.add('item', 'borde', 'fuente');
    return button;
}
