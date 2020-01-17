function Question(_question, _answers, _correctAnswer) {
    this.question = _question;
    this.answers = _answers;
    this.correctAnswer = _correctAnswer;
}

var question1 = new Question("What is the best programming language?", 
    new Array("C#", "python", "javascript", "java"), 2);

var question2 = new Question("What is the cutest animal?", 
    new Array("Cat", "python", "dog", "jellyfish"), 0);

var question3 = new Question("What is the best video game?", 
    new Array("Skyrim", "portal", "halo", "doom"), 0);

var questions = new Array(question1, question2, question3);

var ranNum = Math.floor((Math.random() * 3) + 1);
console.log(ranNum);
var ranQues;
if(ranNum == 1) {
    ranQues = question1;
} else if (ranNum == 2) {
    ranQues = question2;
} else {    
    ranQues = question3;
};

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    console.log("0: " + this.answers[0]);
    console.log("1: " + this.answers[1]);
    console.log("2: " + this.answers[2]);
    console.log("3: " + this.answers[3]);
}

ranQues.displayQuestion(ranQues);

var userInput = prompt("Enter the number of your answer to the question here",
 "Right here");

if(userInput == ranQues.correctAnswer) {
    console.log("That is correct");
} else {
    console.log("NOPE. You're wrong and dumb");
}