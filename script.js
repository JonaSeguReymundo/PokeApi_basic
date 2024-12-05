function buscarPokemon() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemonInfo = document.getElementById('pokemon-info');
            pokemonInfo.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Peso:</strong> ${data.weight} lb</p>
                <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('pokemon-info').innerHTML = '<p>Pokémon no encontrado</p>';
        });
}