//Step1: set up the file system

const http = require('http');
const fs = require('fs');
const hmm = require('lodash');


//Step2: create a server, and send a message whenever a request is made
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);


//Step5: using lodash to log a random numer
const randnum = hmm.random(1.1, 2000);
console.log(randnum);

///Step5b: using lodash to log a message
const warning = hmm.once(() => {
    console.log('high voltage!, authorized personel only');
});

warning();
warning();


//Step4a: set header content type, and send the below html files to the browser
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch(req.url) {
    case "/": 
    path += '1index.html';
    break;
    case "/about": 
    path += '1about.html';
    break;
    //to redirect a link.............................
    case "/about-us": 
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
    break;
    //end of the redirect.............................
    default : 
    path += '404.html';
    break;
};


//Step4b: to read an html file and send the html file to the browser
fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        //res.write(data);
        res.end(data);
    }
});

}); 


//Step3: setup a path for handling request and  response through the browser
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});