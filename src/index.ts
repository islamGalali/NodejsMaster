 import * as http from 'http';

//  const serverProd = http.createServer((req, res) => {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//  });


 const serverDev = http.createServer((req : http.IncomingMessage, res : http.ServerResponse) => {
    res.write('Hello World');

    res.end();
 });

 const PORT = 5000;
 serverDev.listen(5000, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
     });

