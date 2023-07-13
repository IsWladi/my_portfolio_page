class GoInitButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <a href="#navbar-section">
        <button type="button" class="go-init-button">Go Up</button>
      </a>
      <style>
      ${this.style()}
      </style>
    `;
  }
  style(){
    return `
    button {
      border-radius: 30%;
      background-color: grey;
    }
    `;
  }
}

customElements.define('go-init-button', GoInitButton);
