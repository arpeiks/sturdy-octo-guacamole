 
const express = require('express');
const res = require('express/lib/response');
const { home } = require('nodemon/lib/utils');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views2');


app.listen(3000);


//this is a middleware function (app.use)
app.use((req, res, next ) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});
//if next is not used in the above, it blocks all other codes below and prevent them from running


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


//this is a middleware function (app.use)
app.use((req, res, next ) => {
    console.log('log the next request');
    next();
});
//if next is not used in the above, it blocks all other codes below and prevent them from running


app.get('/blogs/create', (req, res) => {
    res.render('create', { title : "Create a new blog"});
})

app.use((req, res) => {
    res.render('404', { title : "404 page"});
});






