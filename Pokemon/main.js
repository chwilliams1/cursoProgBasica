
let botonPokemonJugador = document.getElementById("buttonPokemon");
let spanPokemonPlayer = document.getElementById("pokemonPlayer");
let spanPokemonEnemy = document.getElementById("pokemonEnemy");
let botonFuego = document.getElementById("buttonFuego");
let botonAgua = document.getElementById("buttonAgua");
let botonTierra = document.getElementById("buttonPlanta");
let botonReiniciar = document.getElementById("buttonReiniciar");

botonPokemonJugador.addEventListener('click',seleccionPokemonPlayer);

function seleccionPokemonPlayer(){
    let inputCharmander = document.getElementById("charmander");
    let inputSquirtle = document.getElementById("squirtle");
    let inputBulbasaur =document.getElementById("bulbasaur");
    let pokemonPlayer;
    let vidasPlayer = 3;

    if (inputCharmander.checked){
        pokemonPlayer = "Charmander 🔥"
        spanPokemonPlayer.innerText = ("Tu pokemon " + pokemonPlayer + " tiene " + vidasPlayer + " vidas");
        seleccionPokemonPC()
    }else if(inputSquirtle.checked){
        pokemonPlayer = "Squirtle 🌊"
        spanPokemonPlayer.innerText = ("Tu pokemon " + pokemonPlayer + " tiene " + vidasPlayer + " vidas");
        seleccionPokemonPC()
    }else if(inputBulbasaur.checked){
        pokemonPlayer = "Bulbasaur 🌱"
        spanPokemonPlayer.innerText = ("Tu pokemon " + pokemonPlayer + " tiene " + vidasPlayer + " vidas");
        seleccionPokemonPC()
    }else{
        alert("Por favor selecciona un Pokemon")
    };
};
function seleccionPokemonPC(){
    let ataqueAleatorio = aleatorio(1,3);
    let vidasEnemy = 3;
    let pokemonEnemy;
    if (ataqueAleatorio == 1){
        pokemonEnemy = "Charmander 🔥"
    }else if (ataqueAleatorio == 2){
        pokemonEnemy = "Squirtle 🌊"
    }else if (ataqueAleatorio == 3){
        pokemonEnemy = "Bulbasaur 🌱"
    }
    spanPokemonEnemy.innerText = ("El pokemon de tu enemigo " + pokemonEnemy + " tiene " + vidasEnemy + " vidas");
};

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min  +1)+min);
};