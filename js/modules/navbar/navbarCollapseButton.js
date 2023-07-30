/**
 * Assigns functionality to the navbar collapse button.
 * Specifically, it changes the button's icon when the navbar is collapsed or expanded.
 */
export function navbarCollapseButton() {
  /**
   * Reference to the navbar collapse button element.
   * @type {HTMLElement}
   */
  const navbarToggler = document.querySelector(".navbar-toggler");
  /**
   * Indicates if the collapsed navbar has been clicked artificially (by the code).
   * @type {boolean}
   * @default false
   */
  let navbarFakeClicked = false;
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("collapsed");
    // If the navbar is collapsed, the button's icon is changed to an "X".
    if (navbarToggler.classList.contains("collapsed") && !navbarFakeClicked) {
      navbarToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-octagon" viewBox="0 0 16 16">
  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
      // If the navbar is not collapsed, the button's icon is changed to a "menu".
    } else if (!navbarToggler.classList.contains("collapsed")) {
      navbarToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-list navbar-toggler-button" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
`;
    }
  });

  /**
   * Event listener to handle clicks on the document.
   * If certain conditions are met, it changes the navbar collapse button icon
   * and artificially triggers a click on the navbar collapse button to reset its state.
   *
   * @param {Event} event - The click event object.
   */
  document.addEventListener("click", function (event) {
    const languageSelectorSelect = event.target.closest(".language-selector");
    if (
      !event.target.classList.contains("navbar-toggler") &&
      navbarToggler.classList.contains("collapsed") &&
      !event.target.classList.contains("navbar-toggler-button") &&
      !languageSelectorSelect
    ) {
      navbarToggler.classList.remove("collapsed");
      navbarToggler.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-octagon" viewBox="0 0 16 16">
  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
      //this is to prevent the infinite loop with the event listener below
      navbarFakeClicked = true;
      //minimize the navbar
      navbarToggler.click();
      navbarFakeClicked = false;
    }
  });
}
