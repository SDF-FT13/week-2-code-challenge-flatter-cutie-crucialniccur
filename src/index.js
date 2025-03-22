// Your code here
let bar = document.querySelector("#character-bar");
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      //create span element for each item
      let span = document.createElement("span");
      // set names from the fetch as textcontent
      span.textContent = item.name;
      //append span to bar as child
      bar.appendChild(span);
    });
  })
  .catch((hitlafu) => {
    console.error(hitlafu);
  });
