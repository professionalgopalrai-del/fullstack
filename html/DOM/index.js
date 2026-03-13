// let h1 = document.getElementById("titel");


// let boxes = document.getElementsByClassName("box");

// for (let eachBox of boxes)  {
//     eachBox.Style.background = "red"
// }let arr = [10, 20, 30, 40];

// for(let i=0;i<arr.length;i++){
//   if(arr[i] === 20);
//    console.log("");
// }

let arr = [10, 20, 30, 40];
let found = false;

for(let i=0;i<arr.length;i++){
  if(arr[i] === 20){
    console.log("Found at index:", i);
    found = true;
    break;
  }
}

if(!found){
  console.log("Not Found");
}

