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

    var ages = arrayCalc(years, calculateAge);
    console.log(ages);
    var fullAges = arrCalc(ages, isLegal);
    console.log(fullAges);