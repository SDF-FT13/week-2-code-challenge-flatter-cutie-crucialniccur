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

// a submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!currentCharacterId) {
    alert("Please select a character first!!");
    return;
  }

  let currentVote = parseInt(voteCountSpan.textContent) || 0;
  let VoteInput = parseInt(document.querySelector("#votes").value) || 0;
  let totalVote = currentVote + VoteInput;

  voteCountSpan.textContent = totalVote;

  // patch
  fetch(`http://localhost:3000/characters/${currentCharacterId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: totalVote }),
  })
    .then((res) => res.json())
    .then((updatedData) => console.log("Updated votes:", updatedData))
    .catch((error) => {
      console.log(error);
    });
  // reset form input
  document.querySelector("#votes").value = "";
});

// reset buttons
let resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  if (!currentCharacterId) {
    alert("Select a character first!");
    return;
  }

  voteCountSpan.textContent = 0;

  fetch(`http://localhost:3000/characters/${currentCharacterId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: 0 }),
  })
    .then((res) => res.json())
    .then((updatedData) => console.log("Votes reset succescful:", updatedData))
    .catch((error) => {
      console.log(error);
    });
});
