// premetive 

// 7 types : string , Number , Boolean , null , undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// //const bigNumber = 135896832832457359864n

// // Reference (Non premitive)


// // Array, Objects, Functions

// const heros = ["shaktiman", "hanuman" , "mahadev"];
// let myObj = {
//     name : "gopal",
//     age : 22,

// }

// const myFunction = function() {
//     console.log("Hello world");
// }

// console.log(typeof myFunction);



//  Stack(Premitive), Heap(Non-Premitive)

let myyoutubename = "gopalraipurvanchal"

let annothername = "raishahabpurvanchal.com"
anothername = "chaiaurcode"

console.log(myyoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "gopalrai@google.com"

console.log(userOne.email);
console.log(userTwo.email);