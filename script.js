
var startButton = document.getElementById("start_btn");
var timeEl = document.querySelector(".timer");
var questionSection = document.getElementById("question-section")
var question = document.getElementById("question");
var choiceA = document.getElementById("choice_A");
var choiceB = document.getElementById("choice_B");
var choiceC = document.getElementById("choice_C");
var choiceD = document.getElementById("choice_D");
var answerCheck = document.getElementById("answer_check");
var userDetails = document.getElementById("user_details");
var userName = document.getElementById("username");
var saveUser = document.getElementById("saveUser");
var finalScore = document.getElementById("final_score");
var secondsLeft = 75;
var currentQuestionIndex = 0
var correctAnswers = 0
var incorrectAnswers = 0

var questions = [
    {title: "What shape is a wombats poop?",
    choices: ["circe", "cube", "sphere", "triangle"],
    answer: "cube"
    },

    {title: "What is the flightless bird that is also a national icon of NZ?",
    choices: ["blue jay", "ostrich", "kiwi", "wombat"],
    answer: "kiwi"
    },

    {title: "The lesser short-tail is what kind of animal known to crawl around the floor of the forests of NZ?",
    choices: ["bat", "bird", "rat", "cat"],
    answer: "bat"
    },

    {title: "If you wanted to find the oldest fossilized remains of Penguins where should you look?",
    choices: ["Africa", "Canada", "New Zealand", "Mexico"],
    answer: "New Zealand"
    },

    {title: "The giant Moa is a what?",
    choices: ["type of blue whale", "extinct bird", "kangaroo", "tree"],
    answer: "cube"
    }
]



function startQuiz () {

}



//start button 
//timer 
//questions 
//choices
//clock
//game over screen

//make an html with all of these components

//JS 

//data - questions 

//variables global

//functions 

//event listeners


//click start button
    //ref start btn on DOM
    //add onclick event

//start timer
    //ref timer on DOM
    //use set interval

//display qs and as
    //ref DOM
    //loop through questions 
    //display Qs on dom
    //loop through choices
    //display each choice on DOM

//if answer correct show next Q
    //check answer against choice????

//if incorrect -time 
    //time = time -15

//when all qs answered GAME OVER 
//when time === 0 game over 

