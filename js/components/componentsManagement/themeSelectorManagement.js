export function manageThemeComponents(){
  // Set light mode if it was set before
  let themeMode = localStorage.getItem("themeMode");
  if (themeMode === "light") {
    let body = document.querySelector("body");
    body.classList.remove("dark-color-scheme");
  }

  // Capture custom event
  document
    .querySelector("nav.navbar")
    .addEventListener("themeSelector", function (e) {
      let body = document.querySelector("body");
      body.classList.toggle("dark-color-scheme");
      let darkModeStatus = body.classList.contains("dark-color-scheme");
      if (darkModeStatus) {
        // Set dark mode
        localStorage.setItem("themeMode", "dark");
      }
      else {
        // Remove dark mode
        localStorage.setItem("themeMode", "light");
      }
    });
}
