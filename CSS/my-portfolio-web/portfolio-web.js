function scrollToContact() {
document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}


const form = document.getElementById("contactForm");


form.addEventListener("submit", function (e) {
e.preventDefault();
alert("Message sent successfully! 🚀");
form.reset();
});