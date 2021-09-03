/**
 * I need to change Today Date Auto
 * if click the empty space make new list and move to down.
 * in [ .schedule section ], make select time and text for schedule
 * make blank space in Meal
 */

const addBtn = document.querySelector('.button');
const todayjob = document.querySelector('.task');
const textcontainer = document.querySelector('.input__text');
const incompletedHolder = document.querySelector('.incompleted__task');

function addText() {
  if (textcontainer.value == '') return;
  const listoftask = createHTMLList(textcontainer.value);
  incompletedHolder.appendChild(listoftask);
  bindTaskEvents(listoftask);
  textcontainer.value = '';
}

function createHTMLList(textTask) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('p');
  const dBtn = document.createElement('button');
  const eBtn = document.createElement('button');

  listItem.className = 'checkbox_list';
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  label.innerText = textTask;
  label.className = 'task';
  dBtn.innerText = 'delete';
  dBtn.className = 'delete';
  eBtn.innerText = 'edit';
  eBtn.className = 'edit';

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(dBtn);
  listItem.appendChild(eBtn);
  return listItem;
}

function editTask() {
  console.log('eidt');
}
function deleteTask() {
  console.log('delete');
}
function checkBoxEventHandler() {
  console.log('finish');
}

const bindTaskEvents = function (taskListItem) {
  const checkbox = taskListItem.querySelector('.checkbox');
  const deleteBtn = taskListItem.querySelector('.delete');
  const editBtn = taskListItem.querySelector('.edit');
  console.log(editBtn);
  editBtn.onclick = editTask;
  deleteBtn.onclick = deleteTask;
  checkbox.onclick = checkBoxEventHandler;
};

addBtn.addEventListener('click', () => addText());
textcontainer.addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    addText();
  }
});

// 새로 생긴 리스트에 js가 적용이 안된다.
// binding issue : 이벤트가 처리되는 함수 안에서 queryseclector을 써준다.
// list에 빈 input 을 같이 주는 이유는 edit을 위해서 이다.
