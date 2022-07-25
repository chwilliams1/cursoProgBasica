
let botonPokemonJugador = document.getElementById("buttonPokemon");
let spanPokemonPlayer = document.getElementById("pokemonPlayer");
let spanPokemonEnemy = document.getElementById("pokemonEnemy");
let botonFuego = document.getElementById("buttonFuego");
let botonAgua = document.getElementById("buttonAgua");
let botonplanta = document.getElementById("buttonPlanta");
let botonReiniciar = document.getElementById("buttonReiniciar");
let mensajes = document.getElementById("mensajes");
let mensajeElije = document.getElementById("mensajeElije");

let pokemonPlayer;
let pokemonEnemy;
let ataqueJugador;
let ataqueAleatorioEnemy;
let vidasPlayer = 3;
let vidasEnemy = 3;

let secctionSelectPokemon = document.getElementById("selectPokemon");
let sectionSelectAtack = document.getElementById("selectAtack");
sectionSelectAtack.style.display = "none";
botonReiniciar.style.display = "none";

botonPokemonJugador.addEventListener('click',seleccionPokemonPlayer);
botonFuego.addEventListener('click',ataqueFuego);
botonAgua.addEventListener('click',ataqueAgua);
botonplanta.addEventListener('click',ataquePlanta);
botonReiniciar.addEventListener('click',reiniciarJuego);



function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min  +1)+min);
};
function seleccionPokemonPlayer(){
    let inputCharmander = document.getElementById("charmander");
    let inputSquirtle = document.getElementById("squirtle");
    let inputBulbasaur =document.getElementById("bulbasaur");

    if (inputCharmander.checked){
        pokemonPlayer = "Charmander 🔥"
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonplanta.disabled = false;
        anuncVidas();
        sectionSelectAtack.style.display = "block";
        secctionSelectPokemon.style.display = "none";
    }else if(inputSquirtle.checked){
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonplanta.disabled = false;
        pokemonPlayer = "Squirtle 🌊"
        anuncVidas();
        sectionSelectAtack.style.display = "block";
    secctionSelectPokemon.style.display = "none";
    }else if(inputBulbasaur.checked){
        botonFuego.disabled = false;
        botonAgua.disabled = false;
        botonplanta.disabled = false;
        pokemonPlayer = "Bulbasaur 🌱"
        anuncVidas();
        sectionSelectAtack.style.display = "block";
        secctionSelectPokemon.style.display = "none";
    }else{
        mensajeElije.innerText = "Por favor selecciona un Pokemon";

    };
};
function seleccionPokemonPC(){
    let pokemonAleatorio = aleatorio(1,3);
    if (pokemonAleatorio == 1){
        pokemonEnemy = "Charmander 🔥"
    }else if (pokemonAleatorio == 2){
        pokemonEnemy = "Squirtle 🌊"
    }else if (pokemonAleatorio == 3){
        pokemonEnemy = "Bulbasaur 🌱"
    }
};
seleccionPokemonPC();
function ataqueFuego(){
        ataqueJugador = "FUEGO";
        seleccionAtaqueEnemigo();
};
function ataqueAgua(){
    ataqueJugador = "AGUA";
    seleccionAtaqueEnemigo();
};
function ataquePlanta(){
    ataqueJugador = "PLANTA";
    seleccionAtaqueEnemigo();
};
function seleccionAtaqueEnemigo(){
    deshabButton();
    let ataqueAleatorio = aleatorio(1,3);
    if (ataqueAleatorio == 1){
        ataqueAleatorioEnemy = "FUEGO";
    }else if (ataqueAleatorio == 2){
        ataqueAleatorioEnemy = "AGUA";
    }else if (ataqueAleatorio == 3){
        ataqueAleatorioEnemy = "PLANTA";
    }
        combate();
        anuncVidas();
};
function crearMensajeFinal(resultadoFinal){
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;
    mensajes.appendChild(parrafo);
    botonFuego.disabled = true;
    botonplanta.disabled = true;
    botonAgua.disabled = true;
};
function crearMensajes(resultado){
    let parrafo = document.createElement('p');
    parrafo.innerHTML = "Has atacado con " + ataqueJugador + ", el enemigo ha atacado con, "+ ataqueAleatorioEnemy + resultado;
    mensajes.appendChild(parrafo);
};
function anuncVidas(){
        spanPokemonPlayer.innerText = ("Tu pokemon " + pokemonPlayer + " tiene " + vidasPlayer + " vidas");
        spanPokemonEnemy.innerText = ("El pokemon de tu enemigo " + pokemonEnemy + " tiene " + vidasEnemy + " vidas");
};
function revisarVidas(){
    if (vidasEnemy ==0){
        crearMensajeFinal("Has finalizado el juego, felicidades Ganaste!!")
        botonReiniciar.style.display = "block";
    }else if (vidasPlayer==0){
        crearMensajeFinal("Lo Siento, Perdiste el juego")
        botonReiniciar.style.display = "block";
    }
    
};
function combate(){
    //empate
    if (ataqueJugador == ataqueAleatorioEnemy){
        crearMensajes(", Empate");
    }//WIN
    else if(ataqueJugador =="FUEGO" && ataqueAleatorioEnemy == "PLANTA" || ataqueJugador =="AGUA" && ataqueAleatorioEnemy == "FUEGO" || ataqueJugador =="PLANTA" && ataqueAleatorioEnemy == "AGUA"  ){
        vidasEnemy--;
        crearMensajes(", Ganaste");
    }else{
        vidasPlayer --;
        crearMensajes(", Perdiste");
    }
    revisarVidas();
};
function deshabButton(){
    botonPokemonJugador.disabled = true;
};
function reiniciarJuego(){
    document.location.reload();
}
