// Lecture: let and const


/*
// ES5

var name5 = 'Jane Smith';
var age5 = 23;
//simply mutating variable
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
//age can cgange so we use let
let age6 = 23;
name6 = 'Jane MIller';
//const are immutible, which we can not change
//gives us an error
console.log(name6);

*/

/*
//ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        //hoisted to undefined below
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + 
        yearOfBirth + 
        ', is now officially allowed to drive a car.');
}

driversLicense5(true);

//ES6
function driversLicense6(passedTest) {

    //firstName is not defined error
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

        if (passedTest) {
            firstName = 'John';
        }

    console.log(firstName + ', born in ' + 
        yearOfBirth + 
        ', is now officially allowed to drive a car.');
}

driversLicense6(true);




var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

//scope makes this i let be 23 but 5 if var
//does not change the var outside the block
console.log(i);

*/

///////////////////////
//Blocks and IIFEs

/*
{
    //this is a block
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(a + b);
//error because the vars are not accessible outside the block
//DATA PRIVACY INSTEAD OF AN IIFE
console.log(c);
//no error because var is always accessible - NO DATA PRIVACY

*/


/*
/////////////////
//Strings

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2019 - year;
}

// ES6
//no more plusses and quotes bla bla
//back ticks

console.log(`This is ${firstName} ${lastName}.
Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('8'));
console.log(`${firstName} `.repeat(5));

*/

////////
// Arrow Functions

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
    //these numbers will be stored in the ages5 array that was just created with the map
});
console.log(ages5);


//ES6
let ages6 = years.map(el => 2016 - el);
//same as above but for ES6!!
console.log(ages6);

//form for multiple arguments
ages6 = years.map((el, index) => `Age element 
${index + 1}: ${2016 - el}.`);
console.log(ages6); 

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element
    ${index + 1}: ${age}.`
});
console.log(ages6);
