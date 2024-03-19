const mensaje = "Hola Mundo"
console.log(mensaje)

//Ejercicio 2

function operacion (a,b, operacion1) {
    if (operacion1 === "+" ) {
        console.log ("El resultado es:", a+b)
    } else if (operacion1 === "-") {
        console.log ("El resultado es:", a-b)
    } else if (operacion1 === "*" ) {
        console.log ("El resultado es:", a*b)
    } else if (operacion1 === "/" ) {
        console.log ("El resultado es:", a/b)
    } else {
        console.log("no entendi ni verga carnal")
    }
 
}

operacion (3,6, "+")


