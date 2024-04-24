// Exercise 3
var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var span = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
});

span.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
});
