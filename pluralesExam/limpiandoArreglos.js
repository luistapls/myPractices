// Esta función recibe un arreglo y devuelve un arreglo en el que no hay simbolos especiales ni palabras mayusculas.

const limpiandoArray = (arraySucio) => {
  const devolviendoArray = arraySucio.map((palabra) => {
    const re = /\W/g;
    const editandoPalabra = palabra.replace(re, '');
    return editandoPalabra.toLowerCase();
  });
  return devolviendoArray;
};

// Exportando el modulo.

export default limpiandoArray;
