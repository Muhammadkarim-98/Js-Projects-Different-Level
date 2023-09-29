const inputEl = document.querySelector('.input');
const formEl = document.querySelector('.form');
const ulEl = document.querySelector('.list');

function toDolist(task) {
	let newTask = inputEl.ariaValueMax;
	if (task) { newTask = task.name };

	const liEl = document.createElement('li');
	if (task && task.checked) {
		liEl.classList.add('checked');
	}
	liEl.innerHTML = newTask;
	ulEl.appendChild(liEl);
	inputEl.value = '';
	// check BTN
	const checkBTN = document.createElement('div');
	checkBTN.innerHTML = `<i class="fas fa-check-square`;
	liEl.appendChild(checkBTN);
	// trash BTN
	const trashBTN = document.createElement('div');
	trashBTN.innerHTML = `<i class="fas fa-trash"></i>`;
	liEl.appendChild(trashBTN);

	const btnBox = document.createElement('div');
	btnBox.classList.add('btnBox');
	btnBox.appendChild(checkBTN);
	btnBox.appendChild(trashBTN);
	liEl.appendChild(btnBox);
	checkBTN.addEventListener('click', () => {
		liEl.classList.toggle('checked')
	});
	trashBTN.addEventListener('click', () => { liEl.remove() })

};
// Local Storage!
// ...
