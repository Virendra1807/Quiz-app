
// =========== Questions changing Logic =======

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
    }
]

// ======= Giving title to Quiz from Index.html ===============
const quizTitle = localStorage.getItem('QuizTitle');
const quiz_title = document.getElementById('quiz-title');
quiz_title.innerText = quizTitle;

// Countdown timer Logic
let seconds = 100;
const time = document.getElementById('time');
setInterval(updateCountdown, 1000);

function updateCountdown() {
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time.innerHTML = `${seconds}`;
    seconds--;

    if (seconds === 0) {
        // Handle when the time is up
        clearInterval(updateCountdown);
        // You can add your logic here, like submitting the quiz or showing a message.
    }
}

// Score count Logic
const score = document.getElementById('score');
let marks = 0;
score.innerHTML = marks;

function totalScore() {
    marks++;
    score.innerHTML = marks;
}

// Question number Count Logic
let queNumber = 1;
const question_number = document.getElementById('question-number');

// Next Question 
function nextQue() {
    loadQues();
    queNumber++;
    question_number.innerHTML = queNumber;

    if (index === 5) {
        document.getElementById('next-question').innerHTML = `<a href='result.html'> Submit </a>`;
        localStorage.setItem('score', marks);
        // window.location.href = './result.html';
    }
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
    question.innerHTML = data.que;
    opt_a.innerHTML = data.A;
    opt_b.innerHTML = data.B;
    opt_c.innerHTML = data.C;
    opt_d.innerHTML = data.D;

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







