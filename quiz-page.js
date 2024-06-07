// Reset Score of user
async function resetVal(){
    await localStorage.setItem('score', 0);
    console.log('Reseting a Score of Student');
}
resetVal();

// =========== Questions =======
const questions = [
    {
        "que": "Inside which HTML attribute do we put the link?",
        "A": "alt",
        "B": "javascript",
        "C": "js",
        "D": "src",
        "answer": "D"
    },
    {
        "que": "What is formula of (a+b)**2?",
        "A": "a^2+2ab+b^2",
        "B": "a^2+b^2",
        "C": "a^3+b^3",
        "D": "a^2+b^3",
        "answer": "A"
    },
    {
        "que": " How do you write 'Hello World' in an alert box?",
        "A": "msgBox('Hello World');",
        "B": "alertBox('Hello World');",
        "C": "msg('Hello World');",
        "D": "alert('Hello World');",
        "answer": "D"
    },
    {
        "que": "What is full form of HTML?",
        "A": "HyperText markup language",
        "B": "Hyper language",
        "C": "text programming language",
        "D": "None of the Above",
        "answer": "A"
    },
    {
        "que": "What is full form of CSS?",
        "A": "Scripting language",
        "B": "Style sheet",
        "C": "Style markup language",
        "D": "Cascading style sheet",
        "answer": "D"
    },
    {
        "que": "Which HTML tag is used to define an unordered list?",
        "A": "<ol>",
        "B": "<ul>",
        "C": "<li>",
        "D": "<list>",
        "answer": "B"
    },
    {
        "que": "What is the correct HTML element for inserting a line break?",
        "A": "<break>",
        "B": "<br>",
        "C": "<lb>",
        "D": "<newline>",
        "answer": "B"
    },
    {
        "que": "How do you create a function in JavaScript?",
        "A": "function myFunction()",
        "B": "function:myFunction()",
        "C": "function = myFunction()",
        "D": "function.myFunction()",
        "answer": "A"
    },
    {
        "que": "Which HTML attribute is used to define inline styles?",
        "A": "style",
        "B": "class",
        "C": "id",
        "D": "styles",
        "answer": "A"
    },
    {
        "que": "Which HTML element is used to specify a footer for a document or section?",
        "A": "<foot>",
        "B": "<bottom>",
        "C": "<footer>",
        "D": "<section>",
        "answer": "C"
    }
]

// ======= Giving title to Quiz from Index.html ===============
const quiz_title = document.getElementById('quiz-title');
const quizTitle = localStorage.getItem('QuizTitle');
quiz_title.innerText = quizTitle;

// Countdown timer Logic
let seconds = 120;
const time = document.getElementById('time');
setInterval(updateCountdown, 1000);

function updateCountdown() {
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time.innerHTML = `${seconds}`;
    seconds--;

    if (seconds === 0) {
        // Handle when the time is up
        let totalTime = Number(120) - Number(seconds);
        localStorage.setItem('timeTaken', totalTime);
        clearInterval(updateCountdown);

        // You can add your logic here, like submitting the quiz or showing a message.
        window.location.href = './result.html';
    }
}

// Score count Logic
const score = document.getElementById('score');
var marks = 0;

function totalScore() {
    marks++;
    score.innerText = marks;
    // localStorage.setItem('score', marks);
    console.log(marks);
}

// Question number Count Logic
let queNumber = 1;
const question_number = document.getElementById('question-number');

// Next Question 
function nextQue() {
    loadQues();
    queNumber++;
    question_number.innerHTML = queNumber;

    if (index === 10) {
        document.getElementById('next-question').innerHTML = `<a href='result.html'> Submit </a>`;
        let totalTime = Number(120) - Number(seconds);
        localStorage.setItem('timeTaken', totalTime);
    }

    // score.innerText = marks;
    localStorage.setItem('score', marks);
}

let index = 0;
const question = document.getElementById('question');
const opt_a = document.getElementById('option-a');
const opt_b = document.getElementById('option-b');
const opt_c = document.getElementById('option-c');
const opt_d = document.getElementById('option-d');

const loadQues = () => {
    const data = questions[index];

    // Display question and options
    question.innerText = data.que;
    opt_a.innerText = data.A;
    opt_b.innerText = data.B;
    opt_c.innerText = data.C;
    opt_d.innerText = data.D;

    opt_a.style.backgroundColor = "";
    opt_b.style.backgroundColor = "";
    opt_c.style.backgroundColor = "";
    opt_d.style.backgroundColor = "";

    // Reset marks for each question
    let ans = "";

    // Handling click events for options
    opt_a.onclick = () => {
        ans = "A";
        opt_a.style.backgroundColor = "green";
        checkAnswer(ans, data.answer);
    }
    opt_b.onclick = () => {
        ans = "B";
        opt_b.style.backgroundColor = "green";
        checkAnswer(ans, data.answer);
    }
    opt_c.onclick = () => {
        ans = "C";
        opt_c.style.backgroundColor = "green";
        checkAnswer(ans, data.answer);
    }
    opt_d.onclick = () => {
        ans = "D";
        opt_d.style.backgroundColor = "green";
        checkAnswer(ans, data.answer);
    }

    index++;
}

// Function to check the correctness of the selected answer
const checkAnswer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
        totalScore();
    }
}

// Load the first question
loadQues();







