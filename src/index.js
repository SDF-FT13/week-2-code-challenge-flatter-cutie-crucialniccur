// Your code here
//access elements in global scope
let bar = document.querySelector("#character-bar");
let animalName = document.querySelector("#name"); // console.log(animalName);
let animalImage = document.querySelector("#image"); // console.log(animalImage);
// select p and img in the detailed info
let infoP = document.querySelector("#name"); // console.log(infoP);
let infoImg = document.querySelector("#image"); // console.log(infoImg);
let form = document.querySelector("#votes-form"); // console.log(form);
// let voteCountSpan = document.querySelector("#vote-count");
// voteCountSpan.textContent = "";
// let voteCounter = document.querySelector("#vote-count").textContent;

//the fetch
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      let span = document.createElement("span");
      span.textContent = item.name;
      bar.appendChild(span);

      span.addEventListener("click", (e) => {
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

  /// draw the line here
  let voteInput = parseInt(document.querySelector("#votes").value) || 0;
  let voteCounter = document.querySelector("#vote-count");

  let currentVotes = parseInt(voteCounter.textContent) || 0;
  voteCounter.textContent = currentVotes + voteInput;
  let newVotes = currentVotes + voteInput;

  fetch("http://localhost:3000/characters/1", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ votes: newVotes }),
  })
    .then((res) => res.json())
    .then((updatedData) => console.log(updatedData))
    .catch((error) => {
      console.log(error);
    });

  //resetting
  document.querySelector("#votes").value = "";
  document.querySelector("#votes-form").reset();
});

let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", (e) => {
  //   console.log(e);
  document.getElementById("vote-count").textContent = "0";
});

// the patch
// let previousVote = document.querySelector("#vote-count");
// console.log(previousVote.textContent);
// fetch("http://localhost:3000/characters", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     // votes: newVote,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
