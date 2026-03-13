 console.log(this);


const person = {
    name:"gopal",
    greet: () => {
        console.log("Hello", this.name);
        this.name = "abhishek";
    }
}

person.greet();
console.log(this);  //{name:"abhishek"}
