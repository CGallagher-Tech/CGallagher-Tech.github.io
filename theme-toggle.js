// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // Restore saved theme
  const saved = localStorage.getItem("theme");
  if (saved === "cyber") {
    document.body.classList.add("cyber");
    document.documentElement.classList.add("cyber"); // <html>
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("cyber");
      document.documentElement.classList.toggle("cyber"); // keep <html> in sync
      localStorage.setItem(
        "theme",
        document.body.classList.contains("cyber") ? "cyber" : "default"
      );
    });
  }
});

