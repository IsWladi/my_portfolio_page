const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    const selectedValue = this.getAttribute('data-value');
    const selectedText = this.textContent;
    document.getElementById('selectedValue').textContent = selectedText;
    // Aquí puedes llamar a la función correspondiente o realizar otras acciones
    // basadas en el valor seleccionado
    console.log('Seleccionaste:', selectedValue);
    localStorage.setItem('language', selectedValue);

    // Obtener el valor del lenguaje almacenado en el localStorage
    const savedLanguage = localStorage.getItem('language');
    // Obtener el Token CSRF de la cookie específica de Django
    const csrftoken = getCookie('csrftoken');

    // Construir la URL con el parámetro de lenguaje
    const url = `/save_language/?language=${encodeURIComponent(savedLanguage)}`;

    // Enviar el valor del lenguaje al servidor Django
    console.log('Enviando:', savedLanguage);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({ language: "hola" }),
    })
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
      })
      .catch(error => {
        // Manejar el error si es necesario
      });


    // Recargar la página
    // location.reload();
  });
});

// Función para obtener el valor de la cookie del Token CSRF
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}
