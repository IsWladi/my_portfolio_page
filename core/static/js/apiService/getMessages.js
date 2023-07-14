// function for getting the language of the user
export function getLanguage() {
  let language = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];
  return language;
}

// function for getting the translations of the api
export async function getApiTranslations(langCode) {
  const response = await fetch("http://127.0.0.1:9000/translations/languages/");
  const languages = await response.json();

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

  return fetch(
    `http://127.0.0.1:9000/translations/all/?language=${selectedLanguage}`
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error: translations not working", error);
    });
}
