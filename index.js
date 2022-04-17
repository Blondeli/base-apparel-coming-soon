// Create function to display error message
function displayErrorMessage(event) {
  event.preventDefault();
  let email = document.querySelector("form").elements["email"].value;
  console.log(email);

  let emailField = document.querySelector("#email-input");
  let errorIcon = document.querySelector("#error-icon");
  let errorMessage = document.querySelector("#error-message");

  if ((email.length === 0) || (!(email.includes("@")))) {
    emailField.style.border = "2px solid red";
    errorIcon.classList.remove("hide");
    errorMessage.classList.remove("hide");
  }
}


// Add event listener for submit button
let submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", displayErrorMessage);