import { getLanguage, getApiTranslations } from "./getMessages.js";

async function getMessages() {
  const userLanguages = getLanguage();
  const translations = await getApiTranslations(userLanguages);
  return translations;
}

// Set all the messages in the DOM
 function setStackMessages(stackMessages){
  console.log("stackMessages desde setMessages.js", stackMessages);
  return null
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

let messages = await getMessages();
console.log("Messages:", messages);

// set the messages to the DOM

let generalMessages = {
  page: messages.page,
  about_me: messages.about_me,
};
setGeneralMessages(generalMessages);
setStackMessages(messages.stack);
setProjectMessages(messages.projects);

