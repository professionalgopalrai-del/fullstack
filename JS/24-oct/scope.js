var msg = "I am a global variable!";



if(2 == 2) {
    console.log(msg)
}

function func() {
    console.log(msg)
}
func()

// functional scope

function testScope(){
var a = "Inside the function";

console.log(a)
}

testScope();

console.log(a);


// block scope
  








if(true) {
    var a =10;
}

console.log(a)


var: this are functional scoped or global scope

let & const: this are functional scope, 
