export function manageThemeComponents(){
  // Capture custom event
  document
    .querySelector("nav.navbar")
    .addEventListener("themeSelector", function (e) {
      let body = document.querySelector("body");
      body.classList.toggle("dark-color-scheme");
    });
}
