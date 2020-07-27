////////////
//How Idda dunnit (SCHLOPPY)

/*
class Park {
    constructor(name, numberOfTrees, squareFeet, age) {
        this.name = name;
        this.numberOfTrees = numberOfTrees;
        this.squareFeet = squareFeet;
        this.age = age;
    }

    getTreeDensity() {
        var treeDensity = this.numberOfTrees/this.squareFeet;
        return `${this.name} has a tree density of ${treeDensity} trees per square km.`;
    }
}

class Street {
    constructor(name, length, sizeClassification) {
        this.name = name;
        this.length = length;
        this.sizeClassification = sizeClassification;
    }
}

const park1 = new Park('Greene Park', 467, 1023, 43);
const park2 = new Park('Devlin Park', 23, 223, 13);
const park3 = new Park('Kneaele Park', 5437, 3438, 36);
const park4 = new Park('Gourdge Park', 7, 10523, 437);

const st1 = new Street('Toma St', 233, 'huge');
const st2 = new Street('soma St', 23, 'normal');
const st3 = new Street('fona St', 3, 'tiny');
const st4 = new Street('rona St', 2, 'tiny');

var parksArr = [];
parksArr.push(park1, park2, park3, park4);
//console.warn(parksArr);

let sumOfAges = 0;

parksArr.forEach(function(cur) {
    console.log(cur.getTreeDensity());
    sumOfAges += cur.age;
    if(cur.numberOfTrees > 1000) {
        console.log(`${cur.name} has more than 1000 trees.`);
    }
});

var averageAge = sumOfAges/parksArr.length;
console.log(`Our ${parksArr.length} parks have an 
average age of ${averageAge} years.`);

var stArr = [];
stArr.push(st1, st2, st3, st4);
//console.warn(stArr);

let totalLength = 0;

stArr.forEach(function(cur) {
    totalLength += cur.length;
    console.log(`${cur.name} is a ${cur.sizeClassification} street.`);
})

let averageStLength = totalLength/stArr.length;

console.log(`Our ${stArr.length} streets have a total
length of ${totalLength} m, with an average of ${averageStLength} m`);
*/


////////
//How they did it and i should learn to
//cleaner more organized and efficient

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numberOfTrees) {
        super(name, buildYear);
        this.area = area;
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear},
        is a ${classification.get(this.size)} street`);
    }
}

const allParks = [new Park('Green Park', 1986, 0.2, 215),
    new Park('National Park', 1865, 2.9, 4356),
    new Park('Oak Park', 1234, 1.6, 233)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen st', 2009, 2.7, 5),
    new Street('Sunset blvd', 1892, 2.5, 5)];

    function calc(arr) {
        const sum = arr.reduce((prev, cur, index) => 
            prev + cur, 0);
        
        return [sum, sum/arr.length];
    }

    function reportPark(p) {

        console.log('----PARKS REPORT----');

        //density
        p.forEach(el => el.treeDensity());

        //average age
        const ages = p.map(el => new Date().getFullYear() - el.buildYear);
        const[totalAge, averageAge] = calc(ages);
        console.log(`Our ${p.length} parks have an average of ${averageAge} years.`);

        //more than 1000 trees
        const i = p.map(el => el.numberOfTrees)
          .findIndex(el => el> 1000);
        console.log(`${p[i].name} has more than 1000 trees.`);
    }

    function reportStreets(s) {

        const[totalLength, averageStLength] = 
        calc(s.map(el => el.length));
        //maps to the respective return values on the calc function
        console.log(`Our ${s.length} streets have a total length of ${averageStLength} km.`);

        s.forEach(el => el.classifyStreet());    }

    reportPark(allParks);
    reportStreets(allStreets);