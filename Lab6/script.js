const element = document.getElementById('changeBtn');

function changeText () {
	document.getElementById('replace').innerText = 'Вміст абзацу змінено!';
}
element.addEventListener('click', changeText);

const hoverButton = document.getElementById('hButton');
function changeStyle () {
	hoverButton.style.backgroundColor = 'orange';
}

hoverButton.addEventListener("mouseover", changeStyle) ;

const addButton = document.getElementById('addButton')
const items = document.getElementById('items');

function addItem() {
	const item = document.createElement('li');
	item.textContent = 'Це новий елемент';
	items.appendChild(item);
}

addButton.addEventListener('click', addItem);

const clickButton = document.getElementById('clickBtn');
let count = 3;
clickButton.innerText = count;
function countDown() {
	count--;
	clickButton.innerText = count;
	if (count === 0) {
		clickButton.disabled = true;
		alert('Василькович Даниїл, варіант 3');
	}
}

clickButton.addEventListener('click', countDown);
