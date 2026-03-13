const API_URL = "https://jsonplaceholder.typicode.com/users";

let users = [];

async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        users = await response.json();

        displayUsers(users);
    } catch (error) {
        console.log("Error:", error);
    }
}

function displayUsers(userArray) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
}

userArray.forEach((user) => {
  const div = document.createElement("div");
  div.className = "user";
  
  let name = user.name.toUpperCase();

  div.innerHTML = `
  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${user.email}</p>
  `;

  userList.appendChild(div);
});

document.getElementById("searchInput").addEventListener("input",function (){
    const searchValue = this.ariaValueMax.toLowerCase();

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchValue);
    });
});