const form = document.querySelector(".cta-form");
const email = document.querySelector(".cta-form__input");
const emailError = document.querySelector(".cta-form__error");
const emailErrorMessage = document.querySelector(".cta-form__error-message");
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isEmpty = (input) => input.length === 0;
const isIncorrectFormat = (input) => !emailRegExp.test(input);
const showError = (message) => {
  email.classList.add("cta-form__input--error");
  emailError.classList.add("cta-form__error--visible");
  emailErrorMessage.textContent = message;
  email.blur();
};
const submit = (input) => {
  email.classList.remove("cta-form__input--error");
  emailError.classList.remove("cta-form__error--visible");
  emailErrorMessage.textContent = "";
  email.blur();
  console.log(`Submitted email address: ${input}`);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEmpty(email.value)) {
    showError("Whoops! It looks like you forgot to add your email");
  } else if (isIncorrectFormat(email.value)) {
    showError("Please provide a valid email address");
  } else {
    submit(email.value);
    email.value = "";
  }
});
