const listaDeTeclas = document.querySelectorAll('.tecla');
const body = document.querySelector('body');
const botaoTemaEscuro = document.querySelector('.dark_mode_btn');

botaoTemaEscuro.onclick = () => {
    if (body.classList[0] === 'dark'){
        body.classList.remove('dark');
    }else{
        body.classList.add('dark');
    }
}

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = () => {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }    
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}
