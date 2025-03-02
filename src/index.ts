//file system 
import * as  http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const txtFile = path.join(__dirname,'data', 'example.txt');
console.log(txtFile);
fs.readFile(txtFile, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Error reading file');
    }
    console.log(data);
}
);

const server = http.createServer((req, res) => {
    res.write('<h2> Hello World!</h2>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// console.log(process.cwd());
// console.log(process.pid);
// console.log(process.env.NODE_ENV);
