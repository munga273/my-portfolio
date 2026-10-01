// ---------- Expandable project cards ----------
const projectCards = document.querySelectorAll(".project-card");
 
projectCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-expanded");
  });
 
  // Allow keyboard users to expand with Enter or Space
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.classList.toggle("is-expanded");
    }
  });
});
 
// ---------- Contact form validation ----------
const contactForm = document.getElementById("contactForm");
 
if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
 
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");
 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
 
    let isValid = true;
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.hidden = true;
 
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }
 
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
 
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }
 
    if (isValid) {
      formSuccess.hidden = false;
      contactForm.reset();
    }
  });
}
 