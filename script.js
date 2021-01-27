//global variables 
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
var questions = [
    {title: "What shape is a wombats poop?",
    choices: ["circe", "cube", "sphere", "triangle"],
    answer: 1
    },

    {title: "What is the flightless bird that is also a national icon of NZ?",
    choices: ["blue jay", "ostrich", "kiwi", "wombat"],
    answer: 2
    },

    {title: "The lesser short-tail is what kind of animal known to crawl around the floor of the forests of NZ?",
    choices: ["bat", "bird", "rat", "cat"],
    answer: 0
    },

    {title: "If you wanted to find the oldest fossilized remains of Penguins where should you look?",
    choices: ["Africa", "Canada", "New Zealand", "Mexico"],
    answer: 2
    },

    {title: "The giant Moa is a what?",
    choices: ["type of blue whale", "extinct bird", "kangaroo", "tree"],
    answer: 1
    }
]

//once this function is prompted a question and its answers will pop up
function startQuiz() {
    question.textContent = questions [currentQuestionIndex].title,
    choiceA.textContent = questions [currentQuestionIndex].choices[0]
    choiceB.textContent = questions [currentQuestionIndex].choices[1]
    choiceC.textContent = questions [currentQuestionIndex].choices[2]
    choiceD.textContent = questions [currentQuestionIndex].choices[3]

}


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;

      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
  
    }, 1000);
  }
  

function checkAnswer() {
    var chosenAnswer = this.getAttribute("data-choice");
    
    if (chosenAnswer == questions[currentQuestionIndex].answer) {
        correctAnswers++;
        correctCheck.textContent = "You are RIGHT!"
    
    }else {
        incorrectAnswers++;
        correctCheck.textContent = "You are WRONG!";
    }
    
    if (currentQuestionIndex < questions.length-1) {
        currentQuestionIndex++;
        startQuiz();
    } else {

    endQuiz()
    }
    
    }
    
    function endQuiz() {
        questionSection.style.display = "none";
        userDetails.style.display = "block";
        finalScore.textContent = correctAnswers 
    }
    
    function saveUserInfo() {
       

    }




//click events on each answer, after click event they are sent to check Answer function
choiceA.addEventListener("click", checkAnswer)
choiceB.addEventListener("click", checkAnswer)
choiceC.addEventListener("click", checkAnswer)
choiceD.addEventListener("click", checkAnswer)

//keeps questions hidden when first loaded 
questionSection.style.display = "none"
userDetails.style.display = "none"

//when start button is clicked start page will disappear and question section will appear in its place 
startButton.addEventListener("click", function(){
    questionSection.style.display = "block",
    startButton.style.display = "none",

    setTime()
    startQuiz()
})


