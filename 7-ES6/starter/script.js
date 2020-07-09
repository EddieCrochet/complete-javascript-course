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