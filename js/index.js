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

//ejercicio 3:auto

let auto ={
    marca: "Honda",
    modelo: "Fit",
    año: 2020,
    color: "Gris",
    posicion: 0,
    avanzar: function (n){
        this.posicion += n;
        
    },

    retroceder: function(n){
        this.posicion += n;
        
    },
};

auto.avanzar(5)
auto.retroceder(2)
auto.avanzar(3)
auto.retroceder(1)

console.log(auto.posicion);

//Ejercicio 4:
let nuevoAuto ={
    marca: "Honda",
    modelo: "Fit",
    año: 2020,
    color: "Gris",
    posicion: 0,
    moverse: function(movimientos) {
        for (let i = 0; i < movimientos.length; i++) {
            this.posicion += movimientos[i];
            if (this.posicion < 0) {
                this.posicion = 0; 
            }
        }
    }
};

console.log("La posición final del nuevo auto es:", nuevoAuto.posicion);




