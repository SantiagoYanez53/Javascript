const array = [1, "puto", 3, true,]
//const colores = ["verde","rojo","azul","lila"]

console.log(array[0])
console.log(colores[0])


//el indexOf sirve para poder saber la posicion del elemento que esta en el array
console.log(colores.indexOf("rojo"))

//ahora pasaremos a ver metodarraysos en 

//amos a ver while

while(i <= 10) {
    console.log (`cuanto vale i: `, i)
    i++
}

//> <

//for

for (i; i < 10;i++) {
    console.log (`FOR cuanto vale i: `, i)
} 

// esto es una iteración esto sirve para inmprimir los valores de un array de manera
//que quede impreso cómo una lista
for (let i=0; i < 4; i++) {
    console.log(colores[i]) 
}

/*detener una operacion en el elemento que quiera
const colores = ["verde","rojo","azul","lila"]
let i = 0
while(i < colores.length) {
   console.log(colores[i])
   
    if (colores[i] === "rojo") break
    i++
} */

//continue: la condicion lo cumple, me lo brinco

const colores = ["verde","rojo","azul","lila"]
let i = 0
while(i < colores.length) {
   i++
   console.log(colores[i])
 if (colores[i] === "rojo") continue
}

//for in Se utiliza para iterar sobre las propiedades enumerables de un objeto.
const objeto = { a: 1, b: 2, c: 3 };

for (let clave in objeto) {
  console.log(clave, objeto[clave]);
}

//for of Se utiliza para iterar sobre elementos iterables, como arrays, strings, mapas, conjuntos, etc.

const array2 = [1, 2, 3];

for (let elemento of array2) {
  console.log(elemento);
}
