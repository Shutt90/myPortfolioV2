"use strict";

const bigNums = [100, 75, 50, 25, 10];
const lilNums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const bigQuery1 = document.querySelector(`.bignumber0`);
const bigQuery2 = document.querySelector(`.bignumber1`);
const lilQuery1 = document.querySelector(`.lilnumber0`);
const lilQuery2 = document.querySelector(`.lilnumber1`);
const lilQuery3 = document.querySelector(`.lilnumber2`);
const lilQuery4 = document.querySelector(`.lilnumber3`);

const bigArrSelector = [bigQuery1, bigQuery2];

const lilArrSelector = [lilQuery1, lilQuery2, lilQuery3, lilQuery4];

document.querySelector(".calculate").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".calculate").classList.add("hidden");
  document.querySelector(".reset").classList.remove("hidden");
  document.querySelector(".summary").classList.remove("hidden");

  const timerText = document.querySelector(".timerText");
  let timeLeft = 29;

  const timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft === 0) {
      clearTimeout(timerId);
      timerText.textContent = "TIME UP!!!";
    } else timerText.textContent = timeLeft + " seconds remaining";
    timeLeft--;
  }

  const randomBig0 = bigNums[Math.floor(Math.random() * bigNums.length)];
  const randomBig1 = bigNums[Math.floor(Math.random() * bigNums.length)];
  const randomLittle0 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const randomLittle1 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const randomLittle2 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const randomLittle3 = lilNums[Math.floor(Math.random() * lilNums.length)];
  const lilArr = [randomLittle0, randomLittle1, randomLittle2, randomLittle3];
  const bigArr = [randomBig0, randomBig1];
  let final;

  function total(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < bigArr.length; i++) {
    document.querySelector(`.bignumber${[i]}`).textContent = bigArr[i];
  }
  for (let i = 0; i < lilArr.length; i++) {
    document.querySelector(`.lilnumber${[i]}`).textContent = lilArr[i];
  }

  document.querySelector(".final").textContent = total(100, 999);
  //Show in spans ".numbers" the big/lil nums they have to work with
  //Show the total they need to work out on the screen - needs html too
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".calculate").classList.remove("hidden");
  document.querySelector(".reset").classList.add("hidden");
  document.querySelector(".summary").classList.add("hidden");
});

for (let index = 0; index < 2; index++) {
  bigArrSelector[index].addEventListener("click", function () {
    bigArrSelector[index].classList.toggle("strike");
  });
}

for (let index = 0; index < 4; index++) {
  lilArrSelector[index].addEventListener("click", function () {
    lilArrSelector[index].classList.toggle("strike");
  });
}

// bigQuery1.addEventListener("click", function () {
//   bigQuery1.classList.toggle("strike");
// });

// bigQuery2.addEventListener("click", function () {
//   bigQuery2.classList.toggle("strike");
// });

// lilQuery1.addEventListener("click", function () {
//   lilQuery1.classList.toggle("strike");
// });

// lilQuery2.addEventListener("click", function () {
//   lilQuery2.classList.toggle("strike");
// });
// lilQuery3.addEventListener("click", function () {
//   lilQuery3.classList.toggle("strike");
// });

// lilQuery4.addEventListener("click", function () {
//   lilQuery4.classList.toggle("strike");
// });
