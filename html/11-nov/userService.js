const userService  = require ('./userService');

userService.addUser("gopal");
userService.addUser("abhishek");
userService.addUser("alok");

const alluser = userService.listuser();

console.log(alluser);
