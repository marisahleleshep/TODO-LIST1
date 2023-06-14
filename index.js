
const addInput = document.getElementById('addInput');
const deleteInput = document.getElementById('deleteInput');
const pendingTasksInput = document.getElementById('pendingTasksInput');
const taskList = document.getElementById('taskList');


function addTask() {
  const newTask = addInput.value.trim();
  if (newTask !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = newTask;
    taskList.appendChild(taskItem);
    addInput.value = '';
    updatePendingTasks();
  }
}


function deleteTask() {
  const taskToDelete = deleteInput.value.trim();
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    if (taskItems[i].textContent === taskToDelete) {
      taskItems[i].remove();
      updatePendingTasks();
      break; 
    }
  }
  deleteInput.value = '';
}

function updatePendingTasks() {
  const taskItems = taskList.getElementsByTagName('li');
  let pendingTasks = '';
  for (let i = 0; i < taskItems.length; i++) {
    pendingTasks += taskItems[i].textContent + '\n';
  }
  pendingTasksInput.value = pendingTasks.trim();
}

function clearPendingTasks() {
  taskList.innerHTML = '';
  pendingTasksInput.value = '';
}

function completeTask() {
  const taskToComplete = completeInput.value.trim();
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    if (taskItems[i].textContent === taskToComplete) {
      taskItems[i].classList.add('completed');
      updatePendingTasks();
      break; 
    }
  }
  completeInput.value = '';
}

document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('deleteButton').addEventListener('click', deleteTask);
document.getElementById('clearButton').addEventListener('click', clearPendingTasks);

document.getElementById('completeButton').addEventListener('click', completeTask);



