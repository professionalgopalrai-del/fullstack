// setTimeout(() => {
//     console.log("I am the first callback!");

//     setTimeout(() => {
//         console.log("I am the second callback!");

//         setTimeout(() => {
//             console.log("I am the thired callback!");
//         } ,3000);
//     },2000);
// },1000);

//new Promise((res,rej) => {
   // return(1);
//})


//val1->(val1 +1) -> (val1 +2) -> ()

// new Promise((resolve,reject) => resolve(1))
// .then(val => val + 1)
// .then(val => val +2)
// .then(val =>val +3)
// .then(val => console.log(val))
// .catch(e => console.log(e));


//function steps() {
  //  let x = 1;

  //  const p = new Promise((resolve , reject) => resolve(x + 1));

  //  p.then((val) => {
     //   return new Promise((resolve,reject) => resolve(val +2));
  //  }).then((fval) => {
       // console.log(fval);
 //   }).catch(error => {
     //   console.log(error);
  //  });
//}


//async function betterSteps() {
   // let x = 1;

//     x = await Promise.reject(x + 1).catch(e => {
//         console.log("First promise failed!");
//         return 10;
//     });
//     console.log(x);
//     x= await Promise.resolve(x);1

//     console.log(x);
// }

// betterSteps();


Promise.resolve("ok")
.then(msg => {
    console.log(msg);
})
.then(() => {
    console.log("second then function!");
})
.catch(error => console.log(error))
.finally(() => {
    console.log("Inside the finally block!");
})



