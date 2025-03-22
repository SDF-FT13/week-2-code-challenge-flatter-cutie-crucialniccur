// Your code here
//access elements in global scope
let bar = document.querySelector("#character-bar");
let animalName = document.querySelector("#name");
console.log(animalName);
let animalImage = document.querySelector("#image");
console.log(animalImage);

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
