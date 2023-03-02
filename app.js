let count = 0;

let incrementButton = document.getElementById("plusButton");
let decrementButton = document.getElementById("minusButton");

let number = document.getElementById("number");

function incrementation() {
  count++;
  number.innerHTML = count;
  if (count == 0) {
    window.alert("The count is 0");
  }
}

function decrementation() {
  count--;
  number.innerHTML = count;
  if (count == 0) {
    window.alert("The count is 0");
  }
}

incrementButton.addEventListener("click", incrementation);
decrementButton.addEventListener("click", decrementation);
