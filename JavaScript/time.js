const timeEl = document.querySelector("#time");

const now = new Date();
const hour = now.getHours();
const dayNum = now.getDay();
const dayArr = new Array(7);

dayArr[0] = "Sunday";
dayArr[1] = "Monday";
dayArr[2] = "Tuesday";
dayArr[3] = "Wednesday";
dayArr[4] = "Thursday";
dayArr[5] = "Friday";
dayArr[6] = "Saturday";

const day = dayArr[dayNum];
const greeting = `hope you're having a great ${day} so far!`;

const outtro = `hope you're having a great ${day}`;

if (hour < 12) {
  timeEl.innerText = "Good Morning,";
} else if (hour <= 17 && hour > 12) {
  timeEl.innerText = `Good Afternoon, ${greeting}`;
} else timeEl.innerText = "Good Evening,";
