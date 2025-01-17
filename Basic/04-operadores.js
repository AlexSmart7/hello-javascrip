//? Operadores

//? Operadores Aritmeticos

    let a = 5
    let b = 10

    console.log(a + b) //Suma 
    console.log(a - b) //Resta
    console.log(a * b) //Multiplicacion
    console.log(a / b) //Division

    console.log(a % b) //Division
    console.log(a ** b) //Division

    a++ // Incremento
    console.log(a)

    b-- // Decremento
    console.log(b)


//? Operadores de Asignacion

    let myVariable = 2
    myVariable += 2
    console.log(myVariable)

    myVariable -= 2
    myVariable *= 2
    myVariable /= 2
    myVariable %= 2
    myVariable **= 2


//? Operadores de Comparacion

console.log(a > b)
console.log(a < b)
console.log(10 >= 10)
console.log(5 <= b)
console.log(a == b)
console.log(a == 6)     // igualdad por valor
console.log(a == "6")   // igualdad por valor
console.log(a == a)
console.log(a === a)    // Igualdad por identidad (por tipo y valor)
console.log(a === "6")

console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy value (valores verdaderos)

/*
-Todos los numeros positivos y Negativos menos el 0
-Todas las cadenas de texto menos las vacias
-El boolean true
*/

// Falsy values (valores falsos)

/*
0
0n
null
undefined
NaN
El boolean false
Cadenas de texto vacias
*/


//? Operadores Logicos

// and (&&)

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)


// or (||)

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40)


// not (!)

console.log(5 > 10 && 15 > 20)
console.log(5 > 10 || 15 > 20)

console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))


// Operadores ternearios

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")