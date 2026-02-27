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
        case "3":
        const codProducto = prompt("Ingrese el codigo del producto: ");
        const prodsEncontrados = productos.find(( prod ) => { return prod.codigo === codProducto });
        console.log(`Producto Encontrado: \nCodigo: ${ prodsEncontrados.codigo } \nNombre: ${ prodsEncontrados.nombre } \nPrecio: ${ prodsEncontrados.precio }\n`)

        const factura = {
        numero: "F001", 
        cliente: {identificacion: "1002", nombre: "Pepe"},
        fecha: "15-03-2026", 
        detalle: [
        {producto: "Pizza", precio: 40, cantidad: 1},
        {producto: "CocaCola", precio: 20, cantidad: 4},
        {producto: "Encanelados", precio: 30, cantidad: 2}
        ]
        }

        const x = productos.reduce((total, prod) => {
        return total + prod.precio
        }, 0 );

        const totalFactura = factura.reduce((total, det) => {
        return total + (det.cantidad * det.precio);
        }, 0 );
        console.log("TOTAL FACTURA: "+ totalFactura);
        console.log(x)
        break;
    }
}