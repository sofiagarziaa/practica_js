// Ejercicio 1_a:
for (let i = 0; i < 5; i++) {
    console.log(`Practicando con el bucle for`+ i);
};

// b:
for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
};

//c:
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
};

for (let i = 5; i <= 250; i += 5) {
    console.log(i);
};

//d:
for (let i = 100; i >= 0; i--) {
    console.log(i);
};

//Ejercicio 3_a:
let base = 5; 
let resultados = [];

//b:
for (let i = 1; i <= 10; i++) {
    resultados.push(base * i);
}
//c:
console.log(resultados);

//d:
function generarTablaMultiplicar(base) {
    let resultados = [];

    for (let i = 1; i <= 10; i++) {
        resultados.push(base * i);
    }

    console.log("Tabla de multiplicar del número", base, ":", resultados);
};

generarTablaMultiplicar(4);
generarTablaMultiplicar(7);
generarTablaMultiplicar(20);

//Ejercicio 3_a: 
let ganancias = [100, -50, 200, -75, 150, -25, 300, -100, 250, -50];

//b:
let total = 0;

// c:
for (let i = 0; i < ganancias.length; i++) {
    total += ganancias[i];
};

// d:
console.log("El total es:", total);

//Ejercicio 4:

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
};