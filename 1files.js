// Set up a file system
const fs = require('fs');


// To read a file and display to the console
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});


// This message gets logged to the console, and this happens faster 
// than the above bcoz above is asynchronous (takes time to load)
console.log('last messages pls!');


// To change the content of a file (blog1.txt), and send an alert to the console  
fs.writeFile('./docs/blog1.txt', 'hello eveyone!, we have changed the contents', () => {
    console.log('The content of this document has been altered!');
});

// To change the content of a file (blog2.txt), and send an alert to the console 
fs.writeFile('./docs/blog2.txt', 'hello eveyone!, welcome to my world', () => {
    console.log('The content of this document has been altered!');
});


// To create a directory and send an alert to the console
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log(('a new folder has been created'));
});


