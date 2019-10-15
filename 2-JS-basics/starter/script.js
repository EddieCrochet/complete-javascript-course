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

 /*
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
 */

 /*************
  * if / else statements
  */

  /*
  var firstName = 'John';
  var civilStatus = 'single';

  if(civilStatus === 'married'){
      console.log(firstName + ' is married.');
  } else {
      console.log(firstName + ' will hopefully marry soon.');
  }

  var isMarried = true;
  if (isMarried ) {
      console.log(firstName + ' is married!');
  } else {
      console.log(firstName + ' will hopefully marry soon! :)');
  }
  */

  /**********
   * BOOLEAN LOGIC
   */

   /*
   var firstName  = 'John';
   var age = 16;

   if (age < 13) {
       console.log(firstName + ' is a boy.');
   } else if (age >= 13 && age < 20) { //between 13 and 20
        console.log(firstName + ' is a teenager.');
   } else if (age >= 20 && age < 30) {
        console.log(firstName + ' Is a young man.');
   } else {
       console.log(firstName + ' is a man.');
   }
   */

  /****************** 
   * ternary operator and switch statement
  */

  //TERNARY
  /*
  var firstName = 'John';
  var age = 16;

  age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);
  
  //and compared to an if/else statement

  if ( age >= 18){
      var drink = 'beer';
  } else {
      var drink = 'juice';
  }

  //SWITCH STATEMENT

  var job = 'teacher';
  switch (job){
    case 'teacher':
    case 'instrctor':  
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':  
        console.log(firstName + ' drives an Uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break
    default:
        console.log(firstName + ' does something else.');
  }

  //from the boolean logic exercise
  switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
  }
*/
/***********
 * TRUTHY AND FALSY VALUES
 */

 // falsy values: undefined, null, 0, '', NAN

 /*
var height;

height = 23;

//common pattern to check if variable is defined
if (height || height === 0){
    console.log('variable is defined.');
} else {
    console.log('variable has NOT been defined.');
}


//equality operators
if (height =='23'){
    console.log('The == operator does type coercion!');
}
*/

/************
 * FUNCTIONS
 */

 /*
  function calculateAge(birthYear){
      return 2018 - birthYear;
  }

  var ageJohn = calculateAge(1990);
  var ageMike = calculateAge(1945);
  var ageJane = calculateAge(1773);
  console.log(ageJohn, ageMike, ageJane);

  function yearsUntilRetirement(year, firstName){
      var age = calculateAge(year);
      var retirement = 65 - age;
      if (retirement > 0){
        console.log(firstName + ' retires in ' +  retirement + ' years.');
      } else {
          console.log(firstName + ' is already retired!');
      }
  }

  yearsUntilRetirement(1990, 'John');
  yearsUntilRetirement(1954, 'Mike');
  yearsUntilRetirement(1932, 'Jane');
  */

  /********
   * FUNCTION STATEMENTS AND EXPRESSIONS
   */

   //function declaration
   //function whatDoYouDo(job, firstName) {};

   //function expression - assign a function to a variable
   var whatDoYouDo = function(job, firstName){
        switch(job) {
            case 'teacher':
                return firstName + ' teaches kids code.';
            case 'driver':
                return firstName + ' drives for money.';
            case 'designer':
                return firstName + ' makes pretty websites.'
            default:
                return firstName + ' does something else.';
        }
   }

   console.log(whatDoYouDo('teacher', 'John'));
   console.log(whatDoYouDo('designer', 'Jane'));
   console.log(whatDoYouDo('retired', 'Mark'));