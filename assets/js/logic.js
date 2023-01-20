// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria

var timer = document.querySelector("#time"); 
var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#questions");
var questionsTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices"); 
var questions = quizQuestions; //tuns the array into a var
var question4 = document.querySelector("#choice4");
var endscreen = document.querySelector("#end-screen");

var submit = document.querySelector("#submit"); //the submit button
var initials = document.querySelector("#initials"); // the intials text space

var highScoresList = document.querySelector("#highscores");

var timeLeft = 100; //sets initial time
    console.log(timeLeft);

let index = 0;
var answers = [] //holds the number of questions answered correctly
var score = 0;

var highScoreArray = []; // makes an array of initials added on final page

//event listener waits for click before running the enclosed functions    
function clickStart () {
    start.addEventListener("click", function () {
        
        
        hideStart();
        showQuestion(index);
        clickOnAnswers();      
        countDown();
        submitButtonFunc ();
        
        // storeHighScoreInputInitials(); 
        // renderHighScoreArray();
        
    });
    }

clickStart(); // initiates the quiz.

function showQuestion (index) {
            showQuestionTitle(index);
            renderAnswers(index);
    } //Revise - Passing parameters to a function!! 

function hideStart () {
    document.getElementById("start-screen").hidden = true;
    }

// changes the endscreen class to show, e.g. makes it visible
// changes the questionsDiv class to hide. e.g makes it hidden
function showEnd () { 
    questionsDiv.className = "hide";    // hides questions div
    endscreen.className = "show";       // makes end screen visible
    }

// changes the questions div id to show, e.g. makes it visible
//selects the question-title id and fills it with the 'question' text from questions JS file
function showQuestionTitle (index) { 
    document.getElementById("questions").className = "show"; 
    document.querySelector("#question-title").textContent = questions[index].question; 
    } 

function renderAnswers (index) {
    
    // vertically ordered list of buttons made from an array
    document.querySelector("#choice1").textContent = questions[index].answers[0]; 
    document.querySelector("#choice2").textContent = questions[index].answers[1]; 
    document.querySelector("#choice3").textContent = questions[index].answers[2]; 
    document.querySelector("#choice4").textContent = questions[index].answers[3]; 
    }

function clickOnAnswers () {
    //creates a variable called 'buttonList' that contains all buttons
    //div#questions > button selects all the buttons with the id 'questions'
    let buttonList = document.querySelectorAll("div#questions > button");
            //`${}` allows for inline adding of text 
            //e.target is the target of the click function, with 
            // e being a short var reference for event object.
            // if the button being clicked == correctAnswerIndex the fucntion runs
    var answerSelected = buttonList.forEach(function (i) {
        i.addEventListener("click", function (e) {
            if (
              questions[index].answers[questions[index].correctAnswerIndex] ==
              `${e.target.innerHTML}`) 
            {
            //if the answer is correct, text will print and the questions 
            //index will increment by 1
            document.querySelector("#winOrLooseText").textContent = "Correct!"
            index += 1; 

            // adds to questions answered correctly array for final scores??
            // answers.push(e.target.innerHTML); 
            
            }
            else {document.querySelector("#winOrLooseText").textContent = "Incorrect!"
            timeLeft -= 10;
            index += 1;
                      
            }
            
            anyRemainingQuestionsCheck();
            // logs out the text target of the button.
            console.log(e.target.innerHTML); 
          });
        });
    }

function anyRemainingQuestionsCheck () {
    // if the index is less than number of remianing qustions the 
            //index will show the next questions
            if (index < questions.length) 
            { showQuestion(index) }
            
            // else, the score will be set as remaining time
            //and the last 'end-screen' will be displayed
            else {
            score = timeLeft;
            document.querySelector("#final-score").textContent = score -=1;
            showEnd();
            }
}

// sets timer

function countDown () {
    //set interval calls a function at specified intervals
    var timeInterval = setInterval(function(){
    timeLeft--; 
    console.log(timeLeft);
    
    //stops the timer if it reaches 0
    if (timeLeft === 0) {
        clearInterval(timeInterval);
    //ends the game at 0     
        score = timeLeft;
        document.querySelector("#final-score").textContent = score;
        showEnd(); 
    
    }   
    
    document.querySelector("#time").textContent = timeLeft;    
    
    //stops the timer when the questions are all answered.     
    if ((index) == questions.length) {  
    clearInterval(timeInterval);
        }   
    document.querySelector("#time").textContent = timeLeft;
    
    }, 1000);
    }

    // when submit button is pressed it triggers an event listener
    function submitButtonFunc() {
        submit.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("submit test!");  
            
            //intialsInput takes the value from the #intials id (the enter text space)
            var initialsInput = document.querySelector("#initials").value;
            //initialsInput is then stored as a value in local storage
            localStorage.setItem("lastUserIntials", initialsInput);
            console.log(initialsInput);

            //the initialsInput is then pushed to the high score array
            highScoreArray.push(initialsInput);
            //clears the array when submit is pressed
            initials.value ="";
            console.log(highScoreArray);

        });    
        }

//append Li to highscores ol

// function initHighScoreDisplay () {

// var storedInitialsInput = JSON.parse(localStorage.getItem("intitalsInput"));
//     if (storedInitialsInput !== null) {
//         initials = storedInitialsInput;
//     }
// }

// renderHighScoreArray(); 

// // Stores initialsInput to local storage as strings
// function storeHighScoreInputInitials () {
//     localStorage.setItem("initialsInput",JSON.stringify(initials));
// }


// function renderHighScoreArray() {
// // Clear highScoresList element
// //   highScoresList.innerHTML = "";

//   // Render a new li for each initialsInput
//   for (var i = 0; i < highScoreArray.length; i++) {
//     var arrayDisplay = highScoreArray[i];

//     var li = document.createElement("li");
//     li.textContent = arrayDisplay;
//     li.setAttribute("data-index", i);

//     highScoresList.appendChild(li);
//   }
// }



// make an Array of the highscores intials by pushing initials to high scores array

//save the input initials to local storage
// render that array on the highscores page ol (id 'highscores') by appending new li items


// WHEN the game is over
// THEN I can save my initials and score


