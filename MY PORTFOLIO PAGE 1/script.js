const text = ["Web Developer", "Designer", "Learner"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    document.getElementById("typing").innerText = current;

    if (j == text[i].length) isDeleting = true;
    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, 100);
}

type();

function toggleDark() {
  document.body.classList.toggle("dark");
}

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});