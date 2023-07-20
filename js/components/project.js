//Component for the stack section of the portfolio page
class ProjectComponent extends HTMLElement {
  constructor() {
    super();
    this.projectName = "";
    this.src = "";
    this.description = "";
    this.github = "";
    this.tags = "";
    this.create_structure = "";
  }
  connectedCallback() {
       this.projectName = this.getAttribute("name").replace(/_/g, " ");
       this.src = `./images/projects/${this.projectName.replace(/ /g, "-")}.png`;
       this.description =  this.getAttribute("desc");
       this.github = this.getAttribute("github");
       let create_tags = this.getAttribute("tags").split(",");
       for (let i = 0; i < create_tags.length; i++) {
         this.tags += `<span class="badge text-bg-info">${create_tags[i]}</span>`;
       }
       this.render();
  }
  style(){
    return `
      .proyecto p {
      font-size: 2rem ;
    }
    `
  }

  render() {
    this.innerHTML = `
            <style>${this.style()}</style>
            <div class="col-12 col-md-6 col-lg-4 parent">
              <div class="proyecto">
                <img src="${this.src}" alt="Project ${this.projectName}" />
                <div class="overlay">
                  <p class="title-font">${this.projectName}</p>
                  <div class="iconos-contenedor">
                    <a href="${this.github}" target="_blank" rel="noopener noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <div class="text-wrap">${this.description}</div>
                  </div>
                  <div class="badges-contenedor">
                  ${this.tags}
                  </div>
                </div>
              </div>
            </div>
       `;
  }
}

customElements.define("project-component", ProjectComponent);
