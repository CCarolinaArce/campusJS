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
            const x = productos.reduce((total, prod) => {
                return total + prod.precio;
            }, 0);
            console.log(x);
            break;
    }
}   