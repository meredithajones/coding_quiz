
//Setting up all of the questions, possible answers "choices" and the correct answers
 var questions = [ 
    {
    question: "In what year was the first computer game created?",
    choices: ["1998", "1912", "1947", "1961"],
    answer: "1961"
   },
   {
       question: "The action of doing something over and over again, repeating code.",
       choices: ["jumping", "syntax", "loop", "bug"],
       answer: "loop"
      },

       {
      question: "What does CSS stand for?",
      choices: ["Complete Simple Syntax", "Corresponding Simulaneous Synergy", "Cascading Style Sheets", "Corporate Shill Symposium"],
      answer: "Cascading Style Sheets"
          },

    {
    question: "What is the name of the first recorded computer coder?",
    choices: ["Bill Gates", "Rip VanWinkle", "Ada Lovelace", "Mr. Robot"],
    answer: "Ada Lovelace"
                },

    {
      question: "What does HTML stand for?",
      choices: ["How To Make lines", "HyperText Markup Language", "Hexagon Textbox Marker Lineup", "Helping Toolkit Makes Loops"],
      answer: "HyperText Markup Language"
          },

]

var questionIndex = 0;
// We start the quiz with a score of 0.

var numCorrect = 0;

//Creating the start button:
var startButton = document.getElementById("start");

var quizArea = document.getElementById("quizArea");
//setting the area for the possible answer buttons
var choicesDiv = document.getElementById("multipleChoices");

// Time count
var time = questions.length * 15;
//Setting up the timer var
var timeDiv = document.getElementById("timer");

//setting up a score display
var score = document.getElementById("correct");



//Beginning the game:
function btnClick(){
    if (questionIndex>= questions.length) {
        // startButton.setAttribute("class", "hide")
        quizArea.setAttribute("class", "hide")
        timeDiv.setAttribute("class", "hide")
        return;
    }
    console.log(this.value, questions[questionIndex].answer)
console.log(this.value, questions[questionIndex].answer)

    if (this.value !== questions[questionIndex].answer) {
        alert("Wrong")
        penalty()
        //penalize time- decduct 5 seconds
        questionIndex++
        setNextQuestion()
        
        
        
       
    }else{

        alert("correct!")
			// add one to the number to the count of correct answers
            numCorrect++;
            console.log(numCorrect);
            questionIndex++
            console.log(this.value, questions[questionIndex].answer)
            setNextQuestion();
    }
//Need help setting up the opertation the access the next question 
// after the one prior has been answered...is this correct?
    questions[questionIndex+1].question

    
   function penalty(){
      time =time - 5;
   }

    //check if we have run out of questions
        //if more questions call setnextquestion
        //else end game

}

//Creating the first question/set of answers options: 
function setNextQuestion(){
    console.log(questions[questionIndex])
    //setting up the current questions & "choice buttons" by index
    var currentQuest = questions[questionIndex]
    var quest = document.getElementById("question");
    quest.textContent = currentQuest.question;
    choicesDiv.innerHTML=""
    //showQuestion(currentQuestionIndex)
    //Using a forEach loop instead of a for loop here
    currentQuest.choices.forEach(function(choice, i){
        console.log(choice, i)
        //Creating the buttons for the html
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice;
        choiceBtn.onclick = btnClick;
        choicesDiv.appendChild(choiceBtn);
        console.log(choiceBtn)
        trackScore(numCorrect)

    })

};





// };
// Setting up the timer on the HTML
function tick(){
    time--;
   // console.log(time)
    var timeDiv = document.getElementById("timer");
    timeDiv.textContent = time

    // When I try to run this code below, it breaks the quiz
    // if (TotalSeconds <= 0) { alert("Time's up!")
    // {
    // // return; } 
    // TotalSeconds -= 1; UpdateTimer() window.setTimeout("Tick()", 1000); 
    
}

function trackScore(){
    var score = document.getElementById("correct");
    score.textContent=numCorrect

}


function startGame(){
    //console.log ("started")
    startButton.setAttribute("class", "hide")
    quizArea.removeAttribute("class");
    //hiddenElements.classList.remove('hide')
  
    timer = setInterval(tick, 1000)
    setNextQuestion();
};



// function setNextQuestion(){
//     showQuestion(currentQuestionIndex)
// }
console.log(startButton)
startButton.addEventListener('click', startGame);

// Show score at end of Quiz
//alert("You got " + score + "/" + questions.length);

//Card should appear with inputs for initials-> place that info & the score
//into local storage 