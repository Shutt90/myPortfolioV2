const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");
const btnThree = document.querySelector(".btn-three");
const modal1 = document.querySelector(".modal-one");
const modal2 = document.querySelector(".modal-two");
const modal3 = document.querySelector(".modal-three");
const cross = document.querySelectorAll(".exit");

const arr = [modal1, modal2, modal3];

const loopOver = () => {
  for (let i of arr) {
    i.classList.add("hidden");
  }
};

const modalSelect = function (modal) {
  loopOver();
  modal.classList.remove("hidden");
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

for (let i = 0; i < cross.length; i++) {
  cross[i].addEventListener("click", function () {
    loopOver();
  });
}
