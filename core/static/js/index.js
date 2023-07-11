// Obtén una referencia al div #text-stack
let textStack = document.getElementById('text-stack');
let title = document.getElementById('stack-title');
let desc = document.getElementById('stack-desc');
const saveTitle = title.textContent;
const saveDesc = desc.textContent;

// Obtén una referencia a todas las imágenes con clase .stack-img
let stackImages = document.querySelectorAll('.stack-img');

// Función para restablecer el contenido del div #text-stack
function resetContent() {
  // Restablece el contenido a su estado original después de 1 segundo
    title.innerHTML = saveTitle;
    desc.innerHTML = saveDesc;
}

// Itera sobre cada imagen y agrega el evento de clic
stackImages.forEach(function(image) {
  image.addEventListener('click', function() {
    // Obtén el nuevo contenido del div a partir del atributo "alt" de la imagen

    // Actualiza el contenido del div #text-stack
    title.innerHTML = image.getAttribute('data-title');
    desc.innerHTML = image.getAttribute('alt');
  });
});

// Agrega el evento de clic para restablecer el contenido cuando se haga clic en cualquier lugar fuera de las imágenes
document.addEventListener('click', function(event) {
  if (!event.target.classList.contains('stack-img')) {
    resetContent();
  }
});