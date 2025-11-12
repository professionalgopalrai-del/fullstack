// let obj ={
//     profile:{
//         name:"abhishek"
//     }
// }

// console.log(obj.profile.name);
// console.log(obj.profile.city);

// // safe optional Chaining 
// console.log(obj.info.name);  // undefined .name
// console.log(obj?.info?.name);  //undefined?.name

// console.log("Hello i am line number 13");

// const user = {
//     greet () {
//         console.log("Hello i am a user!");
//     }console
// }

// user.greet();
// console.log(user.info?.name)    //safe optional chaining variable access/reference.
// console.log(user?.info?.());    // safe optional chaining function call


let users = [
    {
        name:"gopal"
    },
    {},
    null,
    undefined,
    {
        name:"abhishek"
    }
]



users.forEach(e => {
    console.log(e?.name);
});