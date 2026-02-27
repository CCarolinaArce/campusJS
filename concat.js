const categoria = prompt("Ingrese su categoria: A, B o C");

if (categoria.toUpperCase() === "A") {
  alert("Categoria A");
} else if (categoria.toUpperCase() === "B") {
  alert("Categoria B");
} else if (categoria.toUpperCase() === "C") {
  alert("Categoria C");
} else {
  alert("Categoria no reconocida");
}