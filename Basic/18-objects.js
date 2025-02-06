//? Objetos

// sintaxis

let person = {
    name: "Alex",
    age: 37,
    alias: "Smart"
}

// Accesos a propiedades

    //Notacion por punto

    console.log(person.name)

    // Notacion por corchetes

    console.log(person["name"])

    // Modificacion

    person.name = "Alex Ceja"
    console.log(person.name)

    console.log(typeof person.age)
    person.age = "37"
    console.log(person.age)
    console.log(typeof person.age)

    // Eliminar propiedades

    delete person.age

    console.log(person)

    // Agregar nueva propiedad

    person.email = "el.ktrin157@gmail.com"

    console.log(person)

    person["age"] = 37

    console.log(person)


// Metodos (funciones)

let person2 = {
    name: " Chris",
    age: 4,
    alias: "niño", 
    walk: function(){
        console.log("El niño camina")
    }
}

person2.walk()

// anidacion de objetos


let person3 = {
    name: "Alex",
    age: 37,
    alias: "Adulto", 
    walk: function(){
        console.log("camina")
    },
    job: {
        name: "Programador",
        exp: 3,
        work: function(){
            console.log(`${person3.name} trabaja de ${this.name}`)
        }
    }
}

console.log(person3)

console.log(person3.job.name)
person3.job.work()


//igualdad de objetos

let person4 = {
    name: "Sthefy",
    alias: "Adulto", 
    email: "lafiaca@gmail.com",
    age: 33,
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Gestora",
        exp: 10,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}


console.log(person)
console.log(person4)


console.log(person == person4)
console.log(person === person4)

console.log(person3.alias == person4.alias)

// Iteracion

for (let key in person4){
    console.log(key + ": " + person4[key])
}


// Funciones como Objetos

function Person (name, age){  // Esta deberia ser una clase 
    this.name = name
    this.age= age
}

let person5 = new Person("Alex",37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)