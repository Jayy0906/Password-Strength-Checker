document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const length = document.getElementById("length");
    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const number = document.getElementById("number");
    const special = document.getElementById("special");

    // Check length
    if (password.length >= 8) {
        length.classList.remove("text-danger");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("text-danger");
    }

    // Check for uppercase letter
    if (/[A-Z]/.test(password)) {
        uppercase.classList.remove("text-danger");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("text-danger");
    }

    // Check for lowercase letter
    if (/[a-z]/.test(password)) {
        lowercase.classList.remove("text-danger");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("text-danger");
    }

    // Check for number
    if (/\d/.test(password)) {
        number.classList.remove("text-danger");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("text-danger");
    }

    // Check for special character
    if (/[^A-Za-z0-9]/.test(password)) {
        special.classList.remove("text-danger");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("text-danger");
    }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
});
