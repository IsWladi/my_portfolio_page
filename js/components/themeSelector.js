//Component for the language selector
class ThemeSelectorComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.querySelector(".theme-selector").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("themeSelector", { detail: "themeSelector", bubbles: true, composed: true }));
    });
  }

  style() {
    return `
      .dark-color-scheme button.theme-selector {
        color: var(--dark-color);
        background-color: var(--dark-background-color-navbar);
      }
      button.theme-selector{
        color: var(--light-color);
        background-color: var(--light-background-color-navbar);
        margin-left: 1rem;
        padding: 0px 2px;
        border: 1px solid #444;
      }
    `;
  }

  render() {
    this.innerHTML = `
        <style>${this.style()}</style>
        <button class="theme-selector">Theme</button>
       `;
  }
}

customElements.define("theme-selector-component", ThemeSelectorComponent);
