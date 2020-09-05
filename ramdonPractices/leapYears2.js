var c1 = 0; 
var year = parseInt(prompt('Indique el año'));
var posibilidadBisiesto = year => year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false: true : false;
while(!posibilidadBisiesto(year + c1)) {c1++;}
console.log(posibilidadBisiesto(year) ? `El año ${year} es bisiesto`: `El año ${year} no es bisiesto. Faltan ${c1 * 365} dias para que estemos en otro año bisiesto.` );
