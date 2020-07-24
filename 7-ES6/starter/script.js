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

/*
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
*/

// Arrow Functions 2:

/*
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        //set up this keyword so it points to the object and not the window in our callback function
        document.querySelector('.green')
        .addEventListener('click', function() {
            var str = 'This is box number ' + self.position +
            ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();
//calling this method adds the event listener to the html
*/
/*
//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green')
        .addEventListener('click', () =>  {
            var str = 'This is box number ' + this.position +
            ' and it is ' + this.color;
            //with es6, this in a callback refers to object
            alert(str);
        })
    }
}
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        //NOW the this is gonna point back to the window
        document.querySelector('.green')
        .addEventListener('click', () =>  {
            var str = 'This is box number ' + this.position +
            ' and it is ' + this.color;
            //with es6, this in a callback refers to object
            alert(str);
        })
    }
}
box66.clickMe();
*/

//ES5
/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = 
    function(friends) {

        var arr = friends.map(function(el) {
            return this.name + ' is friends with ' + el;
        }.bind(this));
        console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
//new Person('John').myFriends5(friends);

//ES6
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = 
    function(friends) {

        var arr = friends.map(el => 
            `${this.name} is friends with ${el}`
        );
        console.log(arr);
}

new Person('Mike').myFriends6(friends);
*/

////////////
// Destructuring
/*
// ES5
var john = ['John', 26];
var name1 = john[0];
var age1 = john[1];

// ES6
const[name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

//these consts store the data outside of the object using destructuring

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
    //the second return value will be refered to as retirement due to the following code
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/////////////////////
// Arrays

const boxes = document.querySelectorAll('.box');

// ES5
//nodeList to array ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
})


// ES6
//this new method transforms the nodeList into an array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => 
    cur.style.backgroundColor = 'dodgerblue');

    
    /*
//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        //continue skips iteration of loop and then goes on
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);



//ES6
//new function we can use to fin an index instead of map
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

