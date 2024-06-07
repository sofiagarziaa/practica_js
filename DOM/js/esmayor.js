let numero1 = prompt("Ingrese el primer número:");
numero1 = (numero1);

let numero2 = prompt("Ingrese el segundo número:");
numero2 = (numero2);

let respuesta = document.querySelector(".respuesta");

if (numero1 > numero2) {
    respuesta.innerText = `${numero1} es el número mayor`;
} else if (numero2 > numero1) {
    respuesta.innerText = `${numero2} es el número mayor`;
} else {
    respuesta.innerText = "Los números son iguales";
};