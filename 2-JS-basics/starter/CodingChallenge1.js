var JohnMass, JohnHeight, MarkMass, MarkHeight;
JohnHeight = 1.77;
JohnMass = 72;
MarkHeight = 1.63;
MarkMass = 60;

MarkBMI = MarkMass / (MarkHeight * MarkHeight);
JohnBMI = JohnMass / (JohnHeight * JohnHeight);

var MarkHasAHigherBmiThanJohn;
if (MarkBMI > JohnBMI){
    MarkHasAHigherBmiThanJohn = true;
} else {MarkHasAHigherBmiThanJohn = false;}

console.log(MarkBMI);
console.log(JohnBMI);
console.log("Is Mark's BMI higher than John's? " + MarkHasAHigherBmiThanJohn);