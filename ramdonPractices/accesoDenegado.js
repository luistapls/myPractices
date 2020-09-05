var luis = {
    nombre: 'Luis',
    apellido: 'López',
    edad : 15
}
var david = {
    nombre: 'David',
    apellido: 'Lara',
    edad: 20
}
const mayorEdad = ({edad}) => edad >= 18;
const posibilidadAcceso = ({edad}) => !mayorEdad({edad}) ? console.log("Acceso denegado.") : console.log("Acceso permitido");
posibilidadAcceso(luis);
posibilidadAcceso(david);
// hice aqui un cambi
