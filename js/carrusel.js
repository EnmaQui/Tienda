document.addEventListener('DOMContentLoaded', function() {
    // Array de descripciones
    const descriptions = [
        "Descripción de la imagen amarilla.",
        "Descripción de la imagen diferente.",
        "Descripción de la imagen gris.",
        "Descripción de la imagen mezclada.",
        "Descripción de la imagen naranja."
    ];

    // Inicializa la descripción y el índice del slide actual
    let currentIndex = 0;
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = descriptions[currentIndex];

    // Función para manejar el botón "Anterior"
    document.getElementById('prev-button').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : descriptions.length - 1;
        updateDescription();
    });

    // Función para manejar el botón "Siguiente"
    document.getElementById('next-button').addEventListener('click', function() {
        currentIndex = (currentIndex < descriptions.length - 1) ? currentIndex + 1 : 0;
        updateDescription();
    });

    // Función para actualizar la descripción
    function updateDescription() {
        descriptionElement.textContent = descriptions[currentIndex];
    }
});
