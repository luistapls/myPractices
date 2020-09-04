/* eslint-disable */
const { operacion } = require("./helper");

const operaciones = (firstValue, secondValue, mathematic) => {
  const value1 = Number(firstValue);
  const value2 = Number(secondValue);
  const valorResultado = operacion(value1, value2, mathematic);

  const data = {
    operador: mathematic,
    endPointOne: value1,
    endPointSecond: value2,
    tieneDecimales: !Number.isInteger(valorResultado),
    esPar: valorResultado % 2 === 0,
    superaLos100: valorResultado > 100,
    endPointOneEsMayorQueEndPointSecond: value1 > value2,
    resultado: valorResultado,
  };
  return data;
};

module.exports = {
  operaciones,
};
