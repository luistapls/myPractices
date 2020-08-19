const http = require('http');

http
  .createServer((request, reply) => {
    reply.writeHead(200, { 'Content-Type': 'text/plain' });
    reply.write('Hello, world! This is another test :D');
    reply.end();
  })
  .listen(3000, 'localhost');

console.log('El servidor se muestra en http://localhost:3000');
