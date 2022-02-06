// this is a comment

//arithmetic opertors
//console.log(2+3);


//declaring a value, and executing the output
/*

var diff = 3-2;
console.log('diff: ' +diff);
diff++;
console.log('new diff: ' +diff++);

var product = 7*6;
console.log('product: ' +product);
console.log('new product: ' +product--);

var div = 5/2;
console.log('div: ' +div);

var mod = 5%3;
console.log('mod: ' +mod);

*/

//comment multiple line using /* and */

//assignment operators

/*

var x = 9;
x+=8; 
console.log(x);

*/

//comparison opertors

/*

var x = 9;
var y = '9'; 
if (x === y) {
console.log('balanciaga!');
} else {
console.log('is not balance!');
}

*/

//boolean operators

//using AND operator

/*
var y1 = 5;
var y2 = 10;
var y3 = 15;

if (y1 == y2-5 && y3 == y1*3) {
    console.log('Good');
} else {
    console.log('Bad');
}

*/

//using OR operator

/*
var y1 = 5;
var y2 = 10;
var y3 = 15;

if (!(y1 == y2-5) || !(y3 == y1*3)) {
    console.log('Good');
} else {
    console.log('Bad');
}

//Ternary operators
//console.log( condition ? true:false )

console.log( 5<6 ? true:false);

*/

//if-else-if-else          conditional statement

/*
jambscore = prompt('Enter your jamb score');
jambscore = parseInt(jambscore);

if (jambscore >= 320 && jambscore <= 400) {
    console.log('You have been automatically admitted by Jamb. Your parents must be very proud of you. Good job!');
} else if (jambscore >= 200 && jambscore < 320) {
    console.log('Register for the post-utme of your selected institution. Best of luck!')
} else if (jambscore > 60 && jambscore <=199) {
    console.log('Try again next year or apply to a polytechnic. You deserve to be beaten for not trying hard.');
} else if (jambscore > 400) {
    console.log('Invalid')
} else {
    console.log('You was killed for failing woefully.  Ha ha ha, very funny code.');
}
*/

//Switch                        conditional statement

/*
var height = parseFloat(prompt('Enter your height in cetimeters'));
switch (height) {

    case 1: console.log('height is 5.6' + ' cm');
        break;
    case 2.5: console.log('height is 2.5' + ' cm');
        break;
    case 3.567: console.log('height is 3.567' + ' cm');
        break;
    case 4.5: console.log('height is 4.5' + ' cm');
        break;
    default: console.log('your height is ' + height + ' cm');
}
*/

//For loop
/*
var subjects = ['biology', 'physics', 'chemistry'];
var marks = new Array();
var num1;

for ( var y=0; y<subjects.length; y++) {
    num1 = parseFloat(prompt('enter marks for each subject '+ subjects[y]));
    marks[y]=num1;
}
for ( m in marks){
    console.log(marks[m]);
}
*/

//while loop and do while loop























