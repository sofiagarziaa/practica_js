document.addEventListener('DOMContentLoaded', function () {
    const characterList = document.querySelector('.characterList');

    fetch('https://rickandmortyapi.com/api/character')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let characters = '';

            data.results.forEach(function (character) {
                characters += `
                    <article class="elemento-hijo">
                        <img class="img" src="${character.image}" alt="${character.name}">
                        <div class="info">
                            <h3>${character.name}</h3>
                            <p>Status: ${character.status}</p>
                            <p>Species: ${character.species}</p>
                        </div>
                    </article>
                `;
            });

            characterList.innerHTML = characters;
        })
        .catch(function (error) {
            console.log('Error fetching data:', error);
        });
});
