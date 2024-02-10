
let cantidadDias = parseInt(prompt("Ingresa la cantidad de días:"));

let anos = Math.floor(cantidadDias / 365);
let semanas = Math.floor((cantidadDias % 365) / 7);
let dias = cantidadDias % 7;


console.log("Equivalente en años, semanas y días para " + cantidadDias + " días:");
console.log(anos + " años, " + semanas + " semanas y " + dias + " días.");

