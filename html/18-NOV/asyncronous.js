console.log("Start");


setTimeout(() => {
    setTimeout(()=>{
    console.log("Hi");
},2000)
    console.log("Done with the long task");
},3000);

console.log("End");