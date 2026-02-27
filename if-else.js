const a = 5;

const b = Number(prompt("DIGITE 1 NUMERO"));
if (isNaN(b)) {
  alert("Por favor, ingrese un número válido.");
} else {
  alert(a + b);
}

