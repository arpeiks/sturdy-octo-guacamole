var add = (function(){
    var addValue = 0;
    return function () { return addValue += 1;}
}) ();

console.log(add);

