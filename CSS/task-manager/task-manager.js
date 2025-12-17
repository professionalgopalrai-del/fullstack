const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");


document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", 
    function(){
        if(input.value === "") return 
        alert("Please Enter a task!");

        createTask(input .value);
        saveTask(input .value);
        input .value = "";
    });


    function createTask(text) {
        const li = document.createElement("li");
        li.innerHTML =`
        <span class="taskTest">${text}</span>
        <button class ="del">X</button>
        `;

        li.querySelector(".del").addEventListener("click",() => {
            li.remove();
            removeTask(text);
        });

        list.appendChild(li);
    }

    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) 
        || [];

        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) 
        || [];

        tasks.forEach(t => createTask(t));
    }

    function removeTask(task){
        let tasks = JSON.parse(localStorage.getItem("tasks")) 
        || [];
        tasks = tasks.filter(t => t !==  tasks);
        localStorage.setItem("tasks", 
            JSON.stringify(tasks));
    }