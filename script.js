let count = 0;

const valueEl = document.getElementById('value');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnReset = document.getElementById('btn-reset');

function updateDisplay() {
    valueEl.textContent = count;
    valueEl.className = 'value';
    if (count > 0) valueEl.classList.add('positive');
    else if (count < 0) valueEl.classList.add('negative');
    else valueEl.classList.add('neutral');
}

btnPlus.addEventListener('click', () => {
    count++;
    updateDisplay();
});

btnMinus.addEventListener('click', () => {
    count--;
    updateDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});