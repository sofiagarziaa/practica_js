document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.querySelector(".characterList");

    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
        
        let characters = '';

        data.results.forEach(character => {
            characters += `
                <article>
                    <img src="${character.image}" alt="${character.name}">
                    <p>Name: ${character.name}</p>
                    <p>Status: ${character.status}</p>
                </article>
            `;
        });

        characterList.innerHTML = characters;
    })
    .catch(error => console.error("Error fetching characters:", error));
});
