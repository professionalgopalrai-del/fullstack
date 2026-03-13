let obj = {
    name:"alok",  // read only
    Age:24
}
Object.defineProperty(obj,'name',{
    writable:false
});

obj.name ="gobind";   //silent not allowed

console.log(obj);

Object.defineProperty(obj, 'name', {
    configurable:false
});


delete obj.name;
obj.name = "gobind";

console.log(obj);

Object.defineProperty(obj,'name',{
    enerable:false
});

obj.name = "gobind"

console.log(obj);
