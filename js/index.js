import { setAllMessages } from "./modules/languages/setMessages.js";
import { manageStackComponents } from "./components/componentsManagement/stackManagement.js";

// Set translated messages to the DOM
  setAllMessages();

// Give funcitonality to the components
  setTimeout(function () {
    manageStackComponents();
}, 600); // Await for for the component being inserted

