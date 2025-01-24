//? set


// Declaracion

let mySet = new Set()

console.log(mySet)

// Inicializacion

mySet = new Set (['Alex','Ceja','Smart',37,true,'el.ktrin157@gmail.com'])

console.log(mySet)


// Metodos comunes

// add y delete

mySet.add("https://alex.ceja.dev")

console.log(mySet)

mySet.delete('el.ktrin157@gmail.com')

console.log(mySet)

console.log(mySet.delete('Smart'))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Ceja"))
console.log(mySet.has("Smart"))

// size

console.log(mySet.size)


// convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)


// convertir un array en un set

mySet = new Set(myArray)
console.log(mySet)

// Un Set no admite duplicados


mySet.add ('Alex')
mySet.add ('Alex')
mySet.add ('Alex')
console.log(mySet)