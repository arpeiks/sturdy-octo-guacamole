//Step1: set up the file system
const http = require('http');
const fs = require('fs');


//Step2: create a server, and send a message whenever a request is made
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);


//Step4a: set header content type, and send a message to the browser
    res.setHeader('Content-Type', 'text/plain');

    res.write('Welcome to server.js');
    res.end();

//Step4b: to send an html file to the browser
fs.readFile('./views/1index.html', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        res.write(data);
        res.end();
    }
});

});


//Step3: setup a path for handling request and  response through the browser
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});