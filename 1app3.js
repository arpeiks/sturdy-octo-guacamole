 
const express = require('express');
const res = require('express/lib/response');
const { home } = require('nodemon/lib/utils');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views2');


app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: "Yoshi find eggs", snippet: "He is going to fry the eggs"},
        {title: "Iang saw the stars", snippet: "She is counting the stars"},
        {title: "Pam found a bike", snippet: "He rode on the bike yesterday"},
    ];
    res.render('index', { title: "Home", blogs});
})

app.get('/about', (req, res) => {
    res.render('about', { title : "About"});
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title : "Create a new blog"});
})

app.use((req, res) => {
    res.render('404', { title : "404 page"});
});






