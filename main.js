"use strict";

//constantes
const firstName = document.querySelector(".js-firstname");
const lastName = document.querySelector(".js-lastname");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");

const errorName = document.querySelector(".js-errorName");
const errorLast = document.querySelector(".js-errorLast");
const errorEmail = document.querySelector(".js-errorEmail");
const errorPassword = document.querySelector(".js-errorPassword");

const button = document.querySelector(".js-submit");

//funciones
const handleClick = (ev) => {
  ev.preventDefault();
  validateEmpty(firstName.value, firstName, errorName, "First Name");
  validateEmpty(lastName.value, lastName, errorLast, "Last Name");
  validateEmpty(email.value, email, errorEmail, "Email Adress");
  validateEmpty(password.value, password, errorPassword, "Password");
};

// function validateEmail(fieldValue) {
//   let regEx = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
// }
const validateEmpty = (fieldValue, divInput, divError, nameError) => {
  console.log(fieldValue);
  if (fieldValue.length === 0) {
    showError(divInput, divError, nameError);
  } else {
    hideError(divInput, divError);
  }
};
function showError(divInput, divError, nameError) {
  divInput.style.border = "1px solid red";
  divError.innerHTML = `< <img class="icon-error" src="./images/icon-error.svg" alt="error"
/> <span class="message-error">${nameError} cannot be empty</span> `;
}
function hideError(divInput, divError) {
  divInput.style.border = "1px solid hsl(26, 25%, 77%)";
  divError.innerHTML = "";
}

//eventos
button.addEventListener("click", handleClick);
