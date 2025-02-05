//? Ejercicios con Bucles

// Nota: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los numeros del 1 al 20
console.log('Ejercicio 1')

for(let i = 1; i <= 20 ; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado

console.log('Ejercicio 2')

let i = 1
let sumaNum = 0

while (i <= 100) {
    sumaNum = sumaNum + i
    i++
}
console.log(sumaNum)

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50

console.log('Ejercicio 3')

for(let i = 2; i <= 50 ; i += 2){
    console.log(i)
}

// 4. Dado un Array de Nombres, usa un bucle para imprimir cada nombre en la consola 

console.log('Ejercicio 4')

let arrayName = ['Jorge','Alejandro','Chris','Alexander','Axel','Santiago','Alex','Diego']

for (let valor of arrayName) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

console.log('Ejercicio 5')

myString = 'El Murcielago vive de noche'
let vocales = 'aeiouAEIOU'
let contador = 0

for(let i = 0 ; i < myString.length ; i++){
    if( vocales.includes(myString[i])) {
        contador ++
        console.log(myString[i])
    }    
}

console.log(`El texto tiene ${contador} vocales`)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

console.log('Ejercicio 6')

let arrayNum = [1,5,7,10,20]
let producto = 1

for (let valor of arrayNum) {
    producto = producto * valor
    console.log(producto)
}
console.log(`Resultado del Producto es ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

console.log('Ejercicio 7')

i = 1
tabla = 5

do {
    valor = tabla * i
    console.log(`${tabla} x ${i} = ${valor}`)
    i++
}while(i <= 10 )

// 8. Usa un bucle para invertir una cadena de texto

console.log('Ejercicio 8')

let stringText = 'Hola Alexander'
let stringInvertido = ''

for (let i = stringText.length -1 ; i >= 0 ; i-- ){
    stringInvertido += stringText[i]
}

console.log(stringInvertido)

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci

console.log('Ejercicio 9')

i = 1
let num1 = 0
let num2 = 1

console.log(num1)
console.log(num2)

while (i <= 8) {
    resultado = num1 + num2
    num1 = num2
    num2 = resultado
    console.log(resultado) 
    i++
}

// Generarlos en un array

let arrayFib = [0,1]

for (let i = 2 ; i < 10 ; i++ ){
    arrayFib.push(arrayFib[i - 1] + arrayFib[i - 2])
}

console.log(arrayFib)


// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

let arrayNumeros = [7,3,15,2,21,35,8,1,0,50]
let arrayMayores = []

for (let valor of arrayNumeros) {
    if(valor > 10){
        arrayMayores.push(valor)
    }
}
console.log(arrayMayores)

