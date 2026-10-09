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
 
// ---------- Live GitHub repos (Fetch API) ----------
const repoStatus = document.getElementById("repoStatus");
const repoList = document.getElementById("repoList");
 
if (repoStatus && repoList) {
  const GITHUB_USERNAME = "munga273";
  const apiUrl = "https://api.github.com/users/" + GITHUB_USERNAME + "/repos?sort=updated&per_page=6";
 
  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub API responded with status " + response.status);
      }
      return response.json();
    })
    .then(function (repos) {
      repoStatus.textContent = "";
 
      if (repos.length === 0) {
        repoStatus.textContent = "No public repositories found yet.";
        return;
      }
 
      repos.forEach(function (repo) {
        const card = document.createElement("div");
        card.className = "repo-card";
 
        const title = document.createElement("h3");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = repo.name;
        title.appendChild(link);
 
        const description = document.createElement("p");
        description.textContent = repo.description ? repo.description : "No description provided.";
 
        const meta = document.createElement("p");
        meta.className = "repo-meta";
        meta.textContent = "⭐ " + repo.stargazers_count + "  ·  " + (repo.language || "N/A");
 
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(meta);
        repoList.appendChild(card);
      });
    })
    .catch(function (error) {
      repoStatus.textContent = "Couldn't load repositories right now. Please try again later.";
      repoStatus.classList.add("is-error");
      console.error("GitHub API fetch error:", error);
    });
}
 
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
 