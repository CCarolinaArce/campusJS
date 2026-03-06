async function suma(n1, n2) {
    return n1 + n2
}

function resultado() {
    return (async () => await suma(5, 4))()// Funcion auto-ejecutable.
}

console.log(resultado())