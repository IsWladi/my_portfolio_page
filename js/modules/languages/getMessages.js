import { LANGUAGES, MESSAGES } from "./messages.js";

// function for getting the language of the user
export function getLanguage() {
  let language = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];
  return language;
}
// function for getting the translations
export async function getTranslations(langCode) {
  const languages = LANGUAGES;
  const messages = MESSAGES;
  let changeLanguage = localStorage.getItem("language");

  // by default, the language is english
  let selectedLanguage = "english"; //

  if (langCode && changeLanguage == null) {
    for (let i = 0; i < langCode.length; i++) {
      const tempLang = langCode[i].trim().slice(0, 2);
      if (tempLang in languages) {
        selectedLanguage = languages[tempLang];
        break;
      }
    }
  }
  let translations = "";
  if (changeLanguage != null) {
    translations = messages[changeLanguage];
    selectedLanguage = changeLanguage;
  }
  else{
    translations = messages[selectedLanguage];
  }
  console.log("messages[selectedLanguage]", messages[selectedLanguage]);
  return {
    messages: translations,
    selectedLanguage: selectedLanguage,
  }
}
