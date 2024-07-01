let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSortedos = [];
let numeroMaximo = 10;


function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);



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
        intentos++; 
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
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSortedos);
    // si ya sorteamos todos los numeros 
    if(listaNumerosSortedos.length == numeroMaximo){
        asignarTextoElementos('p','Ya se sortearon todos los numeros posibles');
    }

    if(listaNumerosSortedos.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSortedos.push(numeroGenerado);
        return numeroGenerado;
    }

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
