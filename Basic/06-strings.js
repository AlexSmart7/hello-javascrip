//? Strings

    let myName = "Alex"

    let greeting = "Hola, " + myName + "!"

    console.log(greeting)
    console.log(typeof greeting)

//? Longitud
    
    console.log(greeting.length)

//? Acceso a Caracteres
    
    console.log(greeting[0])
    console.log(greeting[6])


//? Metodos comunes

    console.log(greeting.toUpperCase())
    console.log(greeting.toLowerCase())
    console.log(greeting.indexOf("Alex"))
    console.log(greeting.indexOf("Ceja"))
    console.log(greeting.includes("Alex"))
    console.log(greeting.includes("Ceja"))
    console.log(greeting.slice(0,10))
    console.log(greeting.replace("Alex", "Ceja"))


//? Template literals (Plantillas literales)    


    let message = `Hola, este es mi 
curso de JavaScript`

    console.log(message)

    let email = 'ajunior7.ac@gmail.com'

    console.log(`Hola, mi nombre es ${myName} y mi email es ${email}!`)