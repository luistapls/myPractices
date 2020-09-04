/* eslint-disable*/
const operacion = (firstValue, secondValue, mathematic) => {
    let result;
    switch (mathematic) {
      case 'multiplicar':
        result = firstValue * secondValue;
        break;
      case 'sumar':
        result = firstValue + secondValue;
        break;
      case 'restar':
        result = firstValue - secondValue;
        break;
      case 'dividir':
        result = firstValue / secondValue;
        break;
      default:
    }
    return result;
  };

  module.exports = {
      operacion
  }