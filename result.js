const name_of_stud = document.getElementById('name-of-stud');
const correct_que = document.getElementById('correct-que');
const wrong_que = document.getElementById('wrong-que');
const percentage = document.getElementById('percentage');


// Accesssing user name from Local Storage

name_of_stud.innerHTML = localStorage.getItem('UserName');
correct_que.innerHTML = localStorage.getItem('score');
let wr = 5-score;
wrong_que.innerHTML = wr;
console.log(wr); 

let per = localStorage.getItem('score'); 
per += ".00%";
percentage.innerHTML = per;
console.log(per);