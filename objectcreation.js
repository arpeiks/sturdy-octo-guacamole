function home() {

    var house = new Object ();
    house.parlour = 'television';
    house.bedroom = 'pillow and mattress';
    house.kitchen = 'plate, spoon, fork and knife';
    house.garage = 'car';
    return house;
}

var household = home();
console.log(household);

/* Above --- create the list of objects first using:   var xyz = new Object(); ,
then insert them in a function */

function studentDetails () {
    var student = {};
    student.name = 'Paulo';
    student.matricno = '1301345';
    student.departmnt = 'Zoology';
    student.gp = '4.58';
    return student;
}

var Zoology = studentDetails();
console.log(Zoology);

/* Above -- create the list of objects first using: var abc = {}; ,
then insert them in a function */


function badSong () {

    this.name = 'Poco Lee';
    this.song = 'Zah Zuh';
    this.yearOfRelease = '2021';
    this.cover = 'Woli 3310';
}

var badOrin = new badSong();
alert('The artist is ' + badOrin.name + '\n The song title is ' + badOrin.song + '\n The year of release is ' + badOrin.yearOfRelease + '\n A funny cover was sang by ' + badOrin.cover);
console.log('The artist is ' + badOrin.name + '\n The song title is ' + badOrin.song + '\n The year of release is ' + badOrin.yearOfRelease + '\n A funny cover was sang by ' + badOrin.cover);


// comment on this later

function studentdetails () {

    this.name = 'Samuel';
    this.matricNo = 1301375;
    this.department = 'Plant Science';
    this.course = 'Chm 201';
    this.testScore = 23;
    this.examScore = 50;
    this.totalScore = 73;
    this.grade = 'A';

}

var samueldetails = new studentdetails ();
console.log(samueldetails);


//comment on this later


var Trainer = {

    name: 'Festinus',
    subjects: ['maths', 'physics', 'chemistry'],
    level: ['SS1', 'SS2'],
    age: 32,
    complexion: 'chocolate brown'
};

setTimeout(function(){console.log(Trainer)}, 10000);

var properties = "";
for(p in Trainer) 
{
    properties+= p + ' : '
}

console.log(properties);
setTimeout(function(){console.log(properties)}, 6000);

delete Trainer.complexion;
console.log(properties);
setTimeout(function(){console.log(properties)}, 8000);

