// Get references to the input elements and task list
const addInput = document.getElementById('addInput');
const deleteInput = document.getElementById('deleteInput');
const pendingTasksInput = document.getElementById('pendingTasksInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
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

// Function to delete tasks
function deleteTask() {
  const taskToDelete = deleteInput.value.trim();
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    if (taskItems[i].textContent === taskToDelete) {
      taskItems[i].remove();
      updatePendingTasks();
      break; // Stop searching after deleting the first matching task
    }
  }
  deleteInput.value = '';
}

// Function to update the pending tasks input
function updatePendingTasks() {
  const taskItems = taskList.getElementsByTagName('li');
  let pendingTasks = '';
  for (let i = 0; i < taskItems.length; i++) {
    pendingTasks += taskItems[i].textContent + '\n';
  }
  pendingTasksInput.value = pendingTasks.trim();
}

// Function to clear pending tasks
function clearPendingTasks() {
  taskList.innerHTML = '';
  pendingTasksInput.value = '';
}

// Function to complete a task
function completeTask() {
  const taskToComplete = completeInput.value.trim();
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    if (taskItems[i].textContent === taskToComplete) {
      taskItems[i].classList.add('completed');
      updatePendingTasks();
      break; // Stop searching after completing the first matching task
    }
  }
  completeInput.value = '';
}

// Attach click event listeners to the buttons
document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('deleteButton').addEventListener('click', deleteTask);
document.getElementById('clearButton').addEventListener('click', clearPendingTasks);
// Attach click event listener to the complete button
document.getElementById('completeButton').addEventListener('click', completeTask);



