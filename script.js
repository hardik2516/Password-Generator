// Password generation logic
const passwordbox = document.getElementById('Password');
const length = 12;  // Length of the password
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()-_=+[{]};:,.<>/?';
const allChars = uppercase + lowercase + numbers + specialChars;

// Function to generate the password
function generatePassword() {
    let password = '';
    // Ensuring that the password has at least one character from each set
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Filling up the rest of the password
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Display the generated password in the input field
    passwordbox.value = password;
}

// Function to copy the password to clipboard
function copyPassword() {
    passwordbox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
