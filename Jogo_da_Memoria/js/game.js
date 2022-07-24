const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const pontos = document.querySelector('.pontos');

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer'
];

const createElement = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;

    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const checaFimDeJogo = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos!`);
    }
}

const checaCarta = () => {
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem');
    const segundoPersonagem = segundaCarta.getAttribute('data-personagem');
    const pontosAtuais = +pontos.innerHTML;

    if (primeiroPersonagem === segundoPersonagem) {
        primeiraCarta.firstChild.classList.add('disabled-card');
        segundaCarta.firstChild.classList.add('disabled-card');
        pontos.innerHTML = pontosAtuais + 10;

        primeiraCarta = '';
        segundaCarta = '';

        checaFimDeJogo();

    }else{
        setTimeout(() => { 
            
            primeiraCarta.classList.remove('revela-carta');
            segundaCarta.classList.remove('revela-carta');
            pontos.innerHTML = pontosAtuais - 2;

            primeiraCarta = '';
            segundaCarta = '';
            
        }, 600);
    }
}

const revelaCarta = ({ target }) => {
    if (target.parentNode.className.includes('revela-carta')) {
        return;
    }

    if (primeiraCarta === '') {

        target.parentNode.classList.add('revela-carta');
        primeiraCarta = target.parentNode;

    } else if (segundaCarta === '') {

        target.parentNode.classList.add('revela-carta');
        segundaCarta = target.parentNode;
        checaCarta();
    }

}

const creatCard = (personagem) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelaCarta);
    card.setAttribute('data-personagem', personagem);

    return card;
}

const loadGame = () => {

    const personagensDuplicados = [...personagens, ...personagens];

    const arrayEmbaralhado = personagensDuplicados.sort(() => Math.random() - 0.5);

    arrayEmbaralhado.forEach((personagem) => {

        const card = creatCard(personagem);
        grid.appendChild(card);

    });
}

const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000);
}

window.onload = () => {    
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();

    loadGame();
}

