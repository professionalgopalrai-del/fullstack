const countE1 = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const startBtn = document.getElementById('start');


let count = 0;

increaseBtn.addEventListener('click', () => {
    count++;
    countE1.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    countE1.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countE1.textContent = count;
});

startBtn.addEventListener('click', () => {
    count = 0;
    count.textContent = count;
});

