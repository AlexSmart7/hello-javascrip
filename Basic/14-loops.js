//? Loops o Bucles

// for

for (let i = 1; i <= 5; i++ ) {
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8]

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0

while (i < 5) {
    console.log(`Hola while ${i}`)
    i++
}


//do while

i = 6
do {
    console.log(`Hola doWhile ${i}`)
    i++
}while(i < 5)

// for of

myArray = [1,2,3,4,5]
mySet = new Set (['Alex','Ceja','Smart',37,true,'el.ktrin157@gmail.com'])
myMap = new Map([
    ['nombre','Alex'],
    ['email', 'el.ktrin157@gmail.com'],
    ['edad', 37]
])

myString = '¡Hola, JavaScript!'

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}


// Buenas Practicas ( Siempre revisar no tener un bucle infinito)


// continue y break


for (let i = 1; i < 10; i++ ) {
    
    if(i == 5){
        continue
    } else if (i == 8) {
        break
    }
    
    console.log(`Hola ${i}`)
}



