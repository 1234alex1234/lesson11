const todoControl = document.querySelector('.todo-control');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const headerInput = document.querySelector('.header-input');
const todoRemove = document.querySelector('.todo-remove');

let todoData = JSON.parse(localStorage.getItem('work')) || [];



const render = function () {
  todoList.innerHTML = '';
  todoCompleted.innerHTML = '';
  todoData.forEach(function (item, index) {
    const li = document.createElement('li');

    li.classList.add('todo-item');
    li.innerHTML = `
        <span class="text-todo">${item.text}</span>
        <div class="todo-buttons">
          <button class="todo-remove"></button>
          <button class="todo-complete"></button>
        </div>`;

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }


    function workComplited() {
      item.completed = !item.completed;
      localStorage.setItem('work', JSON.stringify(todoData));
      render();
    }

    function workRemove() {
      todoData.splice(index, 1);
      localStorage.setItem('work', JSON.stringify(todoData));
      render();
    }

    li.querySelector('.todo-complete').addEventListener("click", workComplited);

    li.querySelector('.todo-remove').addEventListener("click", workRemove);
  });
};

function arrowPush(e) {
  e.preventDefault();

  let newTodo = {
    text: headerInput.value,
    completed: false,
  };


  if (newTodo.text.trim() !== '') {
    todoData.push(newTodo);
  }

  localStorage.setItem('work', JSON.stringify(todoData));

  render();

  headerInput.value = '';
}

todoControl.addEventListener("submit", arrowPush);

render();