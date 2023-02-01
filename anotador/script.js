vectorPuntos = ['puntosEllos', 'puntosNosotros'];
vectorMalas = ['malasEllos', 'malasNosotros'];
vectorBuenas = ['buenasEllos', 'buenasNosotros'];

function sumar(x) {
    puntos = document.getElementById(vectorPuntos[x]);
    malas = document.getElementById(vectorMalas[x]);
    buenas = document.getElementById(vectorBuenas[x]);
    c = Number(puntos.innerHTML);
    if (c < 30) {
        c++;
        puntos.innerHTML = c;
        if (c < 16) {
            malas.innerHTML++;
        }
        else {
            buenas.innerHTML++;
        }
    }
    ganando();
}

function restar(x) {
    puntos = document.getElementById(vectorPuntos[x]);
    malas = document.getElementById(vectorMalas[x]);
    buenas = document.getElementById(vectorBuenas[x]);
    c = Number(puntos.innerHTML);
    if (c > 0) {
        c--;
        puntos.innerHTML = c;
        if (c > 14) {
            buenas.innerHTML--;
        }
        else {
            malas.innerHTML--;
        }
    }
    ganando();
}

function ganando() {
    ellos = Number(document.getElementById(vectorPuntos[0]).innerHTML);
    nosotros = Number(document.getElementById(vectorPuntos[1]).innerHTML);
    ganador = document.getElementById('ganador');
    diferencia = document.getElementById('diferencia');
    if (ellos > nosotros) {
        dif = ellos - nosotros;
        if (ellos === 30) {
            ganador.innerHTML = 'Ganador del partido: Ellos';
            diferencia.innerHTML = 'La diferencia fue de: ' + dif;
        }
        else {
            ganador.innerHTML = 'Van ganando: Ellos';
            diferencia.innerHTML = 'La diferencia es de: ' + dif;
        }
    }
    else if (ellos < nosotros) {
        dif = nosotros - ellos;
        if (nosotros === 30) {
            ganador.innerHTML = 'Ganador del partido: Nosotros';
            diferencia.innerHTML = 'La diferencia fue de: ' + dif;
        }
        else {
            ganador.innerHTML = 'Van ganando: Nosotros';
            diferencia.innerHTML = 'La diferencia es de: ' + dif;
        }
    }
    else if (ellos === 0 && nosotros === 0) {
        reiniciar();
    }
    else if (ellos === nosotros) {
        ganador.innerHTML = 'Empate';
        diferencia.innerHTML = '';
    }
}

function reiniciar() {
    ['ganador', 'diferencia'].forEach(x => document.getElementById(x).innerHTML = '');
    sumaVectores = vectorPuntos.concat(vectorBuenas).concat(vectorMalas).forEach(x => document.getElementById(x).innerHTML = 0);
}