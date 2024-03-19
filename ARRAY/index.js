const numeros = [1, 2, 3, 4,5,6,7,8]
// const colores = ["verde","rojo","azul","lila"]

//push agrega elemntos al array

console.log (numeros)
numeros.push(9)
console.log(numeros)

//pop elimina u omite un elemento

console.log(colores)
colores.pop()
console.log(colores)

//shift  elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

const miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

console.log("miPescado antes: " + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

const eliminado = miPescado.shift();

console.log("miPescado después: " + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log("Elemento eliminado: " + eliminado);
// "Elemento eliminado: ángel"

//unshift agrega un elemento al inicio del array

console.log(miPescado)
miPescado.unshift("marlin")
console.log(miPescado)

//split convierte un String en Array

//join une todos los elementos de una matriz en una cadena y devuelve esta cadena.
const colores = ["verde","rojo","azul","lila","negro", "cafe", "amarillo", "crema"]
console.log(colores.join())

//slice devuelve una copia de una parte del array dentro de un nuevo array 

console.log (colores.slice(1, 7))

//splice cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
 //abr pa que entiendas papi, "0" es para agregar un elemento y "1" es para reemplazar
 //(aqui va la posicion que modificaras, aqui si agregaras o reemplazaras, nombre del elemento que agregaras o por el que vas a reemplazar)
 
//for each  ejecuta la función indicada una vez por cada elemento del array.
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
  }
  // Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
  [2, 5, , 9].forEach(logArrayElements);
  // salida:
  // a[0] = 2
  // a[1] = 5
  // a[2] = 9

  //find  devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada
  const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

//Sort ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.


//map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
const numeros2 = [1, 2, 3, 4, 5];

// Utilizando el método .map() para multiplicar cada elemento por 2
const resultado = numeros.map(numero => numero * 2);

console.log(resultado); // Output: [2, 4, 6, 8, 10]

//abr hagamos uno
// El map basicamente te va ayudar para poder hacer una iteracion sobre el array sin modificar el origina
//como este caso, aqui te estara enlistando las canciones 
const canciones = ["Time of you life", "Bascket case","American Idiot","Minority", "Oh Love"]

console.log(canciones)
let i = 1
const nueva = canciones.map(cancion => i++ + (": ") + cancion);
console.log(nueva)



//Filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

//Ejemplo 
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);
console.log(words)
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

"hagamos uno"

const canciones1 = ["Time of you life", "Bascket case","American Idiot","Minority", "Oh Love"];

const letra = canciones1.filter((canciones1) => canciones1.includes("m"))

console.log(letra)




//Reduce, ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
//Ejemplo


//forEach es un método que se utiliza en JavaScript para iterar sobre elementos de
// un array y ejecutar una función proporcionada una vez por cada elemento del array.
const miArray = ['a', 'b', 'c'];

miArray.forEach(function(elemento, indice) {
  console.log(`Elemento en el índice ${indice}: ${elemento}`);
});

// Salida:
// Elemento en el índice 0: a
// Elemento en el índice 1: b
// Elemento en el índice 2: c
  


