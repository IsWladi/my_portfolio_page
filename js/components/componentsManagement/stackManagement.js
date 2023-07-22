export function manageStackComponents() {
  //Function to reset the content of the #text-stack div
  function resetContent() {
    title.innerHTML = saveTitle;
    desc.innerHTML = saveDesc;
  }

  let title = document.getElementById("stack-title");
  let desc = document.getElementById("stack-desc");
  const saveTitle = title.textContent;
  const saveDesc = desc.textContent;

  let stackImages = document.querySelectorAll(".stack-img");

  //Iterate over each image and add the click event
  stackImages.forEach(function (image) {
    image.addEventListener("click", function () {
      //Update the content of the #text-stack div
      title.innerHTML = image.getAttribute("name");
      desc.innerHTML = image.getAttribute("desc");
    });
  });

  //Add the click event to reset the content when you click anywhere outside the images
  document.addEventListener("click", function (event) {
    if (!event.target.classList.contains("stack-img")) {
      resetContent();
    }
  });
}
