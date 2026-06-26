// Get radio buttons
const emailRadio = document.getElementById("email");
const phoneRadio = document.getElementById("phone");
const bothRadio = document.getElementById("both");

// Get input field containers
const emailField = document.getElementById("email-field");
const phoneField = document.getElementById("phone-field");

// Get input elements
const emailInput = document.getElementById("email-address");
const phoneInput = document.getElementById("phone-number");

function updateContactFields() {
  if (emailRadio.checked) {
    emailField.style.display = "block";
    phoneField.style.display = "none";

    emailInput.required = true;
    phoneInput.required = false;
  } else if (phoneRadio.checked) {
    emailField.style.display = "none";
    phoneField.style.display = "block";

    emailInput.required = false;
    phoneInput.required = true;
  } else if (bothRadio.checked) {
    emailField.style.display = "block";
    phoneField.style.display = "block";

    emailInput.required = true;
    phoneInput.required = true;
  }
}

// Add event listeners
emailRadio.addEventListener("change", updateContactFields);
phoneRadio.addEventListener("change", updateContactFields);
bothRadio.addEventListener("change", updateContactFields);

// Run on page load
updateContactFields();