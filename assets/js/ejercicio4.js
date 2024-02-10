// se ingresa los valores por pantalla

const num1 = prompt("Ingrese 1 numero:");
const num2 = prompt("Ingrese 2 numero:");
const num3 = prompt("Ingrese 3 numero:");
const num4 = prompt("Ingrese 4 numero:");
const num5 = prompt("Ingrese 5 numero:");

// se realiza la operacion suma 
let suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
// la suma se divide por 5 notas
let promedio = suma / 5;

// se imprime el resultado por pantalla en la consola  del navegador
console.log("Suma de los números: " + suma);
console.log("Promedio de los números: " + promedio);

