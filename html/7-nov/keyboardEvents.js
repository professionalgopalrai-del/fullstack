// const input = document.getElementById("name");


// input.addEventListener('keyprees',(event)=> {
// console.log(event.key + ":" + event.keycode);
// });


// input.addEventListener('keyup',(), )


function sayHi() {
    console.log("Hi there!");
}

btn.addEventListener('click', sayHi);


setTimeout (() => {
    btn.removeEventListener('click', sayHi);
    console.log("Event is removed");
   40000
});