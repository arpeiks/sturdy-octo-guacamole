//this practice is a code for calculating
//named function
function square(x) {
    console.log('the square of x is ' + x*x);
    return x * x;
}

square(2);

console.log(square(2));

var d = square(16);
console.log(d);

setTimeout(function(){console.log(d)}, 6000);

//anonymous function
var square = function (a) {
    return a*a;
}

console.log(square(3));

//new construction
var square = new Function('a', 'return a*a');
console.log(square(5));

//self invoking
(function (a) {
    console.log('the ans is ' +a*a); 
    return a*a;
}) (10);



