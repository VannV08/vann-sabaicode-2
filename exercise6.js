function isStrongPassword(password) {
    // Minimum length requirement
    const minLength = 8;

    if (password.length >= minLength) {
        return true; // Password meets the minimum length requirement
    } else {
        return false; // Password is not strong
    }
}

// Example usage:
const userPassword = "MySecurePassword123";
const isPasswordStrong = isStrongPassword(userPassword);

if (isPasswordStrong) {
    console.log("Password is strong!");
} else {
    console.log("Password is not strong. It should have at least 8 characters.");
}
