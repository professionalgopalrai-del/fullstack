var x =100;   //global scope => x =200
console.log(x);  // 100

{                     //block
    let x = 200;        // x = 200
    console.log(x);
    x = 300;
    console.log(x);
}

console.log(x);