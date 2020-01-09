// Function Constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//this is the function constructor 
//we can now use it to make objects
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//this way you dan't have to load every method
//into the constructor and into every objects
//yet  every created object has access to the prototype methods
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create

//different from using function constructors
/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: { value: 'designer' }
    });
    */

    //Primitives vs Objects

    /*
    //primitives
    var a =23;
    var b = a;
    a = 46;
    console.log(a, b);

    //objects
    var obj1 = {
        name: 'John',
        age: 26
    };
    var obj2 = obj1;
    obj1.age = 30;
    //both log 30 because obj2 is not a new object
    //it is just a new reference
    console.log(obj1.age);
    console.log(obj2.age);

    //functions
    var age = 27;
    var obj = {
        name: 'Jonas',
        city: 'Lisbon'
    };

    function change(a, b) {
        a = 30;
        b.city = 'San Francisco';
    }

    change(age, obj);

    console.log(age);
    console.log(obj.city);
    */

    ///////////////
    // Passing Functions as Arguments

    /*
    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn) {
        var arrRe = [];
        for(var i = 0; i < arr.length; i++) {
            arr.push(fn(arr[i]));
        }
        return arrRes;
    }

    function calculateAge(el) {
        return 2019 - el;
    }

    function isLegal(el) {
        return el >= 18;
    }

    function maxHeartRate(el) {
        if (el >= 18 && el <= 81) {
            return Math.round(206.9 - (0.67 * el));
        } else {
            return -1;
        }
    }

    var ages = arrayCalc(years, calculateAge);
    var fullAges = arrCalc(ages, isLegal);
    var rates = arrayCalc(ages, max)
    
    console.log(ages);
    console.log(fullAges);
    console.log(rates);
    */

    //////////////
    // Functions returning functions

    /*
    function interviewQuestion(job) {
        if ( job === 'designer') {
            return function(name) {
                console.log(name + 
                    ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log(name + 
                    'what subject do you teach?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name +
                ' what do you do?');
            }
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');

    teacherQuestion('John');
    designerQuestion('John');
    designerQuestion('jane');
    designerQuestion('Mark');
    designerQuestion('Mike');

    //pass teacher to interviewQuestion
    //then pass mark to that anon function
    interviewQuestion('teacher')('Mark');
    */

    //////////////
    // IIFE

    /*
    function game() { 
        var score = Math.random() * 10;
        console.log(score>= 5);
    }
    game();
    */

    /*
    (function () {
        var score = Math.random() * 10;
        console.log(score>= 5);
    })();

    //console.log(score);

    (function (goodluck) {
        var score = Math.random() * 10;
        console.log(score>= 5 - goodluck);
    })(5);
    */
  
    //////////////////
    // closures:::

    function retirement(retirementAge) {
        var a = ' years left until retirement.';
        return function(yearOfBirth) {
            var age = 2019 - yearOfBirth;
            console.log((retirementAge - age) + a)
        }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);

    retirementGermany(1990);
    retirementIceland(1990);
    retirementUS(1990);

    //retirement(66)(1990);

    /*
 function interviewQuestion(job) {
        if ( job === 'designer') {
            return function(name) {
                console.log(name + 
                    ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log(name + 
                    'what subject do you teach?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name +
                ' what do you do?');
            }
        }
    }
    */

//rewrite the above, but using closures
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + 
                ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + 
                ', what subject do you teach?');
        } else {
            console.log('Hello ' + name +
                ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('Mark');
*/

///////////////
//Bind, call, and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style ==='friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
}

john.presentation('friendly', 'morning');