// ingresan valores por pantalla
const num1 = prompt("Ingrese 1 valor:");
const num2 = prompt("Ingrese 2 valor:");
// se hace el desarrollo segun el correspondiente operador
let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let multiplicacion = parseInt(num1) * parseInt(num2);
let division = parseInt(num1) / parseInt(num2);
let modulo = parseInt(num1) % parseInt(num2);
// se imprime por pantalla el resultado con interpolacion por consola del navegador
console.log(`la suma de ${num1} + ${num2} es ${suma}`);
console.log(`la resta de ${num1} - ${num2} es ${resta}`);
console.log(`la multiplicacion de ${num1} * ${num2} es ${multiplicacion}`);
console.log(`la division de ${num1} / ${num2} es ${division}`);
console.log(`el modulo de ${num1} % ${num2} es ${modulo}`); 