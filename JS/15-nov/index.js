 //Arthematic operators 

 //let a = 5;
 //let b = 2;

// console.log("a = " ,a , " & b = ",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);


// Conditional Statements 

// let age = 16;

// if (age >= 18) {
//     console.log("you can vote");
// }

// if (age < 18) {
//     console.log("you CANNOT vote");
// }


// let mode = "dark";
// let color;

// if(mode ==="dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color);

// if / else statements

// let age = 25;

// if(age <= 18) {
//     console.log("vote");
// } else{
//     console.log("not vote")
// }


// odd or even number 

// let num = 10;

// if (num % 2 === 0) {
//     console.log(num," is even");
// } else{
//     console.log(num,"is odd");
// }

// Ternery operatores 

// let age = 16;

//   age >= 18 ? console.log ("adult") : console.log( "not adult");
 
//alert("hello");
//let num =  prompt("enter a number :");

// if(num % 5 === 0) {
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num, "in not a multiple of 5");
// }
 

let score = prompt("enter your score (0-100):");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
}else if (score >= 70 && score <= 89) {
    grade = "B";
}else if(score >=60 && score <=69) {
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else if (score >= 0 && score <= 49){
    grade = "F";
} 

console.log("according to your score, your grade was :", grade);

