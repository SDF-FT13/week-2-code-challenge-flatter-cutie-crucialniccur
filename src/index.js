// Your code here
//access elements in global scope
let bar = document.querySelector("#character-bar");
let animalName = document.querySelector("#name"); // console.log(animalName);
let animalImage = document.querySelector("#image"); // console.log(animalImage);
// select p and img in the detailed info
let infoP = document.querySelector("#name"); // console.log(infoP);
let infoImg = document.querySelector("#image"); // console.log(infoImg);
let form = document.querySelector("#votes-form"); // console.log(form);
let voteCounter = document.querySelector("#vote-count").textContent; // console.log(voteCounter);

//the fetch
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

      //add event listeners to the spans
      span.addEventListener("click", (e) => {
        // console.log(e.target.textContent);
        infoP.textContent = item.name;
        infoImg.src = item.image;
      });
    });
  })
  .catch((hitlafu) => {
    console.error(hitlafu);
  });

// add a submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e.target);
  votes = document.querySelector("#votes").value; //  console.log(votes);
  //   input = votes.value;
  //   console.log(votes.value);
});
