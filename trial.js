//get elements in global scope.
let bar = document.querySelector("#character-bar");
let animalName = document.querySelector("#name");
let animalImage = document.querySelector("#image");
let infoP = document.querySelector("#name");
let infoImg = document.querySelector("#image");
let submitVotes = document.querySelector("#submit");
let voteCountSpan = document.querySelector("#vote-count");
let form = document.querySelector("#votes-form");

let currentCharacterId = null; // Store selected character ID

// fetch and display characters
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    data
      .forEach((item) => {
        // create span
        let span = document.createElement("span");
        span.textContent = item.name;
        bar.appendChild(span);

        span.addEventListener("click", () => {
          infoP.textContent = item.name;
          infoImg.src = item.image;

          voteCountSpan.textContent = item.votes;
          currentCharacterId = item.id;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });
