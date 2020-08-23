// Lista de palabras que terminan en 's' pero las cuales no se consideran plurales.

const articulos = (posibleArticulo) => {
  switch (posibleArticulo) {
    case 'los':
      return true;
    case 'las':
      return true;
    case 'unos':
      return true;
    case 'unas':
      return true;
    case 'dos':
      return true;
    case 'tres':
      return true;
    default:
      return false;
  }
};

// Retorna un true si la palabra suministrada termina en 's'.

const terminaEnS = (palabra) => {
  const i = palabra.length - 1;
  return palabra[i] === 's';
};

// Retornando un arreglo donde solo hay plurales a partir de un arreglo que contiene todo tipo de palabras.

const arrayPlurales = (array) => {
  const arrayTerminenS = array.filter((palabra) => terminaEnS(palabra));
  const arrayDePlurales = arrayTerminenS.filter(
    (palabra) => !articulos(palabra)
  );
  return arrayDePlurales;
};

// Exportando el modulo.

export default arrayPlurales;
