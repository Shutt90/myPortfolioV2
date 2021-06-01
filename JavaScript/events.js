const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const modal1 = document.querySelector(".modal-one");
const modal2 = document.querySelector(".modal-two");
const modal3 = document.querySelector(".modal-three");

const arr = [modal1, modal2, modal3];

const loopOver = () => {
  for (let i of arr) {
    i.classList.add("hidden");
  }
};

const modalSelect = function (modal) {
  loopOver();
  modal.classList.remove("hidden"), body.classList.add("blur");
};

btnOne.addEventListener("click", (e) => {
  modalSelect(modal1);
});

btnTwo.addEventListener("click", (e) => {
  modalSelect(modal2);
});
btnThree.addEventListener("click", (e) => {
  modalSelect(modal3);
});

document.querySelector(".exit").addEventListener("click", function () {
  loopOver();
});
