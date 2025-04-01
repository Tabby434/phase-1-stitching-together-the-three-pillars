/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}


document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Select all heart elements
  const articleHearts = document.querySelectorAll(".like-glyph");

  // Step 2: Define the mock server function
  function mimicServerCall(url = "", config = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful or failed server response
        if (Math.random() < 0.8) {
          resolve("Pretend remote server notified of action!");
        } else {
          reject("Random server error. Try again later.");
        }
      }, 300);
    });
  }

  // Step 3: Add event listeners to each heart
  articleHearts.forEach((heart) => {
    heart.addEventListener("click", (event) => {
      const heartElement = event.target;
      mimicServerCall()
        .then(() => {
          // Toggle heart appearance
          if (heartElement.textContent === "♡") {
            heartElement.textContent = "♥";
            heartElement.classList.add("activated-heart");
          } else {
            heartElement.textContent = "♡";
            heartElement.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          alert(error);
        });
    });
  });
});

