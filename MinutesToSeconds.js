function MinutesToSeconds(mins)
{
    return mins * 60;
}

console.log(MinutesToSeconds(30));

//........................... U S I N G....T H E... A R R O W ...F U N C T I O N ....................


const calcArea = function(radius)
{
    return 3.14 * radius*radius;
}

console.log(calcArea(6));

// Arrow function
// In the arrow function we dont use the " function " keyword
// With one parameter in place you can remove the brackets
//Brackets will be there if there are zero parameters otherwise it cant be an arrow function
// Also when you have one line of return then you can remove the curly braces and have the return value in the same line as the function

const Area =radius=>3.14 *radius*radius;
console.log(Area(20));

//////////////////////////////////////////
//USING AN ARROW FUNCTION TO CONVERT MINUTES TO SECONDS

const convert = (mins) => mins *60;
console.log(convert(20));

