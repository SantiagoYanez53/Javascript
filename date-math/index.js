Math.pow  //es un método en JavaScript que se utiliza para elevar un número a una potencia
console.log(Math.pow(6,10))

//Math.abs se utiliza para obtener el valor absoluto de un número, 
//es decir, su distancia respecto al cero en la recta numérica, sin tener en cuenta su signo
console.log(Math.abs(6.89))

//Math.sqrt esto es raiz cuadrada
console.log(Math.sqrt(81))

//Math.floor se utiliza para redondear hacia abajo un número decimal al entero más cercano.
console.log(Math.floor(7.56))

//Math.round que se utiliza para redondear un número decimal al entero más cercano .ceil
console.log(Math.round(3.8))


//Math.ceil que se utiliza para redondear un número decimal al entero más cercano hacia arriba
console.log(Math.ceil(7.01))

//Math random da un numero aleatorio entre el 0.0 y 1

console.log(Math.random())



//DATE

const today = new Date() //Aqui da la hora y fecha que tiene el servidor osea NODE.js
"para que te de la hora que recibira el usuario se tiene que poner en la consola"

console.log(today.getDate()) // devuelve el día del mes para la fecha especificada de acuerdo con la hora local.
console.log(today.getFullYear()) //Imprime el año actual
console.log(today.getMonth())//Imprime el mes que estamos segun javascript, funciona como el acomodo de array osea 0,1,2, y asi
console.log(today.getTime())//Imprime la cantidad de segundos que han pasado desde 1970


// ejercicio uno
const dia = new Date("2003-08-27 15:50:13");
const hoy = new Date();

const comparacion = (pasado, presente) => {
    const diferencia = presente - pasado;

    const segundos = Math.round(diferencia / 1000);
    const minutos = Math.round(segundos / 60);
    const horas = Math.round(minutos / 60);
    const dias = Math.round(horas / 24);
    const mes = Math.round(dias / 31);
    const año = Math.round(mes/12)

    console.log("Desde el día ", pasado, "hasta el día ", presente, "han pasado ", segundos, "segundos,", minutos, "minutos,",
    horas, "horas,", dias, "dias,", mes, "meses,", año, "años."

    );
}

comparacion(dia, hoy);
