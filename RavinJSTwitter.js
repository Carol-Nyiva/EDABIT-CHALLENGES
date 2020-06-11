var x = 3;
var y = 6;

console.log(1%0 + x + y);


//............ SOMETHING ABOUT " LEXIAL SCOPE ", "CLOSURE " AND "HOISTING" WITH THIS CODE I GOT FROM TWITTER....

// ..... I WILL STUDY THE CONCEPTS AND GET BACK TO THIS QUESTION / CODE TO ANSWER IT. OR BETTER YET UNDERSTAND HOW IT WORKS ..

function greet(yourgreet)
{
    return function(name)
    {
console.log(yourgreet + " " + name + "!");
}
}

const salute = greet("Hello");
salute()
salute("Catalinm Pit");

// ....... 11TH JUNE TWITTER RAVIN EXAMPLE

var a = 3;

if (a===3)
{
    var a=2;
}
console.log(a);