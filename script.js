
// Display welcome message
function showWelcome() {
    alert("Welcome to Bright Future University! We are happy to have you here.");
}

// Admission form submission
document.getElementById("admissionForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const program = document.getElementById("program").value;

    document.getElementById("formMessage").textContent =
        "Thank you, " + name +
        "! Your inquiry for " + program +
        " has been submitted successfully.";

    this.reset();
});
