//Component for the up button
class upButtonComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    style() {
      return `
      `;
    }
  
    render() {
  
      this.shadowRoot.innerHTML = `
              <select id="languages">
              </select>
         `;
    }
  }
  customElements.define("up-button-component", upButtonComponent);
  