export function manageStackComponents() {
  // Constants used conceptually to store the texts of the stack section.
  let saveTitle = "";
  let saveDesc = "";
  let firstTime = true; // Flag to know if it is the first time the user clicks on an image

  // To temporarily save the content of each stack.
  let title = "";
  let desc = "";

  //Function to reset the content of the stack section
  function resetContent() {
    title.innerHTML = saveTitle;
    desc.innerHTML = saveDesc;
  }

  // Capture custom event
  document
    .querySelector(".stack-icons-container")
    .addEventListener("stackEvent", function (e) {
      title = document.getElementById("stack-title");
      desc = document.getElementById("stack-desc");
      //If it is the first time the user clicks on an image, save the content of the #text-stack div
      if (firstTime) {
        saveTitle = title.textContent;
        saveDesc = desc.textContent;
        firstTime = false;
      }

      //Update the content of the #text-stack div
      title.innerHTML = e.detail.name;
      desc.innerHTML = e.detail.desc;
    });

  //Add the click event to reset the content when you click anywhere outside the images
  document.addEventListener("click", function (event) {
    if (!event.target.classList.contains("stack-img")) {
      resetContent();
    }
  });
}
