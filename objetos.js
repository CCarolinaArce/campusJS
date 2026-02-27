const productos = [
    
    {codigo: '001', nombre: 'Producto 1 ', precio: 10},
    {codigo: '002', nombre: 'Producto 2 ', precio: 20},
    {codigo: '003', nombre: 'Producto 3 ', precio: 30},
]


// for ( const prod of productos) {
//     console.log(`Producto: ${prod.codigo} - ${prod.nombre} - ${prod.precio}`);
// } 

let prod = productos[0]
 
for ( const key in prod ) {
    console.log(`${key}: ${prod[key]}`);
}

for ( const i in productos ) {
    console.log(i)
}


//Que es 1 objeto en JavaScript? Son estructuras de datos fundamentales que permiten almancer y organizar informacion.
//Un objeto es una colección de propiedades, cada una con un nombre (clave) y un valor asociado. Las propiedades pueden ser de cualquier tipo de dato, incluyendo otros objetos, funciones, etc. Los objetos se definen utilizando llaves {} y las propiedades se separan por comas. 