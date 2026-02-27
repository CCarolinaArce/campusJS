// const productos = [
// {codigo: "P01", nombre: "N01", precio: "10"},
// {codigo: "P02", nombre: "N02", precio: "20"},
// {codigo: "P03", nombre: "N03", precio: "30"}

// ];

// const menu = "1. Crear producto \n2. Mostrar Productos \n3. Buscar Productos"

// let opc = 1;

// while(opc != "0"){
// opc = prompt(menu);

// switch(opc){
// case "1":
// const codigo = prompt("codigo del Producto");
// const nombre = prompt("Nombre del Producto");
// const precio = prompt("Precio del Producto");
// productos.push([codigo, nombre, precio]);
// break
// case "2":
// console.clear();
// console.log("=== Productos ===")
// let totinv = 0;
// productos.forEach(( prod, indx ) => {
// console.log(`# ${indx}\nCodigo: ${ prod.codigo } \nNombre: ${ prod.nombre } \nPrecio: ${ prod.precio }`)
// });
// console.log(`Total Inventario: ${totinv}`);
// break
// case "3":
// break
// }
// }

const productos = [
{codigo: "P01", nombre: "N01", precio: "10"},
{codigo: "P02", nombre: "N02", precio: "20"},
{codigo: "P03", nombre: "N03", precio: "30"}

];

const menu = "1. Crear producto \n2. Mostrar Productos \n3. Buscar Productos"

let opc = 1;

while(opc != "0"){
opc = prompt(menu);

switch(opc){
case "1":
const codigo = prompt("codigo del Producto");
const nombre = prompt("Nombre del Producto");
const precio = prompt("Precio del Producto");
productos.push([codigo, nombre, precio]);
break
case "2":
console.clear();
console.log("=== Productos ===")
productos.forEach(( prod, index ) => {
console.log(`# ${index}\nCodigo: ${ prod.codigo } \nNombre: ${ prod.nombre } \nPrecio: ${ prod.precio }\n`)
});
break
// case "3":
//      const prodEncontrados = productos.filter((prod) => {
//         return prod.precio > 15
//     })
//     alert(prodEncontrados)
// break
case "3":
const codProducto = prompt("Ingrese el codigo del producto: ");
const prodsEncontrados = productos.find(( prod ) => { return prod.codigo === codProducto });
console.log(`Producto Encontrado: \nCodigo: ${ prodsEncontrados.codigo } \nNombre: ${ prodsEncontrados.nombre } \nPrecio: ${ prodsEncontrados.precio }\n`) 
break
}
}