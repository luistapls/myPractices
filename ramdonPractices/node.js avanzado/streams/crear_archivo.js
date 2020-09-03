const fs = require('fs');
const archivo = fs.createWriteStream('archivo.txt');

for (let i = 0; i <= 1e6; i += 1) {
  archivo.write('Hola, me gustan los gatos.');
}

archivo.end();
