const darkMode = document.querySelector(".dark__mode");
const lightMode = document.querySelector(".light__mode");
const body = document.querySelector("body");

let localeMode = localStorage.getItem("mode");

if (localeMode) {
  body.classList.add("dark-mode");
  darkMode.classList.add("hidden");
  lightMode.classList.remove("hidden");
}

// toggle mode

const toggleMode = () => {
  lightMode.classList.toggle("hidden");
  darkMode.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkMode.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "dark");
});
lightMode.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "");
});
