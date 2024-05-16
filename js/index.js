//ejercicio 1:
//let misDatos = {
//    nombre: "Sofia",
//    apellido:"Garzia",
//    dni:"45906343",
//   comidasFavoritas:["Empanada", "pizza", "milanesa"] //array
//};

//ejercicio 2:
let misDatos = {
    nombre: "Sofia",
    apellido:"Garzia",
    edad: "19",
    dni:"45906343",
    comidasFavoritas:["Empanada", "pizza", "milanesa"],
    saludar: function() {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
        }
};

console.log(misDatos.saludar());

  
