//Ejercicio 1
const numeros = [1,2,3,4,5,6,7,8,9]
//console.log normal
console.log (numeros)
//reverse
numeros.reverse()
console.log(numeros)

//ejercicio 2
function mayor(){
    const numeros2 = [1,2,3,4,5,6,7,8,9]
    const maximo = Math.max(...numeros2)
    console.log(maximo)
}

mayor()

//Ejercicio 3

//VERSION 1
const bandas = ["Green Day", "Sum 41", "Blink 182", "FOB", "BFS",]

console.log(bandas.includes("BMTH"))
console.log(bandas.includes("Green Day"))

//VERSION 2
function ejercicio3(find){
    const bandas = ["Green Day", "Sum 41", "Blink 182", "FOB", "BFS",]
    
    if(bandas.includes(find)){
        console.log("La banda si esta en la lista")
    } else{
        console.log("Esta banda no esta en el setlist :c")
    }
}

ejercicio3("BMTH")


//Ejercicio 4

function repetir(rep) {
    const num1=[1,2,2,3,4,5,6,7,5,8,9,3,6,7,1,4,6,8,5,7,2,2,5]
    let igual = num1.filter (element => element === rep)
    console.log ("El numero", + rep, "se repite", + num1)
}


repetir(3)


//Ejercicio 5 

function suma(a,b){
    console.log ("El resultado es: ", a + b)
}

suma (56,89)

// Tarea 1
const array1 = [1,2,3,4,5,6]

const array2 = array1.map((element) => {
    const corchete = [];
    for(let i = 0; 1 < element; i++){
        corchete.push(element)
    }
    return corchete

})

console.log(array2);

//> <

//Tarea 2
const canciones1 = ["Time of you life", "Bascket case","American Idiot","minority",
 "Oh Love","2000 light years away","American dream is killing me"];

const letra = canciones1.filter((canciones1) => canciones1.includes("m"))

console.log(letra)

//Tarea 3 

let promedios = [
    {
        "name": "Manuel",
        "calificacion": [10,7,8,7],
    },
    {
        "name": "Santiago",
        "calificacion": [0,7,9,7],
    },
    {
        "name": "Carlos",
        "calificacion": [10,5,9,7],
    },
    {
        "name": "Gerardo",
        "calificacion": [4,7,8,9],
    },
    {
        "name": "Fernando",
        "calificacion": [9,6,8,10],
    },
    {
        "name": "Kassandra",
        "calificacion": [10,8,8,10],
    }
]

const prom = promedios.map ((persona) => {
    const calificaciones = persona.calificacion.reduce ((acc,curr) => acc + curr, 0) / persona.calificacion.length
    return {
       name: persona.name,
       calificaciones: calificaciones
    }
}, 0)

console.log(prom)























