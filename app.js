let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) ;

    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElementos('p', `Acertaste el numero en  ${intentos} ${(intentos == 1)?'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElementos('p', 'El numero es menor');
        }else{
            asignarTextoElementos('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    return  Math.floor(Math.random() * 10) + 1;
}


asignarTextoElementos('h1', 'Juego del Número Secreto');
asignarTextoElementos('p', 'Indica un Número del 1 al 10');
