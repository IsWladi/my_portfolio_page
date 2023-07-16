// function for getting the language of the user
export function getLanguage() {
  let language = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];
  return language;
}
// function for getting the translations of the json file
export async function getTranslations(langCode) {
fetch('./messages/languages.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder y utilizar los datos del archivo JSON
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error al cargar el archivo JSON:', error);
  });

}

// function for getting the translations of the api
export async function getApiTranslations(langCode) {
  const response = await fetch("https://my_fortfolio_api-1-v4509041.deta.app/translations/languages/");
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
    `https://my_fortfolio_api-1-v4509041.deta.app/translations/all/?language=${selectedLanguage}`
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error: translations not working", error);
    });
}
