function person(name, age) {      // function constructor
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(this.name + ":" + this.age);
    }

}

const p1 =new person("kirti", 22);
const p2 = new person("gopal", 23);

p1.greet();
p2.greet();
