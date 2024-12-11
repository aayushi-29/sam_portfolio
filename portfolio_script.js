document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById("contact-form").reset(); // Clear the form
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
