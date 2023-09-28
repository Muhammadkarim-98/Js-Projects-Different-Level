const quesEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
quesEl.innerText = `What is ${num1} multiply by ${num2}?`;
let score = JSON.parse(localStorage.getItem('score'));
scoreEl.innerText = `Score: ${score}`;

let result = num1 * num2;
formEl.addEventListener('submit', () => {
    const userInp = +inputEl.value
    if (userInp === result) {
        score++
        localStorage90()
    } else {
        score--
        localStorage90()

    }
});

function localStorage90() { localStorage.setItem('score', JSON.stringify(score)) };