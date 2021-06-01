const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");

const arr = [modalOne, modalTwo, modalThree];

const modalSelect = function (modal) {
  for (let i of arr) {
    i.classList.add("hidden");
  }
  return modal.classList.remove("hidden");
  // if (current.classList.contains("hidden")) {
  //   modals.classList.add("hidden");
  // }
  // return current.classList.add("hidden");
};

btnOne.addEventListener("click", (e) => {
  modalSelect(modalOne);
});

btnTwo.addEventListener("click", (e) => {
  modalSelect(modalTwo);
});
btnThree.addEventListener("click", (e) => {
  modalSelect(modalThree);
});

// body.addEventListener("click", function () {
//   modalSelect();
// });
