let diaSemana = prompt("Ingrese un día de la semana (Lunes, Martes, Miércoles, Jueves o Viernes):");
let horaActual = (prompt("Ingrese la hora actual (formato 24 horas):"));

if ((diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miércoles" || diaSemana === "jueves" || diaSemana === "viernes") &&
    (horaActual >= 10 && horaActual <= 15)) {
    document.querySelector(".respuesta").innerText = "¡Bien! Todavía estamos a tiempo de llegar.";
} else {
    document.querySelector(".respuesta").innerText = "Uf… No llegamos.";
}
