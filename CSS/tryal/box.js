let dataList = [];
const input = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const status = document.getElementById("status");



function renderList() {
    list.innerHTML = "";


    for (let i = 0; i< dataList.length; i++) {
        const li = document.createElement("li");


        li.textContent = `Item ${i + 1}: ${dataList[i]}`;


        list.appendChild(li);

    }
}


function addWithCallback(value, callback) {
    setTimeout(() => {
        dataList.push(value);
        callback();
    }, 500);
}



function addWithPromise(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value === "") {
                reject("Input empty nahi ho sakta");
            } else {
                dataList.push(value);
                resolve("Item added successfully");
            }
        }, 500);
    });
}



async function addData(value) {
    try{
        const result = await addWithPromise(value);
        status.textContent = result;
        renderList();
    } catch (error) {
        status.textContent = error;
    }
}



addBtn.addEventListener("click", () => {
    const value = input.value.trim();

    addWithCallback(value, () => {
        console.log("Callback executed");
    });

    addData(value);

    input.value = "";
});

clearBtn.addEventListener("click", () => {
    dataList = [];
    renderList();
    status.textContent = "List cleared";
});