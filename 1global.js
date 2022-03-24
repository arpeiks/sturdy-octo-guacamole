//Step1: set up the global object
console.log(global);


setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('Ayo is a good boy');
}, 1000);


// to display a current directory or file name
console.log(__dirname);
console.log(__filename);



