 let users = [];   // ARRAY
 const addBtn = document.getElementById("addBtn");
 const nameInput = document.getElementById("nameInput");
 const userList = document.getElementById("userList");
 const message = document.getElementById("message");


 //==============FUNCTION==============//
      function showUsewrs(){
     userList.innerHTML = "";



    //LOOP//
    for (let i = 0; i< users.length; i++) {
        const li = document.createElement("li");


         // STRING  //
         li.textContent = `User ${i + 1}: ${users[i]}`;

         userList.appendChild(li);
     }
 }

// // ===========CALLBACK===========//
   function addUserWithPromise(name) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name ==="") {
                 reject("Name empty nahi hona chahiye");
             } else {
                 users.push(name);
                 resolve("User added successfully");
             }
         }, 500);
     });
   }

   //===========ASYNC /  AWAIT =====================//
   async function addUserAsync(name) {
     try{
         const result = await addUserWithPromise(name);
        message.textContent = result;
         showUsers();
     } catch (error) {
         message.textContent = error;

     }
    
  }

  // =====================EVENT =====================//
  addBtn.addEventListener("click", () => {
     const name = nameInput.value.trim();


     //CALLBACK CALL//
     addUserWithCallback(name,() => {
        console.log("Callback executed")
    });

     //=== ASYNC ====//
     addUserAsync(name);

    nameInput.value = "";
   });



//let fruits = ["Apple", "Banana", "Mango"];

//fruits.push("Orange");
//console.log(fruits);
