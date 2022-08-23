"use strict;";

const bill = document.getElementById("bill");
const noOfPeople = document.getElementById("persons");
const tip = document.querySelector(".tipcontainer__inputs--tips");
const customTip = document.querySelector(".custom");

const tipAmount = document.getElementById("tip__amount");
const tipTotalAmount = document.getElementById("tip__total--Amount");
const resetBtn = document.querySelector(
  ".tipcontainer__display--button button"
);

// Change the color of the reset button
if (tipTotalAmount.innerText !== "$0.00") {
  resetBtn.classList.add("reset__active");
}
