// JavaScript for the sign-in page

// Function to validate the sign-in form
function validateSignInForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form elements
  const userInput = document.querySelector("input[name='full Name']");
  const password = document.querySelector("input[name='password']");

  // Validation rules
  const emailOrPhoneRegex = /^(\+?\d{10,12}|[^\s@]+@[^\s@]+\.[^\s@]+)$/; // Matches phone or email format

  let isValid = true;

  // Validate email or phone input
  if (!emailOrPhoneRegex.test(userInput.value.trim())) {
    alert("Please enter a valid email address or phone number.");
    isValid = false;
  }

  // Validate password
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Sign-in successful!");
    // Here you could add code to authenticate with a backend server
    console.log({
      userInput: userInput.value,
      password: password.value,
    });
  }
}

// Function to handle alternative sign-in buttons
function handleAltSignIn(provider) {
  alert(`Signing in with ${provider}...`);
  // Placeholder: Add provider-specific authentication logic here
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Sign-in form validation
  const signinForm = document.getElementById("signinForm");
  signinForm.addEventListener("submit", validateSignInForm);

  // Alternative sign-in buttons
  const googleBtn = document.querySelector(".alt-signinBtn.google");
  const facebookBtn = document.querySelector(".alt-signinBtn.facebook");

  googleBtn.addEventListener("click", () => handleAltSignIn("Google"));
  facebookBtn.addEventListener("click", () => handleAltSignIn("Facebook"));
});
