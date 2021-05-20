const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");

const visible = function (modal) {
  if (modal.classList.contains("hidden")) {
    return modal.classList.remove("hidden");
  } else if (
    !modalOne.classList.contains("hidden") ||
    !modalTwo.classList.contains("hidden") ||
    !modalThree.classList.contains("hidden")
  ) {
    modalOne.classList.toggle("hidden");
    modalTwo.classList.toggle("hidden");
    modalThree.classList.toggle("hidden");
  }
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
