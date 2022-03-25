//1: set up file system
const http = require('http');
const fs = require('fs');


//2: create a server, and send a message whenever a request is made
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);


//4a: set header content type, and send the below html files to the browser
    res.setHeader('Content-Type', 'text/plain');

    res.write('Welcome to server.js');
    res.end();

//4b: to read a file (specifity the path of the file) and send to the browser
fs.readFile('./views/1index.html', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        res.write(data);
        res.end();
    }
});

});


//3: setup a path for handling request and  response through the browser
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});