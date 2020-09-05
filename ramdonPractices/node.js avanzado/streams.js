const fs = require('fs');
console.time('Tiempo de respuesta');

/* for (let i = 0; i <= 5; i += 1) {
  fs.readFileStream('archivo.txt', 'utf8');
} */

/* for (let i = 0; i <= 5; i += 1) {
  const streamEscritura = fs.createReadStream('archivo.txt', {
    encoding: 'utf-8',
  });
} */

console.timeEnd('Tiempo de respuesta');
