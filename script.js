const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const startingTheme =
  savedTheme || (systemPrefersDark ? "dark" : "light");

setTheme(startingTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const isDark = theme === "dark";

  themeIcon.textContent = isDark ? "☀" : "☾";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  themeToggle.setAttribute("aria-pressed", String(isDark));
}
