
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const bodyContent = document.getElementById('bodyContent').value;
    const postInfo = {
        title:title,
        body:bodyContent
    };
    postToServer(postInfo);
})

function postToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
}