const createBtn = document.getElementById('Btn');
const userId = document.getElementById('userId');
const title = document.getElementById('title');
const desc = document.getElementById('desc');


createBtn.onclick = () => {
if(!userId  || !title || !desc) {
    console.log("Invalid create request!");
}


const xhr = new XMLHttpRequest();
xhr.ON
}