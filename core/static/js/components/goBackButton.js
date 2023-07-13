class goInitAnchor extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.render();
  }

  render() {
    const anchor = document.createElement('a');
    anchor.href = "#navbar-section";

    const button = document.createElement('button');
    button.className = "btn btn-primary";
    button.textContent = "Go Up";

    anchor.appendChild(button);

    this.shadowRoot.appendChild(anchor);

    const style = document.createElement('style');
    style.textContent = this.style();
    this.shadowRoot.appendChild(style);
  }
  style() {
    return `
    button {
      border-radius: 30%;
    }`;
  }
}

customElements.define('go-init-anchor', goInitAnchor);
