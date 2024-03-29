///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1965);
//HOISTING only works for function declarations?
function calculateAge(year) {
    console.log(2016 - year);
}

//function expressions like this do not follow hoisting
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
retirement(1990);


//variables
//before returns an undefined instead of an error
console.log(age);
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    //this age gets executed from the foo context
    console.log(age);
}
foo();
//this age gets printed from the global execution context
console.log(age);

*/






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a+d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//below code shows the window in the browser
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 -this.yearOfBirth);

        function innerFunction() {
            //this is a regular function call 
            //so this keyword still points to the window
            //even though it is within a function
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

//METHOD BORROWING
mike.calculateAge = john.calculateAge;
mike.calculateAge();