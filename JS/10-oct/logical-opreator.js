let marks = 78;

// < 33 -> fail
//33-50 -> c
//51-70 -> B
// 71-90 ->A
//91-100 -> A+

if(marks < 33) {
    console.log("OPPS failed!");
}else if(marks >= 33 && marks <= 50) {
    console.log(" C grade!");
}else if(marks >= 51 && marks <= 70) {
    console.log(" B grade!");
}else if(marks >= 71 && marks <= 90) {
    console.log(" A grade!");
}
else  {
    console.log("A+ grade!");
}
let studentOverAllmarks = 352;
let studentsMaths = 70;

if(studentOverAllmarks >= 300 || studentsMaths >= 80) {
    console.log(" eligible ");
}

if(6 > 3){
    console.log(" 6 is greater than 3");
}else {
    console.log(" 6 is not greater than 3");
} 

let a 10, b = 12;

if(!!!(a >= b)) {
    console.log(" a is greater");
}

