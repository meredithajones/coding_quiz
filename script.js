
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
      question: "What does HTML stand for?",
      choices: ["How To Make lines", "HyperText Markup Language", "Hexagon Textbox Marker Lineup", "Helping Toolkit Makes Loops"],
      answer: "HyperText Markup Language"
          }
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
var time = questions.length * 20;
//Setting up the timer var
var timeDiv = document.getElementById("timer");

//setting up a score display
var score = document.getElementById("score");



//Beginning the game:
function btnClick(){
    if (questionIndex>=questions.length) {
        hide
        return;
    }
    console.log(this.value, questions[questionIndex].answer)
questionIndex++
    if (this.value !== questions[questionIndex].answer) {
        alert("Wrong")
        penalty();
        //penalize time
        setNextQuestion();
        
        
       
    }else{

        alert("correct!")
			// add one to the number to the count of correct answers
            numCorrect++;
            console.log(numCorrect);
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

    })

};




// //Second set with question and answer options: 
// function setNextQuestion(){
//     console.log(questions[questionIndex]+1)
//     var currentQuest = questions[questionIndex]+1
//     var quest = document.getElementById("question");
//     quest.textContent = currentQuest.question;
//     //showQuestion(currentQuestionIndex)
//     currentQuest.choices.forEach(function(choice, i){
//         console.log(choice, i)
//         var choiceBtn = document.createElement("button");
//         choiceBtn.setAttribute("class", "choice");
//         choiceBtn.setAttribute("value", choice)
//         choiceBtn.textContent = choice;
//         choiceBtn.onclick = btnClick;
//         choicesDiv.appendChild(choiceBtn);
//         console.log(choiceBtn)

//     })

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


function startGame(){
    //console.log ("started")
   startButton.setAttribute("class", "hide")
   quizArea.removeAttribute("class");
    //hiddenElements.classList.remove('hide')
  
    timer = setInterval(tick, 1000)
    setNextQuestion();
};




//Creating the quiz variables
//We will need a question prompt, 4 answer options, and what the correct answer is. 

// questionEl.appendChild(questions);
// questionEl.innerHTML="Helllooooo There"

// var questions [
//     { Prompt:""
//       answer:""  
//     }
// ]
// var highScore []


//we will need a loop to go through the questions, and a way to track the user's responses.
//NEED TO CREATE A LOOP TO ASK THE QUESTIONS 
//NEED TO CREATE A WAY TO CHECK IF ANSWERS ARE TRUE OR FALSE 

// for ( var i = 0; i < questions.length; i++) {
//         var UserResponse 
//         // Check if the answer is true or false
//         if ((UserResponse === true && questions[i].a === "t") ||
//         (UserResponse === false && questions[i].a === "f")) {
//             console.log(this, this.value)
//         // Increase score by 1 point
//             score++;
//             alert("Correct!");
//             }
//             else {
//             alert("False!");
//                 }
        //continue to the next question and reduce the timer by 5 seconds

// Show score at end of Quiz
//alert("You got " + score + "/" + questions.length);

//Card should appear with inputs for initials-> place that info & the score
//into local storage 
    
//}


// Advice from AskBCS: "you will want to access them by index as the quiz progresses, using a global 
// questionIndex variable that increases after every question 
// so that it can be used to access the next one.
//  You would access it like this questions[questionIndex].question so, 
//  depending on what the current value of questionIndex is, 
//  will determine which question is selected





//4:23
//The first item in an array is at the zero index, so start out with questionIndex = 0


//Put the quiz into an object

//questions[questionIndex].choices[questionIndex] -> "answer" 


//let allTheChoices = document.querySelector("#multipleChoices")
 //   allTheChoices.append('append() choices');

//console.log(app.textContent);

// var questions = getElementById("li").appendChild("question");

// Creating buttons for answers:
// var btn1 = document.createElement("BUTTON1");
//Text to appear in the button, will need to pull from the array of "choices"
// btn.innerHTML = ["choices"];
// Append <button> to <body>                  
// document.body.appendChild("btn1");
//Should btn1 etc. be in quotes or not?

// var btn2 = document.createElement("BUTTON2");
//Text to appear in the button, will need to pull from the array of "choices"
// btn.innerHTML = ["choices"];
// Append <button> to <body>                  
// document.body.appendChild(btn2);     

////var btn3 = document.createElement("BUTTON3");
//Text to appear in the button, will need to pull from the array of "choices"
//btn.innerHTML = ["choices"];
// Append <button> to <body>                  
//document.body.appendChild(btn3);     

//var btn4 = document.createElement("BUTTON4");
//Text to appear in the button, will need to pull from the array of "choices"
//btn.innerHTML = ["choices"];
// Append <button> to <body>                  
//document.body.appendChild(btn4);    

//

//container div is hidden, start button is visible 
// attach an event listener (click ) to start button, which will trigger a function
    // container div visible
    // start button hidden
    // set up and start timer (setInterval)
    // call a function to set up questions (setQuestions)


// set Questions, append variable question to html (the h2);**Need help doing this. 

    // var currentQuestion = questions[questionIndex].question;
    //     document.body.appendvar(h2); 
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

  //Timer Script Here:
  // Update the count down by every second that passes (except if an answer is incorrect)
  
 //The code below for this timer was written by 
// Adhithya Rajasekaran
// Github user name adhithyan15

// function tick() {
//     // Shouldn't the code below make the timer appear on the html page? 
//     var timer = document.getElementById("timer");
//     var current_minutes = mins-1
//     seconds--;
//     timer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//     if( seconds > 0 ) {
//         setTimeout(tick, 1000);
//     } else {
//         if(mins > 1){
//             countdown(mins-1);           
//         }
//     }
// }


//endQuiz
    // stop our timer (clearInterval)
    //hide quizArea
    //display our final score 
    
//Overview of the assignment->
//Start button with an event listener

//on click, show first question

//Your welcome visual needs to dissapear- add a Display none CSS property


//add a start button in html

//Create an array of objects to diplay the questions. Title, choices and answer

//Create a div for the question document.createElemnent *Create a div placeholder
//with id of quesitons, starting, have a hide, with your onlick, remove the hide class. 

//Create an <h2> with the question title, then we need a div or an unordered list to house the buttons. 

//queryselector get elementbyid to append the elements from the DOM

//Grab the quesiton title DIV (getElementbyID)
//Grab the optional aswers DIV

//How do we access arrays? Question [0].title
//Question [0].choices[0] Get to choices of "i" for each available option



// function setNextQuestion(){
//     showQuestion(currentQuestionIndex)
// }
console.log(startButton)
startButton.addEventListener('click', startGame);

// Show score at end of Quiz
//alert("You got " + score + "/" + questions.length);

//Card should appear with inputs for initials-> place that info & the score
//into local storage 