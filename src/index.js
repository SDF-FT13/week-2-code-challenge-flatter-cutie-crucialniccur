// Your code here
let bar = document.querySelector("#character-bar");
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((hitlafu) => {
    console.error(hitlafu);
  });
