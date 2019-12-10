// Function Constructor

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

var john = new Person('John', 1990, 'teacher')