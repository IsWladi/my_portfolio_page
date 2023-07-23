import { setAllMessages } from "../../modules/languages/setMessages.js";
export function manageLanguageComponents() {
  // Capture custom event
  document
    .querySelector("nav.navbar")
    .addEventListener("languageStatus", function (e) {
      console.log(
        "The language has changed to",
        e.detail.language.charAt(0).toUpperCase() + e.detail.language.slice(1)
      );
      // toggle language-has-changed class to the body for trigger an animation
      document.querySelector("body").classList.toggle("language-has-changed");
      setAllMessages();
      setTimeout(() => {
        document.querySelector("body").classList.toggle("language-has-changed");
      }, 1000);
    });
}
