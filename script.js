const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const isDark = theme === "dark";

  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀" : "☾";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
    );

    themeToggle.setAttribute(
      "aria-pressed",
      String(isDark)
    );
  }
}

const currentTheme =
  document.documentElement.dataset.theme || "light";

setTheme(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const activeTheme =
      document.documentElement.dataset.theme;

    const newTheme =
      activeTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

/*
  Remove the loading class after the initial theme
  has already been applied.
*/
requestAnimationFrame(() => {
  document.documentElement.classList.remove("theme-loading");
});
