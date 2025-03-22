// Your code here
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((hitlafu) => {
    console.error(hitlafu);
  });
