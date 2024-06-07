let dia = prompt("¿Qué día es hoy?");

let respuesta = document.querySelector(".respuesta");

if (dia === "domingo") {
    respuesta.innerHTML = "¡Pongamos la olla, hoy se comen pastas!";
} else {
    respuesta.innerHTML = "Mejor lo dejamos para el domingo";
}
