// Your code here
//access elements in global scope
let bar = document.querySelector("#character-bar");
let animalName = document.querySelector("#name"); // console.log(animalName);
let animalImage = document.querySelector("#image"); // console.log(animalImage);
// select p and img in the detailed info
let infoP = document.querySelector("#name"); // console.log(infoP);
let infoImg = document.querySelector("#image"); // console.log(infoImg);
let form = document.querySelector("#votes-form"); // console.log(form);
// let voteCounter = document.querySelector("#vote-count").textContent;
let submitVotes = document.querySelector("#submit");
// console.log(submitVotes);

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

  /// draw the line here
  let voteInput = parseInt(document.querySelector("#votes").value) || 0;
  let voteCounter = document.querySelector("#vote-count");

  let currentVotes = parseInt(voteCounter.textContent) || 0;
  voteCounter.textContent = currentVotes + voteInput;

  document.querySelector("#votes").value = "";
  document.querySelector("#votes-form").reset();
});

// patch
submitVotes.addEventListener("click", (e) => {
  // console.log(e.target);
  let toPatch = document.querySelector("#votes");
  let newVote = parseInt(toPatch.value, 10);
  // let animalVote = e.votes;
  let characterId = toPatch.data.vote;
  fetch(`http://localhost:3000/characters/${animalVote}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: newVote }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Vote Updated ~", data);
    })
    .catch((error) => console.error("An error, !", error));
});
let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", (e) => {
  //   console.log(e);
  document.getElementById("vote-count").textContent = "0";
});
