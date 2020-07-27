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

var parksArr = [];
parksArr.push(park1, park2, park3, park4);
//console.warn(parksArr);

let sumOfAges = 0;

parksArr.forEach(function(cur) {
    console.log(cur.getTreeDensity());
    sumOfAges += cur.age;
});

var averageAge = sumOfAges/parksArr.length;
console.log(`Our ${parksArr.length} parks have an 
average age of ${averageAge} years.`);


