////////////
//How Idda dunnit

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
})

let averageStLength = totalLength/stArr.length;

console.log(`Our ${stArr.length} streets have a total
length of ${totalLength} m, with an average of ${averageStLength} m`);