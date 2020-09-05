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

function imprimirNombreYEdad({nombre, edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}
imprimirNombreYEdad(luis);
imprimirNombreYEdad(david);