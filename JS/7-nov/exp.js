let arr = ['a','b','c'];

for(let i of arr) {
    console.log(i);    // a, b, c
}

for (let i in str) {
    console.log(i);
}


let obj = {
    name: "gopal",
    age:23
}

for(let key in obj) {
    console.log(key +":" + obj[key]);
}