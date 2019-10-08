/************
 variable and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = "John and Mark";

/*
this wont work
var if = 23;
*/

/*************
 variable mutation and type coercion
 */

var firstName = 'John';
var age = 28;

console.log(firstName +' '+ age);

//apparently this method is cleaner code
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '+
    job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';

alert(firstName + ' is a ' + age + ' year old '+
    job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);