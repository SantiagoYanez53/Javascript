const convierteAArray = (str) => str.split('')
const invierteArray = (array) => array.reverse()
const convierteAString = (array) => array.join(' ')
const imprimir = (message) => console.log(message)
imprimir('imprimiendo cosas ajenas al formato')
const formato = (str, callback1, callback2, callback3, callback4) => {
  const cA = callback1(str)
  const iA = callback2(cA)
  const cS = callback3(iA)
  callback4(`Hola!!!! ${cS}`)
  return
}
const p1 = formato('Hola mundo', convierteAArray, invierteArray, convierteAString, imprimir)




// ejemplo de CALLBACK//

let myArray = ['Omar','Denise','Miguel','Mario','Eduardo','Miguel','Miguel','Miguel','Miguel']
let cosa='Miguel'
/* const search=(thing)=>thing===cosa */
    
//const found = cosas.filter((cosa)=>cosa===buscar)
myfuncion =(array,callback)=>{
        const newArray = []
        array.forEach(element => {
            const exist=callback(element)
            if (exist) newArray.push(element)
        });
        return newArray
    }
/* const search=(thing)=>thing===cosa */
    
console.log(myfuncion(myArray,(thing)=>thing===cosa))
//console.log(myfuncion(myArray,search))
