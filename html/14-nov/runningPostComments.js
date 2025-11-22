 let postId = 1
 function getComments(PostId){
    let extra = Math.floor(Math.random() * 1000)
    let customId = `${postId}-${extra}`;
 const xhr = new XMLHttpRequest();
};
 xhr.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

 xhr.onload = () => {
    console.log(xhr.responseText);

 }

 xhr.send();



 setInterval(() => }
 (getComments(currPostID),
 currPostId++,
 5000;
  

)

