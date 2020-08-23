// Importando los modulos creados para resolver el problema.

import arrayPlurales from './devolviendoPlurales';
import limpiandoArray from './limpiandoArreglos';

// La variable 'text' es una cadena de la cual se va a recopilar los plurales que contiene.

const text =
  '¡Hola! Estudio ingenieria quimica y tengo un perro y dos tortugas. Tengo cuatro buenos amigos y me gustan las goticas.';

// Para poder trabajarla mejor se transforma la cadena a un array.

const arrayTextSucio = text.split(' ');

// Se elimina todos los caracteres especiales que contenga cada palabra del arreglo.

const arrayTextLimpio = limpiandoArray(arrayTextSucio);

// Se obtiene un arreglo donde sola hay plurales.

const arraySoloPlurales = arrayPlurales(arrayTextLimpio);

// Imprimiendo por consola el arreglo de plurales.

console.log(arraySoloPlurales);
