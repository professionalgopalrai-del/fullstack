class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }


    greet() {
        console.log("Hello:", this.name, "i am", this.age, "old!" );
        
    }
}

const p1 = new person("rahul", 29);
const p2 = new person("gobind", 26);
const p3 = new person("Bhawesh rai", 23);

p1.greet();
p2.greet();
p3.greet();
