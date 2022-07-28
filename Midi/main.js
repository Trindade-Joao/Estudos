// function tocaSomPom () {
//     document.querySelector('#som_tecla_pom').play();
// }
let contador = 0;

const listaDeSons = document.querySelectorAll('audio');

const listaDeTeclas = document.querySelectorAll('.tecla');
function tocaSom() {
    listaDeSons[contador].play()
}

// listaDeTeclas[0].onclick = tocaSomPom;

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSom;

    contador++;
}