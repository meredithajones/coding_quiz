//Creating the quiz variables
//We will need a question prompt, 4 answer options, and what the correct answer is. 
var questions [
    { Prompt:""
      answer:""  
    }
]
var highScore []

//we will need a loop to go through the questions, and a way to track the user's responses.
for ( var i = 0; i < questions.length; i++) {
        var UserResponse 
        if (UserResponse===)
//if the answer is wrong, the amount of time left on the timer needs to be reduced.
    
}


//  var questions = [ 
//      {
//      question: "How are you?",
//      choices: ["happy", "sad", "angry", "hnugry"],
//      answer: "hungry"
//     },
//     {
//         question: "How are you?",
//         choices: ["happy", "sad", "angry", "hnugry"],
//         answer: "hungry"
//        }
// ]

//questions[questionIndex].choices[questionIndex] -> "sad"

//var questionIndex = 1;

//container div is hidden, start button is visible 
// attach an event listenr (click ) to start button, which will trigger a function
    // container div visible
    // start button hidden
    // set up and start timer (setInterval)
    // call a function to set up questions (setQuestions)

//setQuestions
    // var currentQuestion = questions[questionIndex].question;
    //append variable question to html (the h2);
    // for loop over choices array
        //- create an element (button)
        // example    var button = document.createElement(button)
        //- set atrribute (class name)
        //- set attribute ( value, choice[i])
        // button.textContent = choice[i]
    //button.onlick = someFunction
    //append button to html (choices)


//someFunction
    // is to compare users selection to correct answer, and then handle accordingly 
    //console.log(this, this.value), 
    //compare this.value to answer key to the current obj
    //if this.value !== answer
        //display some text "wrong"
        // we need to take 5 away from the timer
    //else (answered correctly)
        // display "Correct!"

    //questionIndex ++;
    //if questionIndex === questions.length
        //call the function endQuiz
    //else
        //call the function setQuestion



//endQuiz
    // stop our timer (clearInterval)
    //hide quizArea
    //display our final score 
    





