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
        return `Hola mi nombre es ${nombre} ${apellido} y tengo ${edad}. Mi primer comida favorita es ${comidasFavoritas[0]}.`;
        }
};

console.log(misDatos.saludar());

let auto ={
    marca: "Honda",
    modelo: "Fit",
    año: 2020,
    color: "Gris",
    posicion: 0,
    function avanzar (numero){
        posicion += numero,
        return avanzar;
    },

    function retroceder (numero){
        posicion += numero,
        return retroceder
    },
}

console.log(auto.posicion)


