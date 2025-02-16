document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-container");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const otpButton = document.querySelector(".btn-otp");

    otpButton.addEventListener("click", function() {
        let valid = true;
        let name = nameInput.value.trim();
        let phone = phoneInput.value.trim();

        if (name === "") {
            alert("Please enter your name.");
            valid = false;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            valid = false;
        }

        if (valid) {
            alert("OTP sent successfully!");
        }
    });
});