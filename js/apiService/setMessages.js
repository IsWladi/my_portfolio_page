import { getLanguage, getApiTranslations } from "./getMessages.js";

function getMessages() {
  const userLanguages = getLanguage();
  const translations = getApiTranslations(userLanguages);
  return translations;
}

// Set all the messages in the DOM
 function setStackMessages(stackMessages){
  console.log("stackMessages desde setMessages.js", stackMessages);
  // Insert title and description
  document.getElementById("stack-title").innerHTML = stackMessages.message;
  document.getElementById("stack-desc").innerHTML = stackMessages.description;

  // Create components for each stack
  let stacks = "";
  // iterate over object
  for (const [key, value] of Object.entries(stackMessages)) {
    if (key == "description" || key == "message") {
      continue;
    }
    // create component
    const stack = `
      <stack-component name="${key}" desc="${value.desc}" stars_full="${value.stars_full}" stars_half="${value.stars_half}" ></stack-component>
  `
    stacks += stack;
  }
  document.querySelector("#stack-columna .badges-contenedor").innerHTML = stacks;
}

 function setProjectMessages(projectMessages){
  console.log("projectMessages desde setMessages.js", projectMessages);
  return null
}

 function setGeneralMessages(generalMessages){
  //title
  document.getElementById("title").innerHTML = generalMessages.page.title;
  // navbar
  const navbar = generalMessages.page.navbar;
  document.getElementById("about-me").innerHTML = navbar.about_me
  document.getElementById("projects").innerHTML = navbar.projects
  document.getElementById("testimonials").innerHTML = navbar.testimonials
  document.getElementById("contact").innerHTML = navbar.contact
  //presentation
  const presentation = generalMessages.about_me;
  document.getElementById("presentation").innerHTML = presentation.presentation;
  document.getElementById("litle-presentation").innerHTML = presentation.litle_presentation;
  // about me
  const aboutMe = generalMessages.about_me;
  document.getElementById("about-me-meet-me").innerHTML = aboutMe.meet_me;
  document.getElementById("about-me-big-presentation").innerHTML = aboutMe.big_presentation;
}

let messages = getMessages();
console.log("Messages:", messages);

// set the messages to the DOM

let generalMessages = {
  page: messages.page,
  about_me: messages.about_me,
};
setGeneralMessages(generalMessages);
setStackMessages(messages.stack);
setProjectMessages(messages.projects);
console.log("generalMessages", generalMessages);
console.log("stackMessages", messages.stack);
console.log("projectMessages", messages.projects);
