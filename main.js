const productos = [
    {codigo: 'P01', nombre: 'Producto 1', precio: 15 },
    {codigo: 'P02', nombre: 'Producto 2', precio: 25 },
    {codigo: 'P03', nombre: 'Producto 3', precio: 35 }
];

const menu = '1. Crear producto\n2. Mostrar productos\n3. Buscar producto\n0. Salir';
let opc = 1;
while( opc != '0' ){
       
    opc = prompt(menu);
    
    switch( opc ){
        case '1':
            const codigo = prompt('Código del producto');
            const nombre = prompt('Nombre del producto');
            const precio = prompt('precio del producto');
            productos.push({codigo, nombre, precio});
            break;
        case '2':
            console.clear();
            console.log('============ P R O D U C T O S ============');
            productos.forEach(( prod, indx ) =>{
                console.log(`# ${indx}\nCódigo: ${ prod.codigo }\nNombre: ${ prod.nombre }\nPrecio: ${ prod.precio }\n\n`);
            });
            break;
        case '3':
            const codProducto = prompt('Ingrese código del producto');
            const prodsEncontrados = productos.find(( prod )=>{ return prod.codigo === codProducto });
            console.log(`# Producto encontrado\nCódigo: ${ prodsEncontrados.codigo }\nNombre: ${ prodsEncontrados.nombre }\nPrecio: ${ prodsEncontrados.precio }\n\n`);
            break;
    }
}

