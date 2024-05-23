//Ejercicio 1:
let mensaje = "¿Vas a salir de tu casa?";
respuesta = confirm(mensaje)

console.log= (respuesta)

if (respuesta){
    alert("chequea el pronostico del tiempo antes de salir")
} else{
    alert("que bueno que te quedes. Va a llover hoy")
}

//Ejercicio 2:
let mensajes = "ingrese su nombre";
nombree= prompt(mensajes)

console.log= (nombree)

let msj = "ingrese su edad";
edad = prompt(msj)

console.log= (edad)

let pregunta = "¿Te gustan los deportes?";
fanDeDeportes = confirm(pregunta)

console.log= (fanDeDeportes)

let frase = `Muchas gracias ${this.nombre} por responder nuestras preguntas`;
agradecimiento = alert(frase)

let usuario = {
    nombres : "nombre",
    edadd : "edad",
    deportistaProfesional:function() {
        if (this.fanDeDeportes){
            return "Si, sy fan del deporte";
        }else{
            return "No soy fan del deporte";
        }
    }
};

console.log= (usuario.deportistaProfesional())

//2da parte_1:

let frase2 = "ingrese un numero";
number = prompt(frase2)

let quote = "ingrese otro numero";
number2 = prompt(quote)

function multiplicar(number,number2){
    resultado=number*number2
    return `El resultado de multiplicar num1 y num2 es: ${resultado}`
}

console.log= (multiplicar)

//ejercicio 2:
let question = "ingrese su nacionalidad";
nacionalidad = prompt(question)

let question2 = "ingrese su profesion";
profesion = prompt(question2)

let question3 = "¿Cuantos km camina x dia?";
caminata = prompt(question3)

function filosofoHipster(nacionalidad,profesion,caminata){
    if (nacionalidad==="argentina"&& profesion==="filosofo" && caminata=="2km"){
        return "soy un filosofo hipster";
    }else{
        return "No soy un filosofo hipster";
    }
};

console.log=(filosofoHipster())




