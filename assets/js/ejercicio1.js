
const num1 = prompt("Ingrese 1 valor:");
const num2 = prompt("Ingrese 2 valor:");

let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let multiplicacion = parseInt(num1) * parseInt(num2);
let division = parseInt(num1) / parseInt(num2);
let modulo = parseInt(num1) % parseInt(num2);

console.log(`la suma de ${num1} + ${num2} es ${suma}`);
console.log(`la resta de ${num1} - ${num2} es ${resta}`);
console.log(`la multiplicacion de ${num1} * ${num2} es ${multiplicacion}`);
console.log(`la division de ${num1} / ${num2} es ${division}`);
console.log(`el modulo de ${num1} % ${num2} es ${modulo}`); 