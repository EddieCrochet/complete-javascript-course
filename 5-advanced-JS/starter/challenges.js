 

///MY SOLUTION
//could not figure out what tey wanted with the expert edition

/*
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


//if(ranNum == 1) {
  //  ranQues = question1;
//} else if (ranNum == 2) {
  //  ranQues = question2;
//} else {    
   // ranQues = question3;
//};

//dont need this. use the array, you dingus

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    console.log("0: " + this.answers[0]);
    console.log("1: " + this.answers[1]);
    console.log("2: " + this.answers[2]);
    console.log("3: " + this.answers[3]);
}

questions[ranNum].displayQuestion();
//ranQues.displayQuestion(ranQues);
//no

var userInput = prompt("Enter the number of your answer to the question here",
 "Right here");

if(userInput == questions[ranNum].correctAnswer) {
    console.log("That is correct");
} else {
    console.log("NOPE. You're wrong and dumb");
}

*/



//their solution
//////////////////////

//include all code in one function so that no code can ever over ride it
//this is an IIFE
//IMMEDIATELY-INVOKED FUNCTION EXPRESSION
/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong answer, try again!');
        }
    }
    
    var q1 = new Question('Is Javascript the coolest prog language ever?',
    ['Yes', 'No'], 0);
    
    var q2 = new Question('What is the name of this course\'s teacher?',
     ['John', 'Michael', 'Jonas'], 1);
    
     var q3 = new Question('What does best describe coding?', 
     ['boring', 'hard', 'fun', 'tedius'], 2);
    
     var questions = [q1, q2, q3];
    
     var n = Math.floor(Math.random() * questions.length);
    
     questions[n].displayQuestion();
    
     var answer = parseInt(prompt('Please select the correct answer.'));
    
     questions[n].checkAnswer(answer);
})();
*/

//EXPERT LEVEL


(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong answer, try again!');
        }
    }
    
    var q1 = new Question('Is Javascript the coolest prog language ever?',
    ['Yes', 'No'], 0);
    
    var q2 = new Question('What is the name of this course\'s teacher?',
     ['John', 'Michael', 'Jonas'], 1);
    
     var q3 = new Question('What does best describe coding?', 
     ['boring', 'hard', 'fun', 'tedius'], 2);
    

     function nextQuestion() {
        var questions = [q1, q2, q3];
    
        var n = Math.floor(Math.random() * questions.length);
       
        questions[n].displayQuestion();
       
        var answer = prompt('Please select the correct answer.');
       
        questions[n].checkAnswer(answer);


        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();
        }
     }
    
     nextQuestion();

})();
