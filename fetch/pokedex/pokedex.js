
let url = "https://pokeapi.co/api/v2/pokemon";
let pokemonList = [];
const error = err => {
    alert(`Error: ${err}`);
};

//get pokemon

const buscador = document.querySelector("#buscador");
let pkm;

const getPokemon = async () => {
    let id = buscador.value;
    id = id.toLowerCase();

    try {
        let pokemon = await axios.get(`${url}/${id}`);
        pkm = pokemon.data.id;
        return pokemon.data
    } catch (err) {
        error(err);
    }
}



//pokemon in html

const showPokemon = async () => {
    let pokemon = await getPokemon();

    document.querySelector(".pkm-img").setAttribute("src", pokemon.sprites.front_default);

    const title = document.querySelector(".pkm-name");
    title.innerHTML = `${pokemon.id} - ${pokemon.name}`;

    const weight = document.querySelector(".pkm-weight");
    weight.innerHTML = `Weight: ${pokemon.weight}<br>`;     //En algún momento, corregir peso y altura

    const height = document.querySelector(".pkm-height");
    height.innerHTML = `Height: ${pokemon.height}`;

/*
    ability.forEach(pokemon.abilities);     //Como hacer for each para la api??
    pkm.innerHTML = ability;
*/


    const pkmTypes = document.querySelector(".pkm-types");
    pkmTypes.innerHTML = "";
    const types = pokemon.types;
    for (let type of types) {
        let label = document.createElement("label");
        label.innerHTML = (type.type.name);
        label.classList.add(`type-${type.type.name}`);
        pkmTypes.appendChild(label);
    }
}

buscar = document.querySelector("#button-go");
buscar.addEventListener("click", showPokemon);



//falta las etiquetas, las habilidades
//puede ser for each o pokemon.ability[0]

//css: transform para mayúsculas

const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");

const previousPokemon = async () => {
    buscador.value = pkm - 1;
    showPokemon();
    buscador.value="";
}
/*
const changeBackground = () => {
    let arrows = document.querySelector("#left-button");
    arrows.style.backgroundImage = "url(images/botones/left-arrow.png)";
}*/

///dos bloques para los botones donde ubico cada imagen

leftButton.addEventListener("click", ()=>{
    previousPokemon();
}); 


const nextPokemon = async () => {
    buscador.value = pkm + 1;
    showPokemon();
    buscador.value="";
}

rightButton.addEventListener("click", nextPokemon);
