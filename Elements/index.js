/*console.log("Hola Mundo")

const titulo = document.getElementById('elementoId')
const titulo1 = document.getElementsByClassName('subtexto')
const titulo3 = document.getElementsByTagName('h2')

//estas madres del query siempre trae el primer elemento
const titulo4 = document.querySelector('h1')


// esto es un ejemplo de como hacer para poder editar cosas del HTML de manera multiple, como los 
const parrafo =document.querySelectorAll("p")

parrafo.forEach((p,i) =>  {
    const content = p.innerHTML
    
    
    p.innerHTML = "$" + content

    //p.textContent = "Hola" //este lo sustituye por string
    //p.innerHTML = <a href ="http://google.com">Ola</a> //este te ayuda a sustituirlo por HTML
}) 
const titulo5 = document.querySelector('h1')

    titulo5.style.fontSize = "40px"
    titulo5.style.color = "white"
    titulo5.classList ="Hola nueva clase"
    titulo5.id = "Un ID"
    titulo5.setAttribute("edi", "amor inifinito")
    console.log(titulo5.get)*/

 //esto es el procedimiento para poder crear elementos en un html vacio desde js
document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('body')

    //aqui se crea y se configura el boton
    const btn = document.createElement('a')

    btn.textContent = "Inciar Sesión"
    btn.style.background = "black"
    btn.style.color = "white"
    btn.style.border = "dashed 5px whte"
    btn.style.borderRadius = "10px"
    btn.style.fontSize = "40px"
    btn.style.fontStyle = ""

    btn.setAttribute("href", "https://www.google.com/")
    
    //este sirve para poder imprimir el boton 
    //esta el append y el prepend (append es para imprimirlo al final y el prepend es para imprimirlo al inicio)
    container.append(btn)


})

//remove y removeChild
const padre = document.querySelector(".padre")
const hijo = document.querySelector(".hijo")
//remove buscara el elemenmto por todo el documento
//removeChild buscara el elemnto solo en el padre

setTimeout(() => {
    //hijo.remove()
    padre.removeChild(hijo)
},4000)




