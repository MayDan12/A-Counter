const number = document.getElementById("value");
const btnDecrease = document.querySelector(".decrease");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");

let count = 0;
const initalState = function () {
  count = 0;
  number.textContent = 0;
  number.style.color = "black";
};
btnIncrease.addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    number.style.color = "green";
  } else if (count === 0) {
    number.style.color = "black";
  }
});

btnDecrease.addEventListener("click", function () {
  count--;
  value.textContent = count;
  if (count < 0) {
    number.style.color = "red";
  } else if (count === 0) {
    number.style.color = "black";
  }
});

btnReset.addEventListener("click", initalState);
