// //Grab all the class items
// const btn = [btnOne, btnTwo, btnThree]

// for (i = 0; i < btn.length; i++) {
//   btn[i]
// }

// console.log(btn.entries());
const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");

const visible = function (modal) {
  modal.classList.toggle("hidden");
};

btnOne.addEventListener("click", (e) => {
  visible(modalOne);
});
btnTwo.addEventListener("click", (e) => {
  visible(modalTwo);
});
btnThree.addEventListener("click", (e) => {
  visible(modalThree);
});
