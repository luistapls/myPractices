/* Esta funcion da un true si el a;o suministrado es bisiesto. */
const posibilidadBisiesto = year => year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 100 === 0 && year % 400 === 0;

/* Fecha suministrada por el usuario */
const fechaSum = new Date (prompt("Indique una fecha (YY/MM/DD)."));

/* A;o suministrado por el usuario */
const añoFechaSuministrada = fechaSum.getFullYear();

/* contador que indica cuantos años faltan para el siguiente año bisiesto (si el año suministrado es bisiesto el contador es igual a cero.) */
let c1 = 0;

/* Si la fecha suministrada por el usuario es no es bisiesto, este For determina cuantos a;os faltan para que sea bisiesto.  */
for(let contador = 0;!posibilidadBisiesto(añoFechaSuministrada + contador); contador++) {

    c1 = c1 + 1

}

const siAñoEsBisiesto = () => {
    /* Si estas aqui, significa que la fecha suministrada por el usuario es bisiesto. */ 
    /* Hay que saber si dicha fecha pasó el 29 de febrero. Si es asi, el proximo 29 de febrero es dentro de 4 a;os. */

    /* Declaramos e iniciamos un objeto con la fecha 29 de febrero y el año bisiesto suministrado por el usuario */
    /* Esta fecha nos servira para saber si la fecha suministrada por el usuario ha pasado el 29 de febrero o no. */
    let fecha = new Date(añoFechaSuministrada, 1, 29);

    return fecha - fechaSum >= 0 ?

    /* Si el resultado de esta operación es positivo significa que todavia no ha llegado el 29 de febrero.  */
    /* El proximo 29 de febrero es en el mismo a;o que proporciono el usuario. */
    añoFechaSuministrada :

    /* Si el resultado es negativo significa que ya paso el 29 de febrero. El proximo es dentro de 4 a;os. */
    añoFechaSuministrada + 4;
}

const proxAñobisiesto = (añosParaBisiesto) => añosParaBisiesto === 0 ? siAñoEsBisiesto() : añoFechaSuministrada + añosParaBisiesto;

/* Esta const nos indica el siguiente 29 de febrero*/
/* Si el usuario puso una fecha bisiesta, el siguiente 29 de febrero puede ser el mismo a;o que puso el usuario o puede ser dentro de 4 a;os. */
const proxFechaBisiesto = new Date(proxAñobisiesto(c1), 1, 29);

/* Dias que faltan para el proximo 29 de febrero a partir de la fecha suministrada.  */
/* La resta resulta en un valor en milisegundos. Hay que hacer un factor de conversion a dias. */
const diasFaltantes = (proxFechaBisiesto - fechaSum)/(8.64 * (10 ** 7));

/* Zona de impresion por pantalla. */
const impresionDias = (dias) => {
    switch(dias) {
        case 0:
            return 'Hoy es 29 de febrero.';
        case 1:
            return 'Falta un dia para el proximo 29 de febrero. ';
        case 2:
            return 'Faltan dos dias para el proximo 29 de febrero. ';
        case 3:
            return 'Faltan tres dias para el proximo 29 de febrero. ';
        case 4:
            return 'Faltan cuatro dias para el proximo 29 de febrero. ';
        case 5:
            return 'Faltan cinco dias para el proximo 29 de febrero. ';
        case 6:
            return 'Faltan seis dias para el proximo 29 de febrero. ';
        case 7:
            return 'Faltan siete dias para el proximo 29 de febrero. ';
        case 8:
            return 'Faltan ocho dias para el proximo 29 de febrero. ';
        case 9:
            return 'Faltan nueve dias para el proximo 29 de febrero. ';
        case 10:
            return 'Faltan diez dias para el proximo 29 de febrero. ';
    }
}
console.log(`${c1 === 0 ? 'Es bisiesto.': 'No es bisiesto.'} ${diasFaltantes <= 10 ? impresionDias(diasFaltantes) : `Faltan ${diasFaltantes} para el proximo 29 de febrero.`}`)