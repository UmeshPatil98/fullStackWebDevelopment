function validatePassword(password1, confirmPassword) {
  if (password1 === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful.");
  }
}

// Example usage
const password1 = "Abc123";
const confirmPassword = "Abc12";


// another mehtod used//

validatePassword(password, confirmPassword);

function validatePassword(password) {
    // Criteria for password validation
    const minLength = 8; // Minimum length of the password
    const hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    const hasNumber = /[0-9]/.test(password); // At least one digit
    const hasSpecialChar = /[!@#$%^&*]/.test(password); // At least one special character
  
    // Check if the password meets all the criteria
    if (
      password.length >minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    ) {
      console.log("Password is valid");
    } else {
      console.log("Password is invalid");
    }
  }
  
  // Example usage
  const password = "Abc123@";
  
  validatePassword(password);
  

