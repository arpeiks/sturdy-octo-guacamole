//NAMED FUNCTIONS

/*
function solveMaths(a,b,c) {
    return a*b/c;
}

var d = solveMaths(5,6,7);
console.log('solution = ' +d);

var e = solveMaths(32,2,8);
console.log('solution = ' +e);

console.log(solveMaths(22,4,8));
*/

//ANONOYMOUS FUCNTIONS (anonymous/settimeout)

/*
var multiply = function(a,b,c) {
    console.log('ans =');
    return a*b*c;
}

multiply(5,6,7);

var d = multiply(5,6,7);
console.log('ans = ' +d);

setTimeout(multiply, 3000);

setTimeout(function(){console.log('the answer is ' +d)}, 5000);
setTimeout(function(){console.log('ans = ' +d)}, 5000);

setTimeout(function(){console.log('the answer should be ' +d)}, 10000);
*/


//CONSTRUCTORS (when you use keyword 'new')

/*
var solve = new Function('a','b','c','console.log("ans = ");return a*b*c');
solve(5,6,7);

var d = solve(2,3,10);
console.log('the result is ' +d);

setTimeout(function(){console.log('the answer is equal to ' +d)}, 3000);
*/


//SELF INVOKING FUNCTIONS (anonymous functon in bracket)
/* 
(function (a,b,c) {
     console.log('the result is ');
     return a/b*c;
 }) (8,2,6);
*/

