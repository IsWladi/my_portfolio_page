import { LANGUAGES, MESSAGES } from "./messages.js";

// function for getting the language of the user
export function getLanguage() {
  let language = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];
  return language;
}
// function for getting the translations
export async function getApiTranslations(langCode="english") {
  const languages = LANGUAGES.json();
  const messages = MESSAGES.json();

  // by default, the language is english
  let selectedLanguage = "english"; //

  if (langCode) {
    for (let i = 0; i < langCode.length; i++) {
      const tempLang = langCode[i].trim().slice(0, 2);
      if (tempLang in languages) {
        selectedLanguage = languages[tempLang];
        break;
      }
    }
  }

  return messages[selectedLanguage];
}
