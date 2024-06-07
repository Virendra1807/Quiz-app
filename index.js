// Accessing Name of Student Successfully
var username = "";
const enterNm = document.getElementById('enter');
enterNm.addEventListener('click', (e) => {
    document.getElementById('user-name').style.border = "2px solid green";
    const user_name = document.getElementById('user-name').value;
    username = user_name;
    console.log(username);
});


const pipes_and_cisterns = document.getElementById('pipes_and_cisterns')
const probability = document.getElementById('probability');
const problem_on_ages = document.getElementById('problem_on_ages');
const profit_and_loss = document.getElementById('profit_and_loss');


pipes_and_cisterns.addEventListener('click', (event) => {
    // localStorage.removeItem('UserName');
    // localStorage.removeItem('QuizTitle');
    var title = "Pipes and Cisterns";
    // Storing user name in local storage for displaying it in last 
    localStorage.setItem('UserName', username);
    localStorage.setItem('QuizTitle', title);
    window.location.href = "./quiz-page.html";
});

probability.addEventListener('click', (event) => {
    // localStorage.removeItem('UserName');
    // localStorage.removeItem('QuizTitle');
    let title = "Probability";
    // Storing user name in local storage for displaying it in last 
    localStorage.setItem('UserName', username);
    localStorage.setItem('QuizTitle', title);
    window.location.href = "./quiz-page.html";
});

problem_on_ages.addEventListener('click', (event) => {
    // localStorage.removeItem('UserName');
    // localStorage.removeItem('QuizTitle');
    let title = "Problems on Ages";
    // Storing user name in local storage for displaying it in last 
    localStorage.setItem('UserName', username);
    localStorage.setItem('QuizTitle', title);
    window.location.href = "./quiz-page.html";
});

profit_and_loss.addEventListener('click', (event) => {
    // localStorage.removeItem('UserName');
    // localStorage.removeItem('QuizTitle');
    let title = "Profit and Loss";
    // Storing user name in local storage for displaying it in last 
    localStorage.setItem('UserName', username);
    localStorage.setItem('QuizTitle', title);
    window.location.href = "./quiz-page.html";
    window.location.href = "./result.html";
});










