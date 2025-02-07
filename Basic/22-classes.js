//? Clases

class Person {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Alex", 37, "Smart")
let person2 = new Person("Chris", 4, "Nene")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre",age = 0, alias = "sin Alias" ){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Santy",12)

console.log(person3)


// Acceso a propiedades

console.log(person3.name)
console.log(person3["alias"])

person3.alias = "Curry"

console.log(person3)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk (){
        console.log(`${this.name} camina`)
    }

}

let person4 = new PersonWithMethod("Diego",17,"Champion")
person4.walk()

// Propiedades Privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }

}

let person5 = new PrivatePerson("Alex",37,"Smart","IBA253907")
console.log(person5)

// Getters Setters

class GetPerson {

    #name
    #age
    #alias 
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank (newbank){
        this.#bank = newbank
    }

    get bank(){
        return this.#bank
    }

}

let person6 = new GetPerson("Alex",37,"Smart","IBM253907")
console.log(person6)

console.log(person6.name)

person6.bank = "new IBA123456"

console.log(person6)

console.log(person6.bank)


////////////////////? Herencias


class Animal {

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido")
    }

}

class Dog extends Animal{

    sound(){
            console.log("Guau!")
    }

    run (){
        console.log("El perro corre")
    }

}

class Fish extends Animal{

    constructor(name,size){
        super(name)
        this.size = size
    }

    swim (){
        console.log("El Pez nada")
    }

}


let myDog = new Dog("Rocky")

myDog.run()
myDog.sound()

let myFish = new Fish("Slash",10)
myFish.swim()
myFish.sound()

console.log(myDog)
console.log(myFish)


/// Metodos Estaticos


class MathOperations {
    
     static sum (a, b){
        return a + b
    } 

}

console.log(MathOperations.sum(5,10))