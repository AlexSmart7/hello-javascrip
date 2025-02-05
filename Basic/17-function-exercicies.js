// ? Ejercicios con Funciones

// 1. Crea una funcion que reciba 2 numeros y devuelva su suma

    function sumExercise (a, b){
        console.log(a + b)
    }

// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos

let arrayNumeros = [7,3,15,2,21,75,8,1,0,50]

function numMayor(arrayNumeros) {

    let mayor = arrayNumeros[0]

    for(let num of arrayNumeros){
        if (num > mayor){
            mayor = num
        }
    }

    return mayor
}

mayorNum = (arrayNumeros) => Math.max(...arrayNumeros)

// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene

myString = 'El Murcielago vive de noche'

function vocales (myString){

    let vocales = 'aeiouAEIOU'
    let contador = 0
    
    for(let i = 0 ; i < myString.length ; i++){
        if( vocales.includes(myString[i])) {
        contador ++
        }    
    }
    return contador
}

// 4. Crea una funcion que reciba un array de string y devuelva un nuevo array con las strings en mayusculas

arrayString = ['Alex','Ceja','Smart']
 
function arrayMayus(arrayString){
    
    let arrayMayusculas = []

    for (let valor of arrayString) {
        arrayMayusculas.push(valor.toUpperCase())    
    }
    
    return arrayMayusculas
}
    
// 5. Crea una funcion que reciba un numero y devuelva true si es primo y false en caso contrario

function numPrimo(num){

    if (num < 2 ) return false;

    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0 ){
            return false;
        }
    }

    return true;
}

// 6.Crea una funcion que reciba 2 arrays y devuelva un nuevo array que contenga los elementos comunes de ambos

array1 = [10,1,5,20,7]
array2 = [1,5,7,9,3,4]

function elementosComunes (arr1,arr2){
    return arr1.filter(elemento => arr2.includes(elemento));
}

// 7. Crea una funcion que reciba un array de numeros y devuleva la suma de todos los numeros pares

numArray = [1,2,3,4,5,6,7,8,9,10]

function sumPares (arr){
    return arr
        .filter(num => num % 2 === 0) // Se filtran los pares
        .reduce((sum,num) => sum + num, 0)
}

//Foreach

function sumaPares(arr){
    let suma = 0;

    arr.forEach(element => {
        if(element % 2 === 0){
            suma += element;
        }        
    });

    return suma;
}

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

function numElevado(arr){
    return arr.map(num => num ** 2)
}

//Foreach

function elevados(arr){
    let resElevado = []

    arr.forEach (num => resElevado.push(num ** 2))
    return resElevado
}

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let stringText = 'Mi Texto Invertido'

function textInvertido(texto){
    let stringInvertido = ''

    for (let i = texto.length -1 ; i >= 0 ; i-- ){
    stringInvertido += texto[i]
    }

    return stringInvertido
}

// 10. Crea una funcion que calcule el factorial de un numero dado

function facto(n){
    if (n < 0) return "No existe fatorial en numeros negativos"
    if (n === 0 || n === 1) return 1;
    return n * facto(n - 1) 
}

// Bucle

function factor(n){
    if (n < 0 ) return "No existe fatorial en numeros negativos"

    let resultado = 1;

    for (let i = 2; i <= n; i++){
        resultado *= i
    }

    return resultado
}

//* Ejercicio1
console.log('Ejercicio_1')
sumExercise(10,7)

//* Ejercicio2
console.log('Ejercicio_2')
console.log(`El numero mayor es ${numMayor(arrayNumeros)} opcion larga`)
console.log(`El numero mayor es ${mayorNum(arrayNumeros)} opcion corta`)

//* Ejercicio3
console.log('Ejercicio_3')
let numVocales = vocales(myString) 
console.log(`El texto tiene ${numVocales} vocales`)

//* Ejercicio4
console.log('Ejercicio_4')
let Mayusculas = arrayMayus(arrayString) 
console.log(Mayusculas)

//* Ejercicio5
console.log('Ejercicio_5')
console.log(numPrimo(23))
console.log(numPrimo(7))
console.log(numPrimo(1))

//* Ejercicio6
console.log('Ejercicio_6')
let elemComunes = elementosComunes(array1,array2) 
console.log(elemComunes)

//* Ejercicio7
console.log('Ejercicio_7')
console.log(sumPares(numArray))
console.log(sumaPares(numArray))

//* Ejercicio8
console.log('Ejercicio_8')
console.log(numElevado(numArray))
console.log(elevados(numArray))

//* Ejercicio9
console.log('Ejercicio_9')

let textoInvertido = textInvertido(stringText) 
console.log(textoInvertido)

//* Ejercicio10
console.log('Ejercicio_10')
console.log(facto(-3))
let result = factor(1)
console.log(result)