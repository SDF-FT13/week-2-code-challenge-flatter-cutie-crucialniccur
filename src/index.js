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
  //   console.log(e.target);
  // let votes = document.querySelector("#votes").value;
  // let voteCounter = document.querySelector("#vote-count");

  // voteCounter.textContent = votes;
  // document.querySelector("#votes").value = "";
  // document.querySelector("#votes-form").reset();

  /// draw the line here
  let voteInput = parseInt(document.querySelector("#votes").value) || 0;
  let voteCounter = document.querySelector("#vote-count");

  let currentVotes = parseInt(voteCounter.textContent) || 0;
  voteCounter.textContent = currentVotes + voteInput;

  document.querySelector("#votes").value = "";
  document.querySelector("#votes-form").reset();
  // get value of votes , should be a number
  //   let votes = parseInt(document.querySelector("#votes").value) || 0;
  //   let voteCounter = document.querySelector("#vote-count");
  // update voteCounter value based on the input from user
  //   voteCounter.textContent = votes;

  //   let voteCounter = document.querySelector("#vote-count").textContent;

  //   console.log(votes);
  //   console.log(voteCounter);

  //   input = votes.value;
  //   console.log(votes.value);
  //   votes = voteCounter;

  // clearing the form input

  // clear the whole form
});

// patch
submitVotes.addEventListener("click", (e) => {
  // console.log(e.target);
  let toPatch = document.querySelector("#votes");
  let newVote = parseInt(toPatch.value);
  console.log(toPatch.value);
  fetch("http://localhost:3000/characters", {
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
