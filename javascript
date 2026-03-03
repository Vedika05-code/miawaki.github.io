// Responsive Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active");
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name.length < 3) {
        formMessage.textContent = "Name must be at least 3 characters.";
        formMessage.style.color = "red";
        return;
    }

    if(!/^\S+@\S+\.\S+$/.test(email)) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    if(phone.length < 10) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    form.reset();
});
