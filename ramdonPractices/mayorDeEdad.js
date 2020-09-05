var luis = {
    nombre: 'Luis',
    apellido: 'López',
    edad : 21
}
var david = {
    nombre: 'David',
    apellido: 'Lara',
    edad: 20
}
function mayorDeEdad({edad,nombre}){console.log(`${nombre} es ${edad >= 18 ? 'mayor' : 'menor'} de edad`);
}
mayorDeEdad(luis);
mayorDeEdad(david);