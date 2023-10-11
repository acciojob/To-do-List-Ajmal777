const input = document.querySelector('#newTodoInput');
const btn = document.querySelector('#addTodoBtn');
const list = document.querySelector('#todoList');

btn.addEventListener('click', ()=>{
	if(!input.value.trim()) return;

	const data = input.value.trim();

	const li = document.createElement('li');
	li.innerText = data;
	li.addEventListener('click', getData);
	list.appendChild(li);
	input.value = "";
})

function getData(e){
	const data = e.target.innerText;
	input.value = data;
}
