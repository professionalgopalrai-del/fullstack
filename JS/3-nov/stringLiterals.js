let name ="gopal";
let age = 23;


console.log("My name is", name, "_ and my age is", age);

// back tick -> string literals
console.log(`my name is ${name} - and my age is ${age}`);

let key = "user";

let obj = {
  [`${key}_id`]:1,
  [`${key}_name`]:"gopal"

}
 console.log(obj);


