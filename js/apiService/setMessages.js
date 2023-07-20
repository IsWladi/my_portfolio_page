import { getLanguage, getApiTranslations } from "./getMessages.js";

function getMessages() {
  const userLanguages = getLanguage();
  const translations = getApiTranslations(userLanguages);
  return translations;
}

// Set all the messages in the DOM
 function setStackMessages(stackMessages){
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
   let projects = "";
   // iterate over object
  for (const [key, value] of Object.entries(projectMessages)) {
    if (key == "description" || key == "message") {
      continue;
    }
    // create component
    const name = key;
    const desc = value.description;
    const github = value.github;
    const tags = value.tags.join(",");
    const project = `
          <project-component name="${name}" desc="${desc}" github="${github}" tags="${tags}"></project-component>
    `
    projects += project;
  }
   console.log(projects);
   document.querySelector(".proyectos-contenedor>div.row").innerHTML = projects;
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

let messagesPromise = getMessages();

messagesPromise.then(messages => {

  // set the messages to the DOM
  let generalMessages = {
    page: messages.page,
    about_me: messages.about_me,
  };
  setGeneralMessages(generalMessages);
  setStackMessages(messages.stack);
  setProjectMessages(messages.projects);
}).catch(error => {
  console.log("Error fetching messages:", error);
});
