// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const allBtns = document.querySelectorAll(".like-glyph");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const heart = e.target;
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.className = "activated-heart";
        } else {
          heart.textContent = EMPTY_HEART;
          heart.className = "";
        }
      })
      .catch((error) => {
        const hidden = document.querySelector("#modal");
        // hidden.className = "";
        hidden.className = "";
        hidden.textContent = error;
        setTimeout(() => (hidden.className = "hidden"), 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
