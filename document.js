document.addEventListener("DOMContentLoaded", function () {
    // Form Validation
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.querySelector("input[placeholder='Name']").value.trim();
        const email = document.querySelector("input[placeholder='Email']").value.trim();
        const subject = document.querySelector("input[placeholder='Subject']").value.trim();
        const message = document.querySelector("textarea").value.trim();
        
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        alert("Form submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
