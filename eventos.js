const mensaje = document.getElementById("mensaje");
const contenedor = document.querySelector('#contenedor');

// mensaje.innerText = `Nombre del nodo: ${contenedor.nodeName}`;
// mensaje.textContent = `contenido de texto del elemento ${contenedor.textContent}`;

// mensaje.textContent = `contenido de texto del elemento ${contenedor.outerText}`;

mensaje.innerText = `Contenido del elemento: ${contenedor.innerText}`;

contenedor.innerHTML = `<strong>Hola campers!</strong>`;