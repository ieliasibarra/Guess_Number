function intentoDeUsuario(){
    alert(`click desde el boton`);
}

function asignartectoElementos(elemnto, texto){
    let elementoHTML = document.querySelector(elemnto);
    elementoHTML.innerHTML = texto;
}

asignartectoElementos('h1','juego del Numero Secreto');
asignartectoElementos('p','Indica un Numero del 1 al 10');