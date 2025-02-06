//? Ejercicios con objetos 


// 1. Crea un objeto con 3 propiedades

let perro = {
    nombre: "Rocky",
    raza: "BullDog",
    color: "Blanco y Cafe"
}
// 2. Accede y muestra el valor
console.log(perro.raza)
// 3. Agrega una nueva propiedad 

perro.tipo = "cachorro"
console.log(perro)

// 4. Elimina una de las 3 primeras propiedades

delete perro.color
console.log(perro)

// 5. Agrega una funcion e invocala

perro.omatopeya = function(){
    console.log("El perro ladra")
}
    perro.omatopeya()

// 6. Itera las propiedades del objeto

for (let key in perro){
    console.log(key + ": " + perro[key])
}

// 7. Crea un objeto anidado

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

equipo.mascota = "BullDog"

// 8. Accede y muetra el valor  de las propiedades anidadas

console.log(equipo)
console.log(equipo.jugadores.jugador7)
equipo.jugadores.st()

// 9. Comprueba si los 2 objetos creados son iguales

console.log(perro === equipo)


// 10. Comprueba si 2 propiedades diferentes son iguales 

console.log(perro.raza == equipo.mascota)