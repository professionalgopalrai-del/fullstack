 // ========= VARIABLES ====================//


let count = 0;
const appName = "Mega Project";

//=========== FUNCTION ==========//

function showAlert() {
    alert("Button Clicked!");
}

//============ EVENT ================//
document.getElementById("alertBtn").addEventListener("click", showAlert);

//================ ARRAY =============//
let tasks = [];
 
//============= ADD TASK FUNCTION =============//
function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value;


    if (vlaue === "") return;

    tasks.push(value);
    input.value = "";
    renderTasks();
}


//============ LOOP + DOM ===============//
function renderTasks() {
    let list = document.getElementById("tasksList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.lengthl; i++) {
        let li =  document.createElement("li");
        li.textContent = tasks[i];
        list.appendChild(li);
    }
}

//============= OBJECT ===================//

let user = {
    name: "Gopal",
    skill: "Full Stack"
};


// ===================  CLASS =============//

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello" + this.name);
    }
}

let p1 = new Person ("Developer");
p1.greet();


// ========= LOCAL STORAGE =============//
localStorage.setItem("app", appName);

// ============ ASYNC / PROMISE ===========//

async function fetchData() {
    return "Data Loaded";
}

fetchData().then(res => console.log(res));