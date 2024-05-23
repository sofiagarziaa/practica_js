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
    anio: 2020,
    color: "Gris",
    posicion: 0,
    avanzar: function (n){
        this.posicion += n  
    },

    retroceder: function(n){
        this.posicion -= n
    },
};

auto.avanzar(5)
auto.retroceder(2)
auto.avanzar(3)
auto.retroceder(1)

console.log("posicion final del auto" + auto.posicion);

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


//Ejercicio 5:Batalla de superheroes.


const ironMan = {
    nombre: "Tony Stark",
    equipo: "avengers",
    poderes: ["rayos destructivos","super fuerza","volar"],
    energia: 100,
    getPoder: function(numero){
       return `Poder elegido de ${this.nombre}, ${this.poderes [numero -1]}, energia restante:${this.eneria -= 10}`

    }
};


const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Tranformacion","super fuerza"],
    energia: 110,
    getPoder: function(numero){
        return `Poder elegido de ${this.nombre}, ${this.poderes [numero -1]}, energia restante:${this.eneria -= 10}`
        
    }
};


console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(0))


