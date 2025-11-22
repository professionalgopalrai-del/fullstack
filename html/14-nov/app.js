// inbult modules
const fs = require('fs');

//create a new file and add some content in it!
fs.writeFileSync('hello.txt', 'Hello Common JS!');


const data = fs.readFileSync('hello.txt','utf-8');
console.log(data);



