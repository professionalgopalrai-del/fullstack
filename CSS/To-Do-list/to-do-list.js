function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.ariaValueMax.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    li.ondblclick = function () {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}