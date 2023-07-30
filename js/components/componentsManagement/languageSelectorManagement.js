import { setAllMessages } from "../../modules/languages/setMessages.js";
export function manageLanguageComponents() {
  // Capture custom event
  document
    .querySelector("nav.navbar")
    .addEventListener("languageStatus", function (e) {
      // toggle language-has-changed class to the body for trigger an animation
      document.querySelector("body").classList.toggle("language-has-changed");
      setAllMessages();
      setTimeout(() => {
        document.querySelector("body").classList.toggle("language-has-changed");
      }, 1000);
    });
}
