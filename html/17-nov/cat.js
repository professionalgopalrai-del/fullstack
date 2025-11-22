const btn = document.getElementById('btn');
const p = document.getElementById('fact');
let cnt = 1;

 function getyFact(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://catfact.ninja/fact");
    xhr.onload = () => {
        p.innerText= ${}`${JSON.parse(xhr.responseText).fact}`;
    }
    xhr.send();

 }

 getFact();

 setInterval(getFact, 40000);
