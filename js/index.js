// Import components
import "./components/languageSelector.js";
import "./components/stack.js";
import "./components/project.js";
import "./components/upButton.js";
// Import modules and functions
import { setAllMessages } from "./modules/languages/setMessages.js";
import { manageStackComponents } from "./components/componentsManagement/stackManagement.js";

// Set translated messages to the DOM
setAllMessages();

// Give funcitonality to the components
manageStackComponents();
