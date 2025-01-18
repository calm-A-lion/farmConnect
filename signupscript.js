// JavaScript for the signup page

// Function to handle toggle button clicks
function farmerClick() {
  document.getElementById("farmerToggle").classList.add("active");
  document.getElementById("farmerToggle").classList.remove("inactive");
  document.getElementById("buyerToggle").classList.remove("active");
  document.getElementById("buyerToggle").classList.add("inactive");
}

function buyerClick() {
  document.getElementById("buyerToggle").classList.add("active");
  document.getElementById("buyerToggle").classList.remove("inactive");
  document.getElementById("farmerToggle").classList.remove("active");
  document.getElementById("farmerToggle").classList.add("inactive");
}

// Function to validate form inputs
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form elements
  const fullName = document.querySelector("input[name='full Name']");
  const farmName = document.querySelector("input[name='farm name']");
  const farmLocation = document.querySelector("input[name='farm location']");
  const produceType = document.getElementById("produce");
  const phoneNumber = document.querySelector("input[name='phone number']");
  const emailAddress = document.querySelector("input[name='email address']");
  const password = document.querySelector("input[name='password']");

  // Validation rules
  const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // Validate full name
  if (!fullName.value.trim()) {
    alert("Full Name is required.");
    isValid = false;
  }

  // Validate farm name
  if (!farmName.value.trim()) {
    alert("Farm Name is required.");
    isValid = false;
  }

  // Validate farm location
  if (!farmLocation.value.trim()) {
    alert("Farm Location is required.");
    isValid = false;
  }

  // Validate produce type
  if (produceType.value === "Type of Produce") {
    alert("Please select a type of produce.");
    isValid = false;
  }

  // Validate phone number
  if (!phoneRegex.test(phoneNumber.value)) {
    alert("Please enter a valid 10-digit phone number.");
    isValid = false;
  }

  // Validate email address
  if (!emailRegex.test(emailAddress.value)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Validate password
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
    // Here you could add code to send the data to the server (e.g., using fetch or AJAX)
    console.log({
      fullName: fullName.value,
      farmName: farmName.value,
      farmLocation: farmLocation.value,
      produceType: produceType.value,
      phoneNumber: phoneNumber.value,
      emailAddress: emailAddress.value,
    });
  }
}

// Attach event listener to the form
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", validateForm);
