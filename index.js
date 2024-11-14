const counterDisplay = document.querySelector("h3 span");
console.log(counterDisplay);
const pop = new Audio("./Assets/audio/pop.mp3");

let counter = 0;

const bubbleMaker = () => {
  const gamebox = document.querySelector(".gamebox");
  const bubble = document.createElement("span");

  bubble.classList.add("bubble");
  gamebox.appendChild(bubble);
  const size = Math.random() * 100 + 40 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    pop.play();
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);
