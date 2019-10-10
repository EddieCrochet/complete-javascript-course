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

 /*
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
*/

/************
 basic operators
 */

 /*
 var now, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 //Math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

 console.log(now + 2);
console.log(now/10);
 console.log(now * 2);

 // logical operators
var johnOlder = ageJohn > ageMark;
//returns a boolean
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
//returns the type of this variable
*/

/****************
 * operator precedence
 */

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 //The SYNTAX is what turns this into  boolean
 //multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 //grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);
 
 //multiple assignments
 var x, y;
 x = y = ( 3 + 5 ) * 4 - 6;  //8* 4 - 6 // 32 - 6 //  26
 //x and y are BOTH defined this way ...associativity?
 console.log(x, y);

 //more operators
 x = x * 2;
 x *= 2;
 //above 2 are the same
 //and increment just like in C#
 x++