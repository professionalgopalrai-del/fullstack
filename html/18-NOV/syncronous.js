//Task 1
// console.log("Start");


// function longTask() {
//     const start = Date.now();

//     while(Date.now() - start < 3000) {}

//     console.log("longTask is completed");
//     }

//   // Task 2
//     longTask();

//     // Task 3
// console.log("End");




function longTask(val, timeToWait) {
    const start = Date.now();

    while(Date.now() - start < timeToWait){}
        console.log(val);
    
}


longTask("Api call", 1000);
longTask("Database interaction", 2500);
longTask("Thirdparty package interaction", 5000);
console.log("I finally return the response to the user");