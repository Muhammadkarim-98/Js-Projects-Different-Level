const inputEl = document.querySelector(".input");
const formEl = document.querySelector(".form");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
	list.forEach((task) => {
		toDolist(task);
	});
}

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	toDolist();
});

function toDolist(task) {
	let newTask = inputEl.value;
	if (task) {
		newTask = task.name;
	};

	const liEl = document.createElement("li");
	if (task && task.checked) {
		liEl.classList.add("checked");
	}
	liEl.innerHTML = newTask;
	ulEl.appendChild(liEl);
	inputEl.value = "";
	// check BTN
	const checkBTN = document.createElement("div");
	checkBTN.innerHTML = `<i class="fa fa-check-square" aria-hidden="true"></i>`;
	liEl.appendChild(checkBTN);
	// trash BTN
	const trashBTN = document.createElement("div");
	trashBTN.innerHTML = `<i class="fas fa-trash"></i>`;
	liEl.appendChild(trashBTN);

	const btnBox = document.createElement("div");
	btnBox.classList.add("btnBox");
	btnBox.appendChild(checkBTN);
	btnBox.appendChild(trashBTN);
	liEl.appendChild(btnBox);
	checkBTN.addEventListener("click", () => {
		liEl.classList.toggle("checked");
		updateLocalStorage();
	});
	trashBTN.addEventListener("click", () => {
		liEl.remove();
		updateLocalStorage();
	});
	updateLocalStorage();
}
// Local Storage!
function updateLocalStorage() {
	const liEls = document.querySelectorAll("li");
	list = [];
	liEls.forEach((liEl) => {
		list.push({ name: liEl.innerText, checked: liEl.classList.contains("checked") });
	});
	localStorage.setItem("list", JSON.stringify(list));
}
