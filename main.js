function login_status() {
//Validation
const form = document.getElementById("form")
const submitButton = document.getElementById("Login"); 

form.addEventListener("required", function() {
    if (form.checkValidity()) {
        submitButton.enabled = true
    }
    else {
        submitButton.enabled = false;
    }
});
