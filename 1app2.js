 //another way to read files and send to the browser using render

const express = require('express');
const res = require('express/lib/response');
const { home } = require('nodemon/lib/utils');


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views2');


app.listen(3000);

app.get('/', (req, res) => {
    res.render('index', { title: "Home"});
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

//Note: Content of index.ejs was changed, so this code will give an error. The below code was added to index.ejs

// <% if (blogs.length > 0) { %>
    
//     <%   blogs.forEach(blog => { %>
//            <h3 class="title"><%=blog.title%></h3>
//        <p class="snippet"><%=blog.snippet%><</p>

//     <% }) %> 

//    <% } %>






