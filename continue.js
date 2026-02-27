
const x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for ( let i = 0; i < x.length; i++) {
    if ( x[i] == 5) { continue; }
    console.log(x[i]); //OUTPUT: 1, 2, 3, 4, 6, 7, 8, 9, 10
}

const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for ( let i = 0; i < a.length; i++) {
    if ( a[i] == 5) { break; } //OUTPUT: 1, 2, 3, 4
    console.log(a[i]);
}
