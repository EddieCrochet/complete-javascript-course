var mark = {
    fullName: 'Mark Lippert',
    mass: 60,
    height: 1.64,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

var john = {
    fullName: 'John Stone',
    mass: 76,
    height: 1.78,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

console.log( john, mark);

mark.calcBMI();
john.calcBMI();

//also possible to RETURN IN THE FUNCTION the respective BMIs
//and instead of comparing th BMI propery, we compare the calc functions

console.log( john, mark);

if (john.BMI > mark.BMI) {
    console.log(john.fullName + " has the higher BMI at " + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log(mark.fullName + " has the higher BMI at " + mark.BMI);
} else {
    console.log(mark.fullName + " and " + john.fullName + " appear to have the same BMI at " + john.BMI);
}