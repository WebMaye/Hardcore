// Get DOM elements
const passwordLengthInput = document.getElementById('password-length');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.querySelector('.generate-btn');
const generatedPassword = document.getElementById('generated-password');
const copyBtn = document.querySelector('.copy-btn');

// Character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Function to generate password
function generatePassword() {
  const passwordLength = passwordLengthInput.value;

  // Validate password length
  if (passwordLength < 5 || passwordLength > 30) {
    alert('Password length must be between 5 and 30 characters.');
    return;
  }

  let password = '';
  let allowedChars = '';

  // Determine allowed characters based on user preferences
  if (lowercaseCheckbox.checked) allowedChars += lowercaseChars;
  if (uppercaseCheckbox.checked) allowedChars += uppercaseChars;
  if (numbersCheckbox.checked) allowedChars += numberChars;
  if (symbolsCheckbox.checked) allowedChars += symbolChars;

  // Check if at least one character set is selected
  if (!allowedChars) {
    alert('Please select at least one character set.');
    return;
  }

  // Generate password
  for (let i = 0; i < passwordLength; i++) {
    password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }

  // Display generated password
  generatedPassword.textContent = password;
}

// Function to copy password to clipboard
function copyPassword() {
  const passwordText = generatedPassword.textContent;
  navigator.clipboard.writeText(passwordText);
  alert('Password copied to clipboard!');
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);