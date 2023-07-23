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
    this.description = this.getAttribute("desc");
    this.github = this.getAttribute("github");
    let create_tags = this.getAttribute("tags").split(",");
    for (let i = 0; i < create_tags.length; i++) {
      this.tags += `<span class="badge text-bg-info">${create_tags[i]}</span>`;
    }
    // Capitalize
    this.projectName = this.projectName.split(" ");
    for (let i = 0; i < this.projectName.length; i++) {
      this.projectName[i] =
        this.projectName[i].charAt(0).toUpperCase() +
        this.projectName[i].slice(1);
    }
    this.projectName = this.projectName.join(" ");

    this.description =
      this.description.charAt(0).toUpperCase() + this.description.slice(1);
    this.render();
  }
  style() {
    return `
      .proyecto {
        position: relative;
        width: 25rem;
        height: 20rem;
      }

      .proyecto:hover img {
        opacity: 0.2;
        transform: scale(1.1);
      }

      .proyecto:hover .overlay {
        opacity: 1;
      }

      .overlay .iconos-contenedor {
        display: flex;
      }

      .overlay i {
        color: black;
        font-size: 60px;
        margin: 10px;
      }

      p.title-font {
        font-size: 2.5rem;
      }
    `;
  }

  render() {
    this.innerHTML = `
            <style>${this.style()}</style>
    <div class="proyecto">
      <img loading="lazy" src="${this.src}" alt="Project ${this.projectName}" />
      <div class="overlay">
        <p class="title-font">${this.projectName}</p>
        <div class="iconos-contenedor">
          <a href="${this.github}" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
          <div class="text-wrap">${this.description}</div>
        </div>
        <div class="project-tags-container">${this.tags}</div>
      </div>
    </div>
       `;
  }
}

customElements.define("project-component", ProjectComponent);
