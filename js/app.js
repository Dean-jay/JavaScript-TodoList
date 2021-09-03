/**
 * I need to change Today Date Auto
 * if click the empty space make new list and move to down.
 * in [ .schedule section ], make select time and text for schedule
 * make blank space in Meal
 */

const addBtn = document.querySelector('.button');
const checkbox = document.querySelector('.checkbox');
const todayjob = document.querySelector('.task');
const textcontainer = document.querySelector('.input__text');
const incompletedHolder = document.querySelector('.incompleted__task');

function addText() {
  console.log(textcontainer.value);
  const listoftask = createHTMLList(textcontainer.value);
  console.log(listoftask);
  incompletedHolder.appendChild(listoftask);
  textcontainer.value = '';
}

function createHTMLList(textTask) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('p');

  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  label.innerText = textTask;
  label.className = 'task';
  listItem.className = 'checkbox_list';

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  return listItem;
}

addBtn.addEventListener('click', () => addText());
textcontainer.addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    addText();
  }
});
