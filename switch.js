const categoria = prompt("Ingrese su categoria: A, B o C");

switch (categoria.toLocaleLowerCase()) {
    case "A":
        alert('La categoria es: ' + categoria + 'Tiene 1 costo de 200');
        break;
    case "B":
        alert('La categoria es: ' + categoria + 'Tiene 1 costo de 300');
        break;
    case "C":
        alert('La categoria es: ' + categoria + 'Tiene 1 costo de 400');
        break;
    default:
        alert("Categoria no reconocida");
}

