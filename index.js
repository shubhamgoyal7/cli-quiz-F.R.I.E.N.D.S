var readlineSync = require("readline-sync");
var chalk = require('chalk');
var userName = readlineSync.question("What is your name ?");

console.log(chalk.yellow(`WElcome ${userName.toUpperCase()}
lets do a quick F.R.I.E.N.D.S Quiz!`));

var score =0;
var questions = [
  {
    question: "Which character has a twin?",
    answer: "phoebe",
  },
  {
    question: "How many sisters does Joey have?",
    answer: "7",
  },
  {
    question: "How many times has Ross been married?",
    answer: "3",
  },
  {
    question: "What nickname did Monica’s dad give her?",
    answer: "little harmonica",
  },
  {
    question: "What's the name of the dancer Joey lived with?",
    answer: "janine",
  },
  {
    question: "What’s Phoebe’s sister’s name?",
    answer: "ursula",
  },
  {
    question: "What is Rachel scared of?",
    answer: "swings",
  },
  {
    question: "What is Joey’s fake name?",
    answer: "ken adams",
  },
  {
    question: "Who got stuck in a pair of leather pants?",
    answer: "ross",
  },
  {
    question: "Who hates Thanksgiving?",
    answer: "chandler",
  },
]

function quiz(question,answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("right answer"));
    score = score +1;
  } else {
    console.log(chalk.red("wrong answer"));
    
  }

  console.log(chalk.cyan(`current score: ${score}`));
  console.log("--------");
}

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer)
}

if(score===10){
console.log(chalk.magenta(`Congratulations! ${userName} you answered all questions correct.
your score: 10`));
} else {
  console.log(`your score: ${score}`);
}