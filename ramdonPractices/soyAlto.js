function Persona(nombre, apellido, estatura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.estatura = estatura;
}
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}
Persona.prototype.posibilidadAlto = function() {
    console.log(`${this.estatura >= 1.80 ? 'Soy alto. :)' : 'No soy alto. :('}`);
}
var luis = new Persona('Luis', 'López', 1.85);
var maria = new Persona('Maria', 'Du Cuentau', 1.50);
luis.saludar();
luis.posibilidadAlto();
maria.saludar();
maria.posibilidadAlto();