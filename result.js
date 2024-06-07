const name_of_stud = document.getElementById('name-of-stud');
const correct_que = document.getElementById('correct-que');
const wrong_que = document.getElementById('wrong-que');
const percentage = document.getElementById('percentage');
const timetaken = document.getElementById('time-taken');

var time1 = localStorage.getItem('timeTaken');
// time1 = Number(120) - Number(time1);
timetaken.innerHTML = time1;
console.log(time1);

// Accesssing user name from Local Storage
name_of_stud.innerHTML = localStorage.getItem('UserName');
correct_que.innerHTML = localStorage.getItem('score');

var score = localStorage.getItem('score');

var wr = Number(10) - Number(score);
wrong_que.innerHTML = wr;
console.log(wr);

let per = Number(score) * 10;
percentage.innerHTML = per + ".00%";
