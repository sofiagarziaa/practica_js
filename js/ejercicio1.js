//ejercicio 1: Crear una función rectangulo que reciba como parámetros la altura y el ancho de un rectángulo y retorne el área.

function area (altura, ancho){
    return altura*ancho
};

let areas= area("10","5")
console.log (area);

//ejercicio 2: Crear una función triangulo que reciba como parámetro la base y la altura de un triángulo y retorne el área.

//let areas =area("25","10")
console.log (areas);

//Crea una función largoDelArray que reciba como parámetro un array y retorne la cantidad de elementos que contiene.

function largoDelArray (){
    let largoSorteado = [1,2,3,4,5,6]
    return largoSorteado.length
};

console.log (largoDelArray);

//Crea una función cantidadDeLetras que reciba como parámetro una palabra y devuelva la cantidad de letras que tiene.

function cantidadDeLetras(palabra){
    return palabra.length
};

console.log (cantidadDeLetras);

//Crea una función dolarHoy que reciba como parámetro un precio en pesos argentinos y devuelva el precio en dólares estadounidenses.

function dolarHoy(precio){
    return precio*1000
};

console.log(dolarHoy);

//Crea una función precioFinal que reciba un precio como parámetro y retorne el precio más el IVA (21%).

function precioFinal (precio){
    return precio*25
};

console.log(precioFinal)

//Crea una función mitad que reciba un número como parámetro y devuelva su mitad. Tené en cuenta que el operador de división en JavaScript es “ / ”.

function mitad(numero){
    return numero/2
};

console.log(mitad) 

//Crea una función diaSegunNumero que reciba como parámetros un array y un número y retorne el día correspondiente al número ingresado.


function diaSegunNumero(lunes,martes,miercoles,jueves,viernes,sabado,domingo){
    for(let i=0; i<7; i++)
    return diaSegunNumero
};

console.log(diaSegunNumero)


function siguiente(numero) {
    return numero + 1;
};
  
function doble(numero) {
    return 2 * numero;
};
  
function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
};
  
  