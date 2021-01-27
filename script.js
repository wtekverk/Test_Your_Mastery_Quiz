//GLOBAL VARIABLES 

var startButton = document.getElementById("start_btn");
var timeEl = document.getElementById("timer");
var questionSection = document.getElementById("question_section");
var correctCheck = document.getElementById("correct_check");
var userDetails = document.getElementById("user_details");
var userName = document.getElementById("username");
var saveUser = document.getElementById("saveUser");
var finalScore = document.getElementById("final_score");
var question = document.getElementById("question");
var choiceA = document.getElementById("choice_A");
var choiceB = document.getElementById("choice_B");
var choiceC = document.getElementById("choice_C");
var choiceD = document.getElementById("choice_D");
var secondsLeft = 75;
var currentQuestionIndex = 0
var correctAnswers = 0
var incorrectAnswers = 0

//questions that will display during test
var questions = [{
        title: "What shape is a wombats poop?",
        choices: ["circe", "cube", "sphere", "triangle"],
        answer: 1
    },

    {
        title: "What is the flightless bird that is also a national icon of NZ?",
        choices: ["blue jay", "ostrich", "kiwi", "wombat"],
        answer: 2
    },

    {
        title: "The lesser short-tail is what kind of animal known to crawl around the floor of the forests of NZ?",
        choices: ["bat", "bird", "rat", "cat"],
        answer: 0
    },

    {
        title: "If you wanted to find the oldest fossilized remains of Penguins where should you look?",
        choices: ["Africa", "Canada", "New Zealand", "Mexico"],
        answer: 2
    },

    {
        title: "The giant Moa is a what?",
        choices: ["type of blue whale", "extinct bird", "kangaroo", "tree"],
        answer: 1
    }
]


//FUNCTIONS

//once this function is prompted a question and its answers will pop up. This uses the index of the array choices to get all of the answers to show up.
function startQuiz() {
    question.textContent = questions[currentQuestionIndex].title,
        choiceA.textContent = questions[currentQuestionIndex].choices[0]
    choiceB.textContent = questions[currentQuestionIndex].choices[1]
    choiceC.textContent = questions[currentQuestionIndex].choices[2]
    choiceD.textContent = questions[currentQuestionIndex].choices[3]

}

//this function sets the time to start when the start button is pressed  
function setTime() {
    // this makes a variable that will store the time interval function 
    var timerInterval = setInterval(function () {
        secondsLeft--;

        //this makes the time element read the second left 
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0 || ) { //TODO: make this clock stop 
            // Stops execution of action at zero seconds and clears the timer out 
            clearInterval(timerInterval);
        }

    }, 1000);
}

//this function gets triggered after a choice button is clicked 
function checkAnswer() {
    var chosenAnswer = this.getAttribute("data-choice");

    //this says if the chosen question matches the answer index number a message will play
    if (chosenAnswer == questions[currentQuestionIndex].answer) {
        correctAnswers++;
        correctCheck.textContent = "You are RIGHT!"

        // if the message is not correct a wrong message will play.
    } else {
        incorrectAnswers++;
        correctCheck.textContent = "You are WRONG!";
    }

    //this moves the the question index on by one point as long as there are still questions left 
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        startQuiz();

        //if no questions are left move to endQuiz function
    } else {

        endQuiz()
    }

}

//this function makes the questionSection invisible and prompts the userDetails section and displays the final score
function endQuiz() {
    questionSection.style.display = "none";
    userDetails.style.display = "block";
    finalScore.textContent = "Your Final score is " + secondsLeft + " .You got " + correctAnswers + " correct and " + incorrectAnswers + " wrong."

    saveUserInfo()
}


//need to make this function store user info in local storage 
function saveUserInfo() {




}


//EVENT LISTENERS 

//click events on each answer, after click event they are sent to check Answer function
choiceA.addEventListener("click", checkAnswer)
choiceB.addEventListener("click", checkAnswer)
choiceC.addEventListener("click", checkAnswer)
choiceD.addEventListener("click", checkAnswer)

//keeps questions hidden when first loaded 
questionSection.style.display = "none"
userDetails.style.display = "none"

//when start button is clicked start page will disappear and question section will appear in its place 
startButton.addEventListener("click", function () {
    questionSection.style.display = "block",
        startButton.style.display = "none",

        setTime()
    startQuiz()
})