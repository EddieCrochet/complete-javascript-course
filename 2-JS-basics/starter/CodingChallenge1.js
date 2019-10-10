var JohnMass, JohnHeight, MarkMass, MarkHeight, MarkBMI, JohnBMI;
JohnHeight = 1.77;
JohnMass = 72;
MarkHeight = 1.63;
MarkMass = 60;

MarkBMI = MarkMass / (MarkHeight * MarkHeight);
JohnBMI = JohnMass / (JohnHeight * JohnHeight);

/*
var MarkHasAHigherBmiThanJohn;
if (MarkBMI > JohnBMI){
    MarkHasAHigherBmiThanJohn = true;
} else {MarkHasAHigherBmiThanJohn = false;}
*/
//in JavaScript the above code can all be put into the one simple line below
var MarkHasAHigherBmiThanJohn = MarkBMI > JohnBMI;

console.log(MarkBMI);
console.log(JohnBMI);
console.log('Is Mark\'s BMI higher than John\'s? ' + MarkHasAHigherBmiThanJohn);