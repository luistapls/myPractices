var contador = 0;

var probabilidadLlover = () => Math.random() <= 0.25;
do {
    contador++;
} while(!probabilidadLlover());

console.log(`Fui a ver si llovía ${contador} ${contador === 1 ? 'vez' : 'veces'}`);