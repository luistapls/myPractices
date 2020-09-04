/* eslint-disable*/
const isNumeroCalculadora = () => (req, res, next) => {
  const { value1, value2, operator } = req.params;

  // Expresion regular para saber si operator es un operador matematico valido.
  const operatorRegExp = /\bsumar\b|\brestar\b|\bmultiplicar\b|\bdividir\b/;

  // Si los valores ingresados son números, verifyValue retornará <false>.
  const verifyValue1 = isNaN(Number(value1));
  const verifyValue2 = isNaN(Number(value2));

  return verifyValue1 || verifyValue2 // Si uno de los value ingresados es NaN, retornará un error. Ambos verifyValue tienen que ser <false>.
    ? res.status(404).json({
        statusCode: 404,
        isNaNEndpoint1: verifyValue1,
        isNaNEndpoint2: verifyValue2,
      })
    : operatorRegExp.test(operator) // Si ambos value son números, solo queda chequear el operator usando la expresión regular previamente diseñada.
    ? next() // Si los value y el operator cumplen las condiciones, se continua trabajando.
    : res.status(404).json({
        // Si el operator no es valido, lanza un error, el cual indica el valor del operator que fue ingresado.
        statusCode: 404,
        mathematicOperator: operator,
      });
};

module.exports = {
  isNumeroCalculadora,
};
