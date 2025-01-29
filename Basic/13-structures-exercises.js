//? Ejercicios de Estructuras

// 1. Crea un array que almecene cinco animales

let arrayanimales = []

arrayanimales = ['Leon', 'Jirafa','Rinoceronte' ,'Elefante', 'Jabali']
console.log(arrayanimales)


// 2. Añade 2 mas uno al principio y otro al final

arrayanimales.unshift('Oso')
arrayanimales.push('Tigre')
console.log(arrayanimales)


// 3. Elimina el que se encuentre en la tercera posicion

console.log(arrayanimales.splice(2,1))
console.log(arrayanimales)


// 4. Crea un set que almacene cinco libros

let setLibros = new Set()

setLibros = new Set(['El codigo da vinci','Harry Potter','Maze Runners','Narnia','Crepusculo'])
console.log(setLibros)

// 5. Añade 2 mas, uno de ellos repetido

setLibros.add('Harry Potter')
setLibros.add('El Principito')
console.log(setLibros)

// 6. Elimina uno concreto a tu eleccion

console.log(setLibros.delete('Narnia'))
console.log(setLibros)

// 7. Crea un mapa que asocie el numero del mes a su nombre

let mapMeses = new Map([
    ['01','Enero'],
    ['02','Febrero'],
    ['03','Marzo'],
    ['04','Abril'],
    ['05','Mayo'],
    ['06','Junio'],
    ['07','Julio'],
    ['08','Agosto'],
    ['09','Septiembre'],
    ['10','Octubre'],
    ['11','Noviembre'],
    ['12','Diciembre']
])
console.log(mapMeses)


// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor

console.log(mapMeses.get('05'))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

mapMeses.set('Verano',['Junio','Julio','Agosto'])
console.log(mapMeses)

// 10. Crea un Array, transformalo a un Set y almacenalo en un Map

let arrayEsposa = ['Stephanie',33,'F',true,'Mexicana']
console.log(arrayEsposa)

let setEsposa = new Set(arrayEsposa)
console.log(setEsposa)

let mapDatos = new Map()

mapDatos.set('Esposa',[setEsposa])
console.log(mapDatos)