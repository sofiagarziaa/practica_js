document.addEventListener('DOMContentLoaded', async () => {
    // Extraer el ID del personaje de la query string en la URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const characterId = urlParams.get('id');

    // Verificar si el ID del personaje está presente
    if (!characterId) {
        console.error('No se proporcionó un ID de personaje en la URL');
        return;
    }

    // Construir el objeto literal con el ID del personaje
    const character = {
        id: characterId
    };

    // Obtener todos los datos del personaje mediante el endpoint "Get a single character"
    const apiUrl = `https://rickandmortyapi.com/api/character/${character.id}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener los datos del personaje');
        }
        const characterData = await response.json();

        // Asignar los datos del personaje a los elementos HTML
        document.querySelector('.character-name').innerHTML= characterData.name;
        document.querySelector('.character-status').innerHTML += characterData.status;
        document.querySelector('.character-species').innerHTML += characterData.species;
        document.querySelector('.character-image').src = characterData.image;
    } catch (error) {
        console.error('Error:', error);
    }
});
