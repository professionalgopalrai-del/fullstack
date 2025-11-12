const user = {
    name: "ritu",
    greet: function() {  //this -> user
        const innerFunc = () => {    // lexcical/forceful binding:this -> user
            console.log("H1", this.name);

        }
        innerFunc();
    }
}

user.greet();
