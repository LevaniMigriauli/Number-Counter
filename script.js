"use strict";

let counterNumber = document.querySelector(".number");
let btnDecrease = document.querySelector(".btn-decrease");
let btnReset = document.querySelector(".btn-reset");
let btnIncrease = document.querySelector(".btn-increase");

btnDecrease.addEventListener("click", function () {
  counterNumber.innerText--;
});

btnReset.addEventListener("click", () => (counterNumber.textContent = 0));

btnIncrease.addEventListener("click", () => counterNumber.textContent++);
