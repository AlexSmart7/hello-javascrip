//? Programacion Asincrona

//console.log("Inicio")

//for (let i = 0; i < 1000000000; i++){ }

//console.log("Fin")


//* Event Loop ( Bucle de Eventos)

//* Componmentes del Even Loop
// - Call Stack (Pila de ejecucion) 
// - Web APIs (Apis del navegador) o Node.js
// - Task Queue (Cola de tareas) y microtaskQueue

//* Flujo del even Loop:
// 1. Call Stack
// 2. Operaciones asincronas -> Web APIs o Node.js
// 3. Operacion termina -> La coloca en la Task Queue o MicrotaskQueue
// 4. Si el Call Stack esta vacio -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

//* Codigo asincrono 

// - Call Backs

console.log("Inicio")

setTimeout(() =>{
    console.log("Esto se ejecuta despues de 2 segundos")
}, 2000 )

console.log("Fin")


// -Problema: Callback Hell

function step1(Callback){
    setTimeout(() =>{
        console.log("Paso 1 completado")
        Callback()
    },1000)
}


function step2(Callback){
    setTimeout(() =>{
        console.log("Paso 2 completado")
        Callback()
    },1000)
}


function step3(Callback){
    setTimeout(() =>{
        console.log("Paso 3 completado")
        Callback()
    },1000)
}


step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("Todos los pasos completados")
        })
    })
})

// -Promesas

const promise = new Promise((resolve,reject)=>{

})

promise
    .then(result => {
    console.log(result)
})
    .catch(error => {
        console.log(result)
    })

