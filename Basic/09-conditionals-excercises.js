//? if / else / else if / ternaria

// 1.Imprime por consola tu nombre si una variable toma su valor 

    let nombre = 'Alex Ceja'

    if (nombre == 'Alex Ceja') {
        console.log(nombre)
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos

    let user = 'Alex'
    let pass = 'Aceja'

    if (user == 'Alex' && pass == 'Aceja'){
        console.log('Acceso Correcto')
    }else{
        console.log('Datos Incorrectos')
    }

// 3. Verifica si un numero es positivo, negativo o cero e imprime el mensaje

let numero = -10

if(numero == 0){
    console.log('El numero es 0')

}else if(numero > 0){
    console.log('El numero es mayor a 0')

}else{ 
    console.log('El numero es menor a 0')
}

// 4. Verifica si una persona puede votar o no  e indica cuantos años le faltan

let edad = 21
let indicador = 18
let respuesta

if (edad >= 18 ){
    console.log('Puede votar')
}else{
    faltante = (indicador - edad)
    console.log(`No puede votar porque le faltan ${faltante} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

const tipo = edad >= 18 ? 'Adulto' : 'Menor'
console.log(tipo)

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"

let mesname = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let mes = 6
let estacion

switch (mes) {
        case 0:
        estacion = 'Invierno'
        break
        case 1:
        estacion = 'Invierno' 
        break
        case 2:
        estacion = 'Primavera' 
        break
        case 3:
        estacion = 'Primavera' 
        break
        case 4:
        estacion = 'Primavera' 
        break
        case 5:
        estacion = 'Verano' 
        break
        case 6:
        estacion = 'Verano' 
        break
        case 7:
        estacion = 'Verano' 
        break
        case 8:
        estacion = 'Otoño' 
        break
        case 9:
        estacion = 'Otoño' 
        break
        case 10:
        estacion = 'Otoño' 
        break
        case 11:
        estacion = 'Invierno' 
        break
        default:
        estacion = 'Incorrecto'
}

console.log(estacion)

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior switch

switch (mes){
    case 0:
        dias = 31
        break
        case 1:
        dias = 28 
        break
        case 2:
        dias = 31
        break
        case 3:
        dias = 30
        break
        case 4:
        dias = 31
        break
        case 5:
        dias = 30
        break
        case 6:
        dias = 31
        break
        case 7:
        dias = 31 
        break
        case 8:
        dias = 30 
        break
        case 9:
        dias = 31 
        break
        case 10:
        dias = 30 
        break
        case 11:
        dias = 31 
        break
        default:
        dias = 0
}

console.log(dias)

estacion == 'Incorrecto' ? console.log('El indicador es incorrecto') : console.log(`El mes de ${mesname[mes]} tiene ${dias} dias y es ${estacion}`)


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 'Italiano'
let saludo

switch (idioma){
    case 'Español':
        saludo = 'Hola'
        break 
    case 'Ingles':
        saludo = 'Hello'
        break
    case 'Italiano':
        saludo = 'Ciao'
        break
    case 'Aleman':
        saludo = 'Hallo'
        break
    case 'Frances':
        saludo = 'Bonjour'
        break
    default:
        saludo = 'Desconocido'
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
