function imprimir (name /* esto es el aprametro de la funcion*/) {
    /*Cuerpo de la funcion*/

    console.log(name)
}

imprimir("Samuel") /* las comillas simples en tu teclado se ponen con Alt dercho + la tecla alado del 0*/ 

function imprimir2({name, lastName}) {
    console.log(name,lastName)
}

imprimir2({name: "Aldo", lastName: "Lagunas"})
/* Esto de agregarle objetos sirve para poder determinar un orden
y que no se altere por la manera en cómo se acomode al momento de imprimir*/

function imprimir3(props2) {
    const {age, ...rest} = props /* este sirve para poder seleccionar un elemento
    que no quiero que se imprima, se pone el parametro que no se imprimira seguido
    de una coma y tres puntos y el nombre que tendra, en este caso es "resto*/
    const {name, gender} = props2  /*este sirve para seleccionar solo los parametros
    que se imprimiran, pero en el console.log se pone lo que se imprimira*/
    
    console.log(name,gender)
}
 imprimir3({
    name:"Aldo",
    lastName:"Lagunas",
    age:"28",
    gender:"male",
    height: 1.63,
 })

 /*para sumar mas de 2 digitos*/
 function sumarNumeros(...numeros) {
    // Verificar si se proporcionaron al menos dos números
    if (numeros.length < 2) {
      console.error("Se requieren al menos dos números para la suma.");
      return;
    }
  
    // Utilizar el método reduce para sumar todos los números
    const resultado = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  
    return resultado;
  }
  
  // Ejemplo de uso
  const suma = sumarNumeros(15, 25, 35, 45);
  console.log("La suma es:", suma);



  function saludo(name = "amigo") {
    return `Hola cómo estas ${name} ?`
  
  
}
console.log(saludo("Angel"))
console.log(saludo())


let num=0

function alterar() {
  num++
 console.log(num)
}

alterar()
alterar()
alterar()


function par(numero) {
  if (parseInt(numero) % 2 ===0) {
    console.log("true")
  } else {
    console.log("false")
  }

}

par(7)
par("w")