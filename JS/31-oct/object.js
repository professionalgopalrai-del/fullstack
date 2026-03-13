 const key = "height";

let user = {};
user.name = "gopal";
user["age"] = 23;
user.key = 6.0;
user.isMarried = false;

console.log(user);

user.introduce = function() {
    console.log("Hello!");
}


for(let key in user) {
    console.log(key, ":", user[key]);
}


delete  user.age 

 

let user = {
    name = "gopal";
    age = 23;
    height = 6.0;
    hobbies = ["reading", "cooking"];
    education = {
        graduation:true;
        postGraduation:false;
    }
}