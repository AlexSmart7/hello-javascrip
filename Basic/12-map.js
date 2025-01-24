//? Map

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicializacion

myMap = new Map([
    ['nombre','Alex'],
    ['email', 'el.ktrin157@gmail.com'],
    ['edad', 37]
])

console.log(myMap)

// Metodos y Propiedades

// Set

myMap.set('alias', 'Smart')
myMap.set('nombre', 'Alejandro')
console.log(myMap)


// get

console.log(myMap.get("alias"))
console.log(myMap.get("apellido"))

// has

console.log(myMap.has("alias"))
console.log(myMap.has("apellido"))


// delete

myMap.delete("email")
console.log(myMap)

// keys, values y entries

console.log(myMap.keys("alias"))
console.log(myMap.values("apellido"))
console.log(myMap.entries("apellido"))


// size

console.log(myMap.size)



// clear

myMap.clear()

console.log(myMap)

myMap