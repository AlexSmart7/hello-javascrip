// Importacion de modulos

import { add, PI, name, Circle } from "./28-export-modules.js";

import substract from "./28-export-modules.js";

// funciones

console.log(add(7,10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))


// Importacion por defecto

console.log(substract(5,10))



