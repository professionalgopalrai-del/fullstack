const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

let tasks = [];

async function loadTasks() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    tasks = data.map(task => ({
        id: task.id,
        titel: task.title,
        completed: task.completed
    }));

    saveTasks();
    displayTasks(tasks);
  }  catch (error) {
    console.log("API Error", error);

  }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.ariaValueMax.trim();


    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: taskText,
        completed: false 
    };
    
    tasks.push(newTask);
    saveTasks();
    displayTasks(tasks);
    input.value = "";
}

function displayTasks(taskArray) {
  const list = document.getElementById("tasksList");
  list.innerHTML = "";


  taskArray.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
    <span class="${task.completed ? 'completed' : ''}">
    ${task.title}
    </span>
    <button onclick="toggleTask(${task.id})">✔️</button>
    <button onclick="deleteTask(${task.id})">❌</button>
    `;

    list.appendChild(li);
  });
}


function toggleTask(id) {
  const task = tasks.find(t =>t.id === id);

  task.completed = !task.completed;

  saveTask();
  displayTasks(tasks);
}

function filterTasks(type) {
  let filteredTasks;

  if (type === "completed") {
    filteredTasks = tasks.filter(t => t.completed);
  } else if (type === "pending") {
    filteredTasks = tasks.filter(t => !t.completed);
  } else {
    filteredTasks = tasks;
  }

  displayTasks(filteredTasks);

}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
    displayTasks(tasks);
  } else {
    loadTasks();
  }
}

loadFromStorage();