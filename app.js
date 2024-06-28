let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function intentoDeUsuario() {
    alert(`click desde el botón`);
    return;
}

function generarNumeroSecreto() {
    return  Math.floor(Math.random() * 10) + 1;
}


asignarTextoElementos('h1', 'Juego del Número Secreto');
asignarTextoElementos('p', 'Indica un Número del 1 al 10');
