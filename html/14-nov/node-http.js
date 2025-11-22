// step1: 
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1',(res) => {
    let data = "";

    res.on('data', (chunk) => {
    data += chunk ;
});

res.on('end', () => {
    // let jsonData = JSON.parse(data);
    console.log(jsonData.title);
})
});