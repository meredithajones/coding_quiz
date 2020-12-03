var body = document.body;

//Creating the quiz variables
//We will need a question prompt, 4 answer options, and what the correct answer is. 

// Is the code below attaching my vars to the text at the end of the lines?
var quizAreaEl = document.getElementById("quizArea");
var questionEl = document.getElementById("question");
var multipleChoicesEl = document.createElement("multipleChoices");

questionEl.appendChild(questions);
questionEl.innerHTML="Helllooooo There"

// var questions [
//     { Prompt:""
//       answer:""  
//     }
// ]
// var highScore []


//we will need a loop to go through the questions, and a way to track the user's responses.
//NEED TO CREATE A LOOP TO ASK THE QUESTIONS 
//NEED TO CREATE A WAY TO CHECK IF ANSWERS ARE TRUE OR FALSE 
for ( var i = 0; i < questions.length; i++) {
        var UserResponse 
        if (UserResponse===)
//if the answer is wrong, the amount of time left on the timer needs to be reduced.
    
}
//Put the quiz into an object


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
       }

        {
       question: "What does CSS stand for?",
       choices: ["Complete Simple Syntax", "Corresponding Simulaneous Synergy", "Cascading Style Sheets", "Corporate Shill Symposium"],
       answer: "Cascading Style Sheets"
           }

     {
       question: "",
       choices: ["happy", "sad", "angry", "hnugry"],
       answer: "hungry"
           }
]

//questions[questionIndex].choices[questionIndex] -> "sad"

var questionIndex = ;

var questions = getElementById("li").appendChild("question");

// Creating buttons for answers:
var btn1 = document.createElement("BUTTON1");
//Text to appear in the button, will need to pull from the array of "choices"
btn.innerHTML = ["choices"];
// Append <button> to <body>                  
document.body.appendChild("btn1");
//Should btn1 etc. be in quotes or not?

var btn2 = document.createElement("BUTTON2");
//Text to appear in the button, will need to pull from the array of "choices"
btn.innerHTML = ["choices"];
// Append <button> to <body>                  
document.body.appendChild(btn2);     

var btn3 = document.createElement("BUTTON3");
//Text to appear in the button, will need to pull from the array of "choices"
btn.innerHTML = ["choices"];
// Append <button> to <body>                  
document.body.appendChild(btn3);     

var btn4 = document.createElement("BUTTON4");
//Text to appear in the button, will need to pull from the array of "choices"
btn.innerHTML = ["choices"];
// Append <button> to <body>                  
document.body.appendChild(btn4);    

btn1.id="BUTTON1";
btn1.style.width= "100px";
btn1.style.height= "100px";
btn1.style.background= "purple";

//container div is hidden, start button is visible 
// attach an event listener (click ) to start button, which will trigger a function
    // container div visible
    // start button hidden
    // set up and start timer (setInterval)
    // call a function to set up questions (setQuestions)

//Creating the start button:
var StartButton = document.createElement("STARTBUTTON");

StartButton.addEventListener('click' startGame);

// set Questions, append variable question to html (the h2);**Need help doing this. 

    var currentQuestion = questions[questionIndex].question;
        document.body.appendvar(h2); 
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

  function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        // Shouldn't the code below make the timer appear on the html page? 
        var timer = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        timer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
    tick();
  }

//endQuiz
    // stop our timer (clearInterval)
    //hide quizArea
    //display our final score 
    





