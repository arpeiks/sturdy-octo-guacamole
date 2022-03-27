//1: set up the express 
const express = require('express');
const res = require('express/lib/response');


//2: Create the express app
const app = express();

//3: Listen for request
app.listen(3000);


//4a: send a message (text) to the localhost
app.get('/', (req, res) => {
    res.send('<p>home page</p>');
    
});

app.get('/about', (req, res) => {
    res.send('<p>about page</p>');
    
});

app.get('/contact', (req, res) => {
    res.send('<p>contact us</p>');

});


//NOTE: comment code in 4a before the code in 4b can rum

//4b: read and send a file to the localhost
app.get('/', (req, res) => {
    res.sendFile('./views/1index.html', {root: __dirname});
    
});

app.get('/about', (req, res) => {
    res.sendFile('./views/1about.html', {root: __dirname});
    
});

//5: to redirect 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


//6: to setup a 404 page
app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname});
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    
});
//NOTE: the 404 page stops all other codes below it, hence, you should put it at the end of the code..










