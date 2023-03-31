const counter = document.getElementById("counter");
const incrementButton = document.getElementById("plus");
const decrementButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likes = document.getElementById("likes");

let count = 0;
let likeCount = 0;
let likeCounts = {};
let isPaused = false;
let intervalId = null;

incrementButton.addEventListener("click", () => {
  count++;
  counter.innerText = count;
  likeCount = 0;
  likes.innerText = "";
});

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerText = count;
    likeCount = 0;
    likes.innerText = "";
  }
});

likeButton.addEventListener("click", () => {
  if (count in likeCounts) {
    likeCounts[count]++;
  } else {
    likeCounts[count] = 1;
  }
  
  likeCount++;
  likes.innerText = `${likeCount} likes for ${count}`;
});

pauseButton.addEventListener("click", () => {
  if (!isPaused) {
    isPaused = true;
    clearInterval(intervalId);
    incrementButton.disabled = true;
    decrementButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.innerText = "Resume";
  } else {
    isPaused = false;
    intervalId = setInterval(() => {
      count++;
      counter.innerText = count;
      likeCount = 0;
      likes.innerText = "";
    }, 1000);
    incrementButton.disabled = false;
    decrementButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.innerText = "Pause";
  }
});

intervalId = setInterval(() => {
  if (!isPaused) {
    count++;
    counter.innerText = count;
    likeCount = 0;
    likes.innerText = "";
  }
}, 1000);

var d=document.querySelector("submit"),
e=document.createElement("p");e.innerText=c,
d.appendChild(e)


