const timeEl = document.querySelector("#time");

const now = new Date();
const hour = now.getHours();
console.log(now);

console.log(timeEl);

if (hour < 12) {
  timeEl.innerText = "Good Morning";
} else if (hour <= 17 && hour > 12) {
  timeEl.innerText = "Good Afternoon";
} else timeEl.innerText = "Good Evening";
