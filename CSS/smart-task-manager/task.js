const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask() {
    if (taskInput.value ==="") return;

    const task = {
        id:Date.now(),
        text:taskInput.value,
        completed:false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
        <input type = "checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.text}</span>
        <button data-id="${task.id}">❌</button>
        `;

        taskList.appendChild(li);
    });
}

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        deleteTask(e.target.dataset.id);
    }
});


function deleteTask(id) {
    tasks = tasks.filter(task => task.id !=id);
    saveTasks();
    renderTasks();
}


function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) tasks = data;
    renderTasks();
}

loadTasks();
