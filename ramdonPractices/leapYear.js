function bisiesto(año) {
    /* Para que un año sea bisiesto tiene que ser divisible por 4. Es decir, el residuo de la división por 4 es igual a 0 */
    if (año % 4 === 0) {
        /* Pero, si tambien es divisible por 100 no es bisiesto */
        if (año % 100 === 0) {
            /* A menos que tambien sea divisible por 400. En ese caso, es bisiesto */
            if (año % 400 === 0) {
                console.log("bisiesto");
            }
            /* Si es divisible por 100, pero no por 400, no es bisiesto */
            else {
                console.log("no bisiesto");
            }
        }
        /* Si es divisible por 4, pero no por 100, es bisiesto */
        else {
            console.log("bisiesto");
        }
    }
    /* Si el residuo de la división por 4 no es igual a 0, el año no es bisiesto */
    else {
        console.log("no bisiesto");
    }
}