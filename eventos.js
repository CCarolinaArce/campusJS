const mensaje = document.getElementById("mensaje");
const contenedor = document.querySelector('#contenedor');
const contenedores = document.querySelectorAll('.contenedor');
const items = document.querySelectorAll('#contenedor > div.item');

// mensaje.innerText = `Nombre del nodo: ${contenedor.nodeName}`;
// mensaje.textContent = `contenido de texto del elemento ${contenedor.textContent}`;

// mensaje.textContent = `contenido de texto del elemento ${contenedor.outerText}`;

// mensaje.innerText = `Contenido del elemento: ${contenedor.innerText}`;

// contenedor.innerHTML = `<strong>Hola campers!</strong>`;

// contenedor.innerHTML = `<h2>Bienvenidos a Campus JS</h2>`; // Corregido: setHTML no es una propiedad estándar.

// const item = document.querySelector('#item');
// mensaje.innerText = `Contenido del elemento: ${item.classList.item(0)}`;

// mensaje.innerText = `Contenido del elemento: ${item.classList.contains('container') ? 'Si' : 'No'}`;

// items.classList.add('item-background', 'item-font-color'); // Eliminado: items es una lista, no tiene classList directo. El bucle de abajo ya hace esto.

// contenedor.classList.add('item-background', 'item-font-color');

contenedores.forEach(nodo => nodo.classList.add('item-background', 'item-font-color'));

for (let i = 0; i < items.length; i++) {
    items[i].classList.add('item-background', 'item-font-color');
};
