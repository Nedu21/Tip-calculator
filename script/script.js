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

let billValue;
let noOfPeopleValue;
// let customTipValue;
let customTipPercentage;
// let tipValue;
let tipPercentage;
let tipPerPerson;
let totalPerPerson;

// Change the color of the reset button
if (tipTotalAmount.innerText !== "$0.00") {
  resetBtn.classList.add("reset__active");
}

tip.addEventListener("click", function (e) {
  if (e.target.classList.contains("tip")) {
    calculateTip(e);
  }
});

customTip.addEventListener("input", function () {
  calculateTip();
});

noOfPeople.addEventListener("input", function () {
  calculateTip();
});

bill.addEventListener("input", function () {
  calculateTip();
});

const calculateTip = function (e) {
  // Getting the bill value
  billValue = +bill.value;

  // Getting the number of people value
  noOfPeopleValue = +noOfPeople.value;

  // Getting the custom tip value
  const customTipValue = +customTip.value;
  customTipPercentage = customTipValue / 100;

  // Getting the tip value
  const tipValue = +e.target.dataset.value;
  tipPercentage = tipValue / 100;

  // Calculating the tip amount per person
  calcTipPerPerson(billValue, tipPercentage, noOfPeopleValue);

  // Calculating the total money per person
  calcTotalPerPerson(billValue, tipPerPerson, noOfPeopleValue);

  // Changing the tip amount value on the DOM

  // Changing the total per person value on the DOM
};

const calcTipPerPerson = function (billValue, tipPercentage, noOfPeopleValue) {
  tipPerPerson = (billValue * tipPercentage) / noOfPeopleValue;
  console.log(tipPerPerson);
};

const calcTotalPerPerson = function (billValue, tipPerPerson, noOfPeopleValue) {
  totalPerPerson = (billValue + tipPerPerson) / noOfPeopleValue;
  // console.log(totalPerPerson);
};
