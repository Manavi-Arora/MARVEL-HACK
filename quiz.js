//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "What is the real name of Iron Man?",
        options: ["Tony Stark", "Steve Rogers", "Bruce Banner", "Peter Parker"],
        correct: "Tony Stark",
    },
    {
        id: "1",
        question: "Who is the leader of the Avengers?",
        options: ["Captain America", "Thor", "Black Widow", "Iron Man"],
        correct: "Captain America",
    },
    {
        id: "2",
        question: "Which Avenger is also known as the God of Thunder?",
        options: ["Captain America", "Thor", "Hulk", "Black Widow"],
        correct: "Thor",
    },
    {
        id: "3",
        question: "Who is the founder of the Avengers?",
        options: ["Iron Man", "Thor", "Hulk", "Ant-Man"],
        correct: "Ant-Man",
    },
    {
        id: "4",
        question: "Which Avenger is a master assassin and spy?",
        options: ["Hawkeye", "Black Panther", "Black Widow", "Scarlet Witch"],
        correct: "Black Widow",
    },
    {
        id: "5",
        question: "Which Avenger is a genius scientist and also known as the Green Goliath?",
        options: ["Thor", "Iron Man", "Hulk", "Spider-Man"],
        correct: "Hulk",
    },
    {
        id: "6",
        question: "Who is the first villain the Avengers fought together as a team in the MCU?",
        options: ["Ultron", "Loki", "Thanos", "Red Skull"],
        correct: "Loki",
    },
    {
        id: "7",
        question: "What is the real name of Black Widow?",
        options: ["Natasha Romanoff", "Wanda Maximoff", "Carol Danvers", "Janet van Dyne"],
        correct: "Natasha Romanoff",
    },
    {
        id: "8",
        question: "Who is the android member of the Avengers with the ability to fly and shoot energy beams?",
        options: ["Vision", "War Machine", "Falcon", "Winter Soldier"],
        correct: "Vision",
    },
    {
        id: "9",
        question: "Which Avenger is also known as the Scarlet Witch and possesses reality-warping abilities?",
        options: ["Scarlet Witch", "Black Widow", "Captain Marvel", "Spider-Woman"],
        correct: "Scarlet Witch",
    },
];


//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};