const textEl = document.getElementById('textarea');
const totalEl = document.getElementById('total-counter');
const remainEl = document.getElementById('remaining-counter');

textEl.addEventListener('keyup', () => { updateCounter() })

updateCounter();

function updateCounter() {
    totalEl.innerText = textEl.value.length;
    remainEl.innerText = textEl.getAttribute('maxlength') - textEl.value.length;
}