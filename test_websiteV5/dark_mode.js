function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var userPreference = localStorage.getItem("dark-mode");
    if (userPreference === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);