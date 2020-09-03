const express = require('express');

const app = express();

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

app.set('view engine', 'pug');
// En proceso
app.use('/api/calculator/:value1/:operator/:value2', (req, res, next) => {
  if (req.params.operator !== 'sumar') {
    res.status(404).send('Error :(');
  } else {
    res.status(200);
    next();
  }
});

app.get('/api/calculator/:value1/:operator/:value2', (req, res) => {
  const { operator } = req.params;
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const valorResultado = operacion(value1, value2, operator);
  res.json({
    status: 200,
    content: {
      operador: operator,
      endPointOne: value1,
      endPointSecond: value2,
      tieneDecimales: !Number.isInteger(valorResultado),
      esPar: valorResultado % 2 === 0,
      superaLos100: valorResultado > 100,
      endPointOneEsMayorQueEndPointSecond: value1 > value2,
      resultado: valorResultado,
    },
  });
});

app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});
