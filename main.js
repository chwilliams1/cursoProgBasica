// Piedra = 1 / Papel=2 / Tijeras = 3
let player = 0;
let computadora = 0;
let triunfos = 0;
let perdidas = 0;

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min  +1)+1);
};
function seleccionJugador(player){
    if (player == 1){
        return "Piedra"
    }else if (player ==2){
        return "Papel"
    }else if (player ==3){
        return "Tijeras"
    }
};
function seleccionPc(computadora){
    if (computadora == 1){
        return "Piedra"
    }else if (computadora ==2){
        return "Papel"
    }else if (computadora ==3){
        return "Tijeras"
    }
};
function juego(jugador,pc){
    player = seleccionJugador(jugador);
    cpu = seleccionPc(pc);
    quienGana(triunfos,perdidas);
    // Caso gana player
    if ((jugador == 1 && pc ==3) || (jugador == 2 && pc == 1)|| (jugador == 3 && pc == 2) ){
        alert("Has seleccionado " + player + ", contra "+ cpu + ". ¡¡Felicidades, has ganado!!")
        triunfos += 1;
    }//Caso empate
    else if((jugador == pc)){
        alert("Has seleccionado " + player + ", contra "+ cpu + ". Empate :|")
    }//Caso pierde jugador
    else if((jugador == 1 && pc ==2) || (jugador == 2 && pc == 3)|| (jugador == 3 && pc == 1)){
        alert("Has seleccionado " + player + ", contra "+ cpu + ". Lo lamento, has perdido")
        perdidas += 1;
    }//Caso input no valido
    else{
        player = prompt("Por favor selecciona, una opcion valida: Piedra(1), Papel(2), Tijera(3)");
        computadora = Math.floor(Math.random()*(3)+1);
        juego(player,computadora);
    }
    
};
function quienGana(win,lose){
    if (win == 3){
        alert("Felicidades haz ganado a la computadora");
        win = 0;
    }else if (lose ==3){
        alert("Lo sentimos, la computadora te ha vencido");
        win = 0;
    }
}


player = prompt("Elije, Piedra(1), Papel(2), Tijera(3)");


while(triunfos < 3 && perdidas < 3){
    computadora = aleatorio(1,3);
    juego(player,computadora);
}

alert("Ganaste: " + triunfos + " veces. Perdiste: " + perdidas + " veces")
