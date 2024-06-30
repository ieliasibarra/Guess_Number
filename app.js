let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    intentos++; 

    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElementos('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElementos('p', 'El número es menor');
        } else {
            asignarTextoElementos('p', 'El número es mayor');
        }
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElementos('h1', 'Juego del Número Secreto');
    asignarTextoElementos('p', 'Indica un Número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
