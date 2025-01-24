// ? if, else if, else


// if (si)

let age1 = 37

if (age1 == 37) {
    //Bloque
    console.log("La edad es 37")
}

// else (si no)

let age2 = 38

if (age2 == 37) {
    console.log('La edad es 37')
} else {
    console.log('La edad no es 37')
}

// else if (si no, si)

let age3 = 40

if (age3 == 37) {
    console.log('La edad es 37')
} else if( age3 < 18 ){
    console.log('Es menor de edad')
}else {
    console.log('La edad no es 37 y no es menor de edad')
} 



//? Operadores Ternearios

// if and else

const message = age1 == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)


//? switch

let day = 7
let dayname

switch (day){
    case 0:
        dayname = 'Lunes'
        break
    case 1:
        dayname = 'Martes'
        break
    case 2:
        dayname = 'Miercoles'
        break
    case 3:
        dayname = 'Jueves'
        break
    case 4:
        dayname = 'Viernes'
        break
    case 5:
        dayname = 'Sabado'
        break
    case 6:
        dayname = 'Domingo'
        break
    default:
        dayname = 'Numero de dia incorrecto'
}

console.log(dayname)