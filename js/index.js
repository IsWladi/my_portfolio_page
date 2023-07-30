// Import components
import "./components/languageSelector.js";
import "./components/stack.js";
import "./components/project.js";
import "./components/upButton.js";
// Import modules and functions
import { setAllMessages } from "./modules/languages/setMessages.js";
import { navbarCollapseButton } from "./modules/navbar/navbarCollapseButton.js";
import { manageLanguageComponents } from "./components/componentsManagement/languageSelectorManagement.js";
import { manageStackComponents } from "./components/componentsManagement/stackManagement.js";

// Set translated messages to the DOM
setAllMessages();
// Event listener to the navbar for changing the navbar´s icon when the navbar is collapsed
navbarCollapseButton();

// Give funcitonality to the components
manageLanguageComponents();
manageStackComponents();
