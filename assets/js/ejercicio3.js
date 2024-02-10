//se ingresan los datos por pantalla
let cantidadDias = parseInt(prompt("Ingresa la cantidad de días:"));
// se hace la convercion utilizando math floor
let anos = Math.floor(cantidadDias / 365);
let semanas = Math.floor((cantidadDias % 365) / 7);
let dias = cantidadDias % 7;

// se imprime el resultado utilizando concatenacion por consola del navegador
console.log("Equivalente en años, semanas y días para " + cantidadDias + " días:");
console.log(anos + " años, " + semanas + " semanas y " + dias + " días.");

