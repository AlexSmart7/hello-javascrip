//? Funciones

// Simple
function myfunc (){
    console.log('Hello, Function')
}


for(let i = 0; i < 3 ; i++ ){
    myfunc()
}


// Con parametros

function myFunctionParam (name){
    console.log(`Hello, ${name}`)
}

myFunctionParam('Alex')
myFunctionParam('Ceja')


// Funciones Anonimas

const myfunc2 = function(name){
    console.log(`Hello, ${name}`)
}

myfunc2("Alex Ceja") 



// Arrow function

myfunc3 = (name) => {
    console.log(`Hello, ${name}`)
}

myfunc3('Chris')


// Parametros

function sum (a, b){
    console.log(a + b)
}

sum(5, 10)

function defaultSum (a = 0, b = 0 ){
    console.log(a + b)
}

//Por defectos
defaultSum(5,15)
defaultSum(b = 5)


// Retorno de valores

function mult(a,b){
    return a * b
}

mult(5,10)

let result = mult(5,5)
console.log(result)

// Funciones anidadas

function extern () {
    console.log("Funcion Externa")
    function inter () {
        console.log("Funcion Interna")
    }

    inter()
}

extern()


// Funciones de Orden Superior

function applyFunc (func, param){
    func(param)
}

applyFunc(myfunc3,"Funcion de Orden superior")


// forEach

myArray = [1,2,3,4,5]

mySet = new Set (['Alex','Ceja','Smart',37,true,'el.ktrin157@gmail.com'])

myMap = new Map([
    ['nombre','Alex'],
    ['email', 'el.ktrin157@gmail.com'],
    ['edad', 37]
])


myArray.forEach(function(value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))