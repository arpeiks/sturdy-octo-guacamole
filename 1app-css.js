 
const express = require('express');
const res = require('express/lib/response');
const { home } = require('nodemon/lib/utils');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views2');


app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: "Introduction", snippet: "Welcome to my website, i am writing this code using a tutorial " },
        {title: "Beginner", snippet: "I started learning node and express few weeks back " },
        {title: "Assistance/Help", snippet: "Kindly assist/help in any little way you can. Thank you. "},
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






