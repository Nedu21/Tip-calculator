"use strict;";

const bill = document.getElementById("bill");
const noOfPeople = document.getElementById("persons");
const tip = document.querySelector(".tipcontainer__inputs--tips");
const customTip = document.querySelector(".custom");

const errorMsg = document.querySelector(".errormsg");
const poeple = document.getElementById("persons");

const tipAmount = document.getElementById("tip__amount");
const tipTotalAmount = document.getElementById("tip__total--Amount");
const resetBtn = document.querySelector(
  ".tipcontainer__display--button button"
);

// Change the color of the reset button
if (tipTotalAmount.innerText !== "$0.00") {
  resetBtn.classList.add("reset__active");
}

noOfPeople.addEventListener("input", function (e) {
  const noOfPeopleValue = +e.target.value;
  console.log(noOfPeopleValue);

  if (noOfPeopleValue === 0) {
    errorMsg.style.visibility = "initial";
    poeple.style.outline = "2px solid #c65139";
  } else if (noOfPeopleValue > 0) {
    errorMsg.style.visibility = "hidden";
    poeple.style.outline = "2px solid #26c0ab";
  }
});
