//? Excepcion

// Produce una excepcion
 let myObject
//console.log(myObject.email)


//! Tratamiento de Errores

// Try-Catch


try{
    //  Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecucion sin errores")
} catch {
    // Bloque de errores
    console.log("Se ha producido un error")
}


// Capturar el error

try{
    console.log(myObject.email)
}catch (error){
    console.log("Se ha producido un error:",error.message)
}


// finally

try{
    console.log(myObject.email)
}catch (error){
    console.log("Se ha producido un error:",error.message)
}finally{
    console.log("Este codigo se ejecuta siempre")
}

// Lanzamiento de Errores

// throw

// throw new Error("Se ha producido un error")

function sum(a, b){
    if (typeof a !== Number  || typeof b !== Number){
        console.log("No se pueden sumar estas propiedades")
    }
    return a + b
}

console.log(sum(5,10))

