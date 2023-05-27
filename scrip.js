// Function to create a new to-do item
function createTodoItem(task) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = task;
  li.appendChild(span);
  return li;
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task !== '') {
    const newItem = createTodoItem(task);
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(newItem);
    input.value = '';
  }
}

// Function to mark a to-do item as completed
function markAsCompleted(event) {
  const item = event.target;
  item.classList.toggle('completed');
}
function createTodoItem(task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    li.appendChild(span);
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
  
    return li;
  }
  function handleDelete(event) {
    const item = event.target.parentElement;
    item.remove();
  }
  
  // Add event listener to the todo list for delete button click
  document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      handleDelete(event);
    }
  });
// Add event listeners
document.getElementById('todo-form').addEventListener('submit', handleFormSubmit);
document.getElementById('todo-list').addEventListener('click', markAsCompleted);
