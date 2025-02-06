//? Destructuracion y Propagacion


let myArray = [1,2,3,4,5]

let person = {
    name: "Alex",
    age: "37",
    alias: "Smart"
}

let myValue = myArray[2]
console.log(myValue)

let myName = person.name
console.log(myName)


// Destructuracion

// sintaxis array

let [myValue0, myValue1,myValue2,myValue3,myValue4,myValue5] = myArray 
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)

// sintaxis arrays con valores predeterminados

let [myValue6 = 0, myValue7 = 0,myValue8 = 0,myValue9 = 0,myValue10 = 0,myValue11 = 0] = myArray 
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)
console.log(myValue11)


// Ignorar Elementos

let [myValue12, , ,myValue15,myValue16,myValue17] = myArray 
console.log(myValue12)
console.log(myValue15)


// Sintaxis Objetos

let {name,age,alias} = person

console.log(name)
console.log(age)
console.log(alias)

// sintaxis objetos con valores predeterminados

let {name2,age2,alias2,email="elktrin157@gmail.com"} = person 
console.log(name2)  // No existe
console.log(alias2) // No existe
console.log(email)  // No existe

// sintaxis objetos con nuevos nombres de variables

let {name: name3,age: age3,alias: alias3} = person

console.log(name3)
console.log(age3)
console.log(alias3)

// Destructuracion de objetos anidados

let equipo = {
    nombre: "Atletico San Quintin",
    categoria: "Libre",
    tipo: "Fut7",
    Rol: "Nocturna",
    jugadoresPermitidos: 10,
    jugadores: {
        jugador1: "Panchito Lopez",
        jugador2: "Casimiro Ruiz",
        jugador3: "Jacinto Cruz",
        jugador4: "Poncho Gonzalez",
        jugador5: "Teofilo Guzman",
        jugador6: "Narciso Hernandez",
        jugador7: "Filomeno Diaz",
        jugador8: "Nicandro Perez",
        jugador9: "Mariano de Jesus",
        jugador10: "Cirilo Dominguez",
        st: function(){
            console.log(`${equipo.nombre} se encuentra completo`)
        }
    }
}


let {nombre: nombreEquipo, jugadores: {jugador7: capitan}} = equipo

console.log(nombreEquipo)
console.log(capitan)

//Programacion (...)

let myArray2 = [...myArray]

console.log(myArray2)

let myArray3 = [...myArray,6,7]

console.log(myArray3)


// Combinacion de Arrays

let myArray4 = [...myArray2,...myArray3]

console.log(myArray4)

// Sintaxis Objetos

let person4 = {...person,email:"elktrin157@gmail.com"}
console.log(person4)

// copia de objetos

let person5 = {...person}
console.log(person5)

