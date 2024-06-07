let aplicarDarkMode = confirm("¿Querés aplicar dark mode en el sitio?");

if (aplicarDarkMode) {

    document.body.style.backgroundColor = "#444";
    document.body.style.color = "#fff";

    document.querySelector(".respuesta").innerHTML = "Dark Mode activado";
} else {

    document.querySelector(".respuesta").innerHTML = "Ok. Lo activo en otro momento.";
}
