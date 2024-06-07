alert("Bienvenidos a mi sitio.");

let continuar = confirm("¿Está seguro de querer avanzar?");

let saludoElemento = document.querySelector("h2.saludo");

if (continuar) {
    saludoElemento.innertext = "Qué alegría que quieras continuar tu visita";
} else {
    saludoElemento.innertext = "Lamentamos que no quieras continuar tu visita";
    
}

let nombre = prompt("Ingrese su nombre:");
let titulo = document.querySelector("h1");
titulo.textContent = `Bienvenido ${nombre}`;

let edad = prompt("¿Cuántos años tenés?");

let containerGeneral = document.querySelector(".container-general");
let accesoDenegado = document.querySelector("accesoDenegado");

if ((edad) < 18) {  
    accesoDenegado.style.display = "none";
    containerGeneral.style.display = "block"     
} else {
    let gustaProgramacion = confirm("¿Te gusta la programación?");

    let backgroundImg = document.querySelector(".background-img");

    if (gustaProgramacion) {
        backgroundImg.style.backgroundImage = `url('img/programmer.jpeg')`;
    } else {
        backgroundImg.style.backgroundImage = `url('img/gatito.jpeg')`;
    }
    let avatarImg = document.querySelector(".avatar");

    let nuevaImagenURL = prompt("Ingresa la URL de la imagen para tu avatar:");

    avatarImg.src = nuevaImagenURL;
    let pelicula = {
        nombre: '',
        director: '',
        duracion: 0,
        actor: ''
    };
    
    pelicula.nombre = prompt("Ingresa el nombre de tu película favorita:");
    pelicula.director = prompt("Ingresa el nombre del director de la película:");
    pelicula.duracion = parseInt(prompt("Ingresa la duración de la película en minutos:"));
    pelicula.actor = prompt("Ingresa el nombre del actor principal de la película:");

    let peliculaElemento = document.querySelector("#pelicula");
    peliculaElemento.style.display = "block";
    
    document.querySelector("#nombre").innerText = `Nombre: ${pelicula.nombre}`;
    document.querySelector("#director").innerText = `Director: ${pelicula.director}`;
    document.querySelector("#duracion").innerText = `Duración: ${pelicula.duracion} minutos`;
    document.querySelector("#actor").innerText = `Actor principal: ${pelicula.actor}`;
}
