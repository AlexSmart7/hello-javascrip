//? array (Estructuras de Datos)

// Declaracion

let myArray = [1]
let myArray2 = new Array(1)


// Inizializacion

myArray = [1,2,3,4,5]
myArray2 = new Array (1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array (3)
myArray2[0] = "Alex" 
myArray2[1] = "Ceja"
myArray2[2] = "Smart"

console.log(myArray2)


myArray = []
myArray[2] = "Alex" 
//myArray[0] = "Ceja"
myArray[1] = "Smart"

console.log(myArray)


// Metodos comunes

myArray = []

// push y pop  
// push - Agrega un elemento al array
// pop - Elimina el ultimo elemento del Array


myArray.push("Chris")
myArray.push("Alexander")
myArray.push("Ceja")
myArray.push("Morales")
myArray.push(4)

console.log(myArray)

myArray.pop()

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo elemento y lo devuelve

myArray.pop()

console.log(myArray)


// shift y unshift
// shift - Elimina el primer elemento del Array
// unshift - Agrega elementos al principio del Array

console.log(myArray.shift()) // Elimina el primer elemento y lo devuelve

console.log(myArray)

myArray.unshift("Ceja",4)
console.log(myArray)


// Length

console.log(myArray.length)


// clear

myArray = []
console.log(myArray)


// slice

myArray = ['Alex','Ceja','Smart',37,true]

let mynewArray = myArray.slice(1,3) // La ultima posicion no se toma en cuenta

console.log(myArray)
console.log(mynewArray)


// splice 

myArray.splice(1, 3)
console.log(myArray)


myArray = ['Alex','Ceja','Smart',37,true]

myArray.splice(2,2,'Nuevo elemento')
console.log(myArray)