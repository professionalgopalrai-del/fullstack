const dropdown = document.getElementById('dropdown');
const output = document.getElementById('output');
const statusText = document.getElementById('statusText');


function populateUsers() {
    statusText.textContent = "Loading Users";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users");


    xhr.onload = () => {
     if(xhr.status >= 200 && xhr.status < 300) {
        try{
            const users = JSON.parse(xhr.responseText);
            dropdown.innerHTML = '<option value="">-- choose a user  --</option>';


            users.forEach(user => {
                const opt = document.createElement('option');
                opt.textContent = user.name;
                opt.value = user.id;
                dropdown.appendChild(opt);
            });
        } catch(error) {
          statusText.textContent = "Invalid JSON from users";

        }

     } else {
        statusText.textContent = `Failed to load users (status : ${xhr.status})`;
        output.textContent = `Error loading users: HTTP ${xhr.status}`;
     }
    }
    xhr.send()
}
populateUsers()

dropdown.onchange = () => {
    const id = dropdown.value;

    if(!id) {
        output.textContent = "Select a user to see JSON response here!";
        return;

    }

    statusText.textContent = "Fetching the user details...";
    output.textContent = "";


    const xhr = new XMLHttpRequest();
    xhr.open("GET", `htttps://jsonplaceholder.typicode.com/users/${id}`);

    
}