//Component for the language selector
class LanguageSelectorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.languagesKeys = [];
    this.languagesValues = [];
  }
  connectedCallback() {
    this.languagesKeys = this.getAttribute("languagesKeys").split(",");
    this.languagesValues = this.getAttribute("languagesValues").split(",");
    this.render();
    // Give functionality for the language selector
    let langSelector = this.shadowRoot.querySelector("#languages");

    // Add the change event to the language selector
    langSelector.addEventListener("change", function () {
      // Get the selected option
      let selectedOption = langSelector.options[langSelector.selectedIndex];

      // Update the text of the selector
      localStorage.setItem("language", selectedOption.textContent.toLowerCase());
    });
  }
  style() {
    return `
    `;
  }

  render() {
    let renderedLanguages = "";
    for (let i = 0; i < this.languagesKeys.length; i++) {
      this.languagesKeys[i] = this.languagesKeys[i].trim();
      this.languagesValues[i] = this.languagesValues[i].trim();

      const capitalizedLanguage =
        this.languagesValues[i].charAt(0).toUpperCase() +
        this.languagesValues[i].slice(1);
      renderedLanguages += `<option class="lang-selector-option" value="${this.languagesKeys[i]}">${capitalizedLanguage}</option>`;
    }
    this.shadowRoot.innerHTML = `
            <select id="languages">
              ${renderedLanguages}
            </select>
       `;
  }
}

customElements.define("language-selector-component", LanguageSelectorComponent);
