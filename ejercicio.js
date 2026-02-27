const productos = []

const menu = '1. Crear producto\n2. Mostrar producto.\n3. Salir'

let opc = 1
while ( opc != '0') {

opc = prompt(menu)

switch ( opc ) {
    case '1':
        const codigo = prompt ('Codigo del producto')
        const nombre = prompt ('Nombre del producto')
        const precio = prompt ('Precio del producto')
        
        productos.push({codigo, nombre, precio})
    }

}
console.log(productos)