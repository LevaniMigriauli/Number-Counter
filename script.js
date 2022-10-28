"use strict";

let counterNumber = document.querySelector(".number");
let btnDecrease = document.querySelector(".btn-decrease");
let btnReset = document.querySelector(".btn-reset");
let btnIncrease = document.querySelector(".btn-increase");

btnDecrease.addEventListener("click", () => {
  counterNumber.innerText--;
  if (counterNumber.innerText < 0) counterNumber.style.color = "red";
  if (counterNumber.innerText == 0) counterNumber.style.color = "black";
});

btnReset.addEventListener("click", () => {
  counterNumber.textContent = 0;
  counterNumber.style.color = "#000";
});

btnIncrease.addEventListener("click", () => {
  counterNumber.textContent++;
  if (counterNumber.innerText > 0) counterNumber.style.color = "green";
  if (counterNumber.innerText == 0) counterNumber.style.color = "black";
});
